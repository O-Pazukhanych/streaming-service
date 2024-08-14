import type { Movie } from '$lib/types/movie'

export interface HomePageProps {
	movies: MovieLists
}

export interface MovieLists {
	suggestions: Movie[]
}
