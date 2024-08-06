import type { PageServerLoad } from './$types'
import { message, setError, superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { loginSchema, registerSchema } from '$lib/schemas/auth-schemas'
import { type Actions } from '@sveltejs/kit'
import prismadb from '$lib/config/prismadb'
import bcrypt from 'bcrypt'

export const load: PageServerLoad = async () => {
	return {
		registerForm: await superValidate(zod(registerSchema)),
		loginForm: await superValidate(zod(loginSchema))
	}
}

export const actions: Actions = {
	register: async ({ request }) => {
		const form = await superValidate(request, zod(registerSchema))
		if (!form.valid) {
			return message(form, {
				status: 400,
				message: 'Invalid form.',
				description: `Check the "${Object.keys(form.errors)}" ${Object.keys(form.errors).length > 1 ? 'fields' : 'field'} to make sure they are correct`
			})
		}

		const existingUser = await prismadb.user.findUnique({
			where: { email: form.data.email }
		})
		if (existingUser) {
			setError(form, 'email', 'Email already exists.')
			return message(form, {
				status: 422,
				message: 'Registration error.',
				description: 'Email already exists.'
			})
		}

		const hashedPassword = await bcrypt.hash(form.data.password, 12)
		await prismadb.user.create({
			data: {
				email: form.data.email,
				name: form.data.name,
				password: hashedPassword,
				image: '/assets/images/default/guest-avatar.png',
				emailVerified: new Date()
			}
		})

		return message(form, {
			status: 200,
			message: 'Successful registration.',
			description: 'We are glad that you chose us.'
		})
	},
	login: async ({ request }) => {
		const form = await superValidate(request, zod(loginSchema))
		if (!form.valid) {
			return message(form, {
				status: 400,
				message: 'Invalid form.',
				description: `Check the "${Object.keys(form.errors)}" ${Object.keys(form.errors).length > 1 ? 'fields' : 'field'} to make sure they are correct`
			})
		}

		const existingUser = await prismadb.user.findUnique({
			where: { name: form.data.name }
		})
		if (!existingUser) {
			setError(form, 'name', 'User does not exist.')
			setError(form, 'password', 'Check your data.')
			return message(form, {
				status: 400,
				message: 'Authorization Error.',
				description: 'User does not exist, check the authorization data.'
			})
		}

		if (!bcrypt.compareSync(form.data.password, existingUser.password)) {
			setError(form, 'name', 'User does not exist.')
			setError(form, 'password', 'Check your data.')
			return message(form, {
				status: 400,
				message: 'Authorization Error.',
				description: 'User does not exist, check the authorization data.'
			})
		}

		return message(form, {
			status: 200,
			message: 'Successfully logged in.',
			description: `Glad to see you again ${form.data.name}.`
		})
	}
}
