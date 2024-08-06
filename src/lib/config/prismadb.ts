import { PrismaClient } from '@prisma/client'

//@ts-expect-error @typescript-eslint/ban-ts-comment
const client = global?.prismadb || new PrismaClient()
if (process.env.NODE_ENV !== 'production') {
	//@ts-expect-error @typescript-eslint/ban-ts-comment
	global.prismadb = client
}

export default client
