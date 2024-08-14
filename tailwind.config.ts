import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

import * as daisyuiThemes from 'daisyui/src/theming/themes'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector',

	theme: {
		screens: {
			'2xs': '375px',
			xs: '425px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
			'2xl': '1780px'
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				lg: '2rem',
				xl: '2rem',
				'2xl': '3rem'
			}
		},
		extend: {
			boxShadow: {
				top: '0 -14px 20px rgba(0, 0, 0, 0.1), 0 -8px 14px rgba(0, 0, 0, 0.1)',
				card: '0 0 0.5px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)'
			}
		}
	},

	plugins: [daisyui],

	daisyui: {
		themes: [
			{
				dark: {
					...daisyuiThemes['dark'],
					primary: '#ff0000',
					'primary-accent': '#cd0e0e',
					'base-100': '#202020',
					'base-200': '#222222',
					'base-300': '#272829',
					'base-content': '#a3a3a3'
				},
				light: {
					...daisyuiThemes['light'],
					primary: '#29b6f6',
					'primary-accent': '#2794c5',
					'base-100': '#ffffff',
					'base-200': '#f9f9f9',
					'base-300': '#f3f3f3',
					'base-content': '#757f95'
				}
			}
		],
		darkMode: 'selector',
		base: true,
		styled: true,
		utils: true,
		prefix: '',
		logs: true,
		themeRoot: ':root'
	}
} as Config
