export type Routes = { [key: string]: Route }

export type ThemeType = 'dark' | 'light'

export type ThemePalletType = { [key in ThemeType]: { to: ThemeType; darkMode: boolean } }

export interface ConfigStoreData {
	currentRoute: string
	isDarkMode: boolean
}

export interface LocalStorageConfigData {
	theme: ThemeType
}

export interface Route {
	href: string
	label: string
	icon?: string
	details?: Route[]
	innerRoutes?: Routes
}
