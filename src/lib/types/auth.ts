export type AuthFormVariant = 'login' | 'register'

export interface AuthData {
	name: string
	email?: string
	password: string
}
