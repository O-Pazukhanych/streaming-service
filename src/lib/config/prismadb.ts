import { DATABASE_URL } from '$env/static/private'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

//@ts-expect-error @typescript-eslint/ban-ts-comment
const client =
	global?.prismadb ||
	new PrismaClient({
		datasources: {
			db: {
				url: DATABASE_URL
			}
		}
	}).$extends(withAccelerate())
if (process.env.NODE_ENV !== 'production') {
	//@ts-expect-error @typescript-eslint/ban-ts-comment
	global.prismadb = client
}

export default client
