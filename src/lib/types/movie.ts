export interface Movie {
	id: string
	title: string
	description: string
	video_url: string
	poster_url: string
	genre: string[]
	type: 'movie' | 'cartoon' | 'series'
	duration: number
	year: number
	quality: string
	preferences: number
	imbd: number
}
