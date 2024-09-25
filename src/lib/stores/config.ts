import { writable } from 'svelte/store'
import type { ConfigStoreData } from '$lib/types/config'

function createConfigStore() {
	const { subscribe, set, update } = writable<ConfigStoreData | null>(null)

	return {
		subscribe,
		set(config: ConfigStoreData | null): void {
			set(config)
		},
		updateCurrentRoute(route: string): void {
			update(
				(config) =>
					({
						...config,
						currentRoute: route
					}) as ConfigStoreData
			)
		},
		updateDarkMode(isDarkMode: boolean): void {
			update(
				(config) =>
					({
						...config,
						isDarkMode
					}) as ConfigStoreData
			)
		}
	}
}

export const configStore = createConfigStore()
