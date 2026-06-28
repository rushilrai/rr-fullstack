import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

import { env } from '../../env.ts'
import { schema } from '../../schema.ts'

export type Database = NodePgDatabase<typeof schema>

let db: Database | null = null
let pool: Pool | null = null

function createPool() {
  if (pool) return pool

  pool = new Pool({ connectionString: env.DATABASE_URL })
  return pool
}

export function getDb() {
  if (!db) {
    db = drizzle(createPool(), { schema })
  }

  return db
}

export async function setupDbConnection() {
  try {
    const database = getDb()

    const testQueryResult = await createPool().query('SELECT 1')

    if (testQueryResult.rowCount !== 1) {
      throw new Error('Database connection test failed')
    }

    console.log('Database connection successful')

    return database
  } catch (error) {
    console.error('Database connection failed', error)
    throw error
  }
}

export async function closeDbConnection() {
  if (!pool) return

  await pool.end()
  pool = null
  db = null
}
