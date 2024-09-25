import { handle as authorizationHandle } from '$lib/config/auth'
import { sequence } from '@sveltejs/kit/hooks'

export const handle = sequence(authorizationHandle)
