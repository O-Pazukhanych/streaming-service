import type { Movie } from '$lib/types/movie'

export interface MovieLists {
	mainBillboard: Movie[]
	novelties: Movie[]
	wellRated: Movie[]
	mostLiked: Movie[]
	cartoons?: Movie[]
	serials?: Movie[]
}
