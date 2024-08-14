import type { PageServerLoad } from './$types'
import type { HomePageProps, MovieLists } from '$lib/types/pages/home'

export const load = (async (event) => {
	const movies: MovieLists = {
		suggestions: await event.fetch('/api/movie', { method: 'GET' }).then((res) => res.json())
	}
	return {
		movies
	} as HomePageProps
}) satisfies PageServerLoad
