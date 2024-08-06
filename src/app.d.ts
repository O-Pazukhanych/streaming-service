import type { PrismaClient } from '@prisma/client'
import type { Env } from '@sveltejs/kit/src/types/internal'

declare global {
	namespace App {
		interface Platform {
			env: Env
			cf: CfProperties
			ctx: ExecutionContext
		}
	}
	namespace global {
		// eslint-disable-next-line no-var
		export var prismadb: PrismaClient
	}
}

export {}
