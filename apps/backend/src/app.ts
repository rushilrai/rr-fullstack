import { env } from './env.ts'
import { setupDbConnection } from './lib/db/config.ts'
import { setupServer } from './lib/server/config.ts'

async function main() {
  console.log(`Environment validated for ${env.NODE_ENV}`)

  await setupDbConnection()
  await setupServer()

  console.log('backend running')
}

main().catch((error) => {
  console.error('Setup failed', error)
  process.exit(1)
})
