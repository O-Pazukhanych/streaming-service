import { writable } from 'svelte/store'
import type { Session } from '@auth/sveltekit'

function createSessionStore() {
	const { subscribe, set } = writable<Session>({
		user: {
			name: 'Guest',
			email: null,
			image: '/assets/images/default/guest-avatar.png'
		},
		expires: ''
	})

	return {
		subscribe,
		set(session: Session) {
			set(session)
		}
	}
}

export const sessionStore = createSessionStore()
