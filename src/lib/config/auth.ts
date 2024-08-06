import { SvelteKitAuth } from '@auth/sveltekit'
import Credentials from '@auth/core/providers/credentials'
import GitHub from '@auth/sveltekit/providers/github'
import Google from '@auth/sveltekit/providers/google'
import {
	AUTH_GITHUB_ID,
	AUTH_GITHUB_SECRET,
	AUTH_GOOGLE_ID,
	AUTH_GOOGLE_SECRET,
	AUTH_SECRET
} from '$env/static/private'
import prismadb from '$lib/config/prismadb'
import { compare } from 'bcrypt'

export const { handle } = SvelteKitAuth({
	providers: [
		Credentials({
			id: 'credentials',
			name: 'Credentials',
			credentials: {
				name: {
					label: 'Name',
					type: 'text'
				},
				password: {
					label: 'Password',
					type: 'password'
				}
			},
			async authorize(credentials) {
				if (!credentials.name || !credentials.password) {
					throw Error('Username and Password is required')
				}

				const user = await prismadb.user.findUnique({
					where: {
						name: credentials.name.toString()
					}
				})

				if (!user || !user.password) {
					throw Error('Username does not exist')
				}

				const isCorrectPassword = await compare(
					credentials.password.toString(),
					user.password
				)
				if (!isCorrectPassword) {
					throw Error('Incorrect password')
				}

				return user
			}
		}),
		GitHub({ clientId: AUTH_GITHUB_ID, clientSecret: AUTH_GITHUB_SECRET }),
		Google({ clientId: AUTH_GOOGLE_ID, clientSecret: AUTH_GOOGLE_SECRET })
	],
	callbacks: {
		// JWT get sent to server?
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token
			}
			return token
		},
		async session({ session, token }) {
			//@ts-expect-error @typescript-eslint/ban-ts-comment
			session.access_token = token.accessToken
			return session
		}
	},
	trustHost: true,
	pages: {
		signIn: '/auth'
	},
	session: {
		strategy: 'jwt'
	},
	secret: AUTH_SECRET,
	debug: process.env.NODE_ENV === 'development'
})
