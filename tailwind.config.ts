import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

import * as daisyuiThemes from 'daisyui/src/theming/themes'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector',

	theme: {
		screens: {
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
		extend: {}
	},

	plugins: [daisyui],

	daisyui: {
		themes: [
			{
				dark: {
					...daisyuiThemes['dark'],
					primary: '#ff0000',
					'base-100': '#202020',
					'base-200': '#222222',
					'base-300': '#272829',
					'base-content': '#a3a3a3'
				}
			}
		],
		darkMode: 'dark',
		base: true,
		styled: true,
		utils: true,
		prefix: '',
		logs: true,
		themeRoot: ':root'
	}
} as Config
