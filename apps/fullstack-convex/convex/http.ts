import { httpAction } from 'convex/_generated/server'
import { httpRouter } from 'convex/server'

const http = httpRouter()

http.route({
  path: '/health',
  method: 'GET',
  handler: httpAction(async () => {
    return new Response(JSON.stringify({ status: 'alive' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  }),
})

export default http
