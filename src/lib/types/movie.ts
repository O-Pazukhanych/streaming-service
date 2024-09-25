export interface MovieReview {
	id: string
	movieId: string
	created_at: Date
	updated_at: Date
	liked: number
	unliked: number
}

export interface Movie {
	id: string
	title: string
	description: string
	video_url: string
	poster_url: string
	genre: string[]
	type?: 'movie' | 'cartoon' | 'serial'
	duration: number
	year: number
	quality: string
	preferences?: number
	imdb: number,
	created_at?: Date
	updated_at?: Date
	movieReview?: MovieReview
}
