import { z } from 'zod'

export const registerSchema = z.object({
	name: z.string().min(3, 'Username must be at least than 3 letters'),
	email: z.string().min(4, 'Email is required').email('Invalid email address'),
	password: z.string().min(8, 'Password must be at least than 8 symbols')
})

export const loginSchema = z.object({
	name: z.string().min(3, 'Username must be at least than 3 letters'),
	password: z.string().min(8, 'Password must be at least than 8 symbols')
})
