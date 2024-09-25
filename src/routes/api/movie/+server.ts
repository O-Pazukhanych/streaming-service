import { json } from '@sveltejs/kit'
import prismadb from '$lib/config/prismadb'

export async function GET() {
	try {
		const movies = await prismadb.movie.findMany({
			include: {
				movieReview: true,
			}
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
