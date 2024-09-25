import type { Routes } from '$lib/types/config'

export const routes: Routes = {
	home: {
		href: '/',
		label: 'home',
		icon: ''
	},
	auth: {
		href: '/auth',
		label: 'Authorization'
	},
	movies: {
		href: '/movies',
		label: 'movies',
		icon: ''
	},
	series: {
		href: '/serials',
		label: 'tv shows',
		icon: ''
	},
	cartoons: {
		href: '/cartoons',
		label: 'cartoons',
		icon: ''
	},
	category: {
		href: '/category',
		label: 'category',
		details: [
			{
				href: '/action',
				label: 'action'
			},
			{
				href: '/comedy',
				label: 'comedy'
			},
			{
				href: '/drama',
				label: 'drama'
			},
			{
				href: '/horror',
				label: 'horror'
			},
			{
				href: '/psychological',
				label: 'psychological'
			},
			{
				href: '/musical',
				label: 'musical'
			}
		]
	},
	profile: {
		href: '/profile',
		label: 'profile',
		innerRoutes: {
			settings: {
				href: '/profile/settings',
				label: 'settings'
			}
		}
	}
}
