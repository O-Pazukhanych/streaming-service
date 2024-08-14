import { writable } from 'svelte/store'
import { browser } from '$app/environment'
import type { LocalStorageConfigData, ThemeType } from '$lib/types/config'
import { configStore } from '$lib/stores/config'

function createLocalStorageConfig() {
	const { subscribe, set, update } = writable<LocalStorageConfigData | null>(null)

	function setToLocalStorage(config: LocalStorageConfigData | null): void {
		if (browser) {
			for (const key of Object.keys(config || {})) {
				localStorage.setItem(key, String(config?.[key as keyof typeof config]))
			}
		}
	}

	return {
		subscribe,
		set(config: LocalStorageConfigData | null): void {
			set(config)
			setToLocalStorage(config)
		},
		updateTheme(theme: string): void {
			update((config: LocalStorageConfigData | null): LocalStorageConfigData => {
				const updatedConfig = {
					...config,
					theme: theme as ThemeType
				} as LocalStorageConfigData
				configStore.updateDarkMode(theme === 'dark')
				setToLocalStorage(updatedConfig)
				return updatedConfig
			})
		}
	}
}

export const localStorageConfigStore = createLocalStorageConfig()
