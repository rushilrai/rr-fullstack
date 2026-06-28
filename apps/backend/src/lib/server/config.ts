import { cors } from '@elysiajs/cors'
import { Elysia } from 'elysia'

import { env } from '../../env.ts'
import { healthRoutes } from '../../modules/health/router.ts'
import { sampleRoutes } from '../../modules/sample/router.ts'
import { NotFoundError } from '../errors.ts'

function getCorsOrigins() {
  if (env.NODE_ENV === 'development') {
    return true
  }

  return env.CORS_ORIGINS
}

export function createApp() {
  const apiRoutes = new Elysia({ prefix: '/api' })
    .use(healthRoutes)
    .use(sampleRoutes)

  return new Elysia({ name: 'monorepo-backend' })
    .use(
      cors({
        origin: getCorsOrigins(),
        credentials: true,
      }),
    )
    .use(apiRoutes)
    .onError(({ code, error, status }) => {
      if (code === 'VALIDATION') {
        return
      }

      if (error instanceof NotFoundError) {
        return status(404, { message: error.message })
      }

      console.error('Request failed', error)

      return status(500, { message: 'Internal Server Error' })
    })
}

export async function setupServer() {
  const app = createApp()

  app.listen({
    hostname: env.HOST,
    port: env.PORT,
  })

  console.log(`Server is running on port ${env.PORT} and host ${env.HOST}`)

  return app
}
