import prismadb from '$lib/config/prismadb'
import { json } from '@sveltejs/kit'

export async function GET({url}) {
	try {
		const movies = await prismadb.movie.findMany({
			where: {
				type: {
					equals: 'serial'
				}
			},
			orderBy: url.searchParams.get('orderKey')
				? JSON.parse(url.searchParams.get('orderKey') as string)
				: { updated_at: 'desc' },
			select: {
				id: true,
				title: true,
				description: true,
				poster_url: true,
				genre: true,
				duration: true,
				year: true,
				quality: true,
				imdb: true,
				movieReview: true,
			},
			take: 12
		})
		return json(movies, { status: 200 })
	} catch (error) {
		console.log(error)
		return json(
			{
				error: error,
				status: 500,
				// @ts-ignore
				message: error?.message
			},
			{ status: 400 }
		)
	}
}
