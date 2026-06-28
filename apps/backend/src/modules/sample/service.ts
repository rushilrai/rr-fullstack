import { eq } from 'drizzle-orm'

import { getDb } from '../../lib/db/config.ts'
import {
  samplesTable,
  type SampleInsertSchema,
  type SampleUpdateSchema,
} from './schema.ts'

export async function getAllSamples() {
  return getDb().select().from(samplesTable)
}

export async function getSampleById(id: string) {
  const results = await getDb()
    .select()
    .from(samplesTable)
    .where(eq(samplesTable.id, id))

  return results[0] ?? null
}

export async function createSample(data: SampleInsertSchema) {
  const results = await getDb()
    .insert(samplesTable)
    .values({ id: crypto.randomUUID(), ...data })
    .returning()

  return results[0] ?? null
}

export async function updateSample(id: string, data: SampleUpdateSchema) {
  const results = await getDb()
    .update(samplesTable)
    .set(data)
    .where(eq(samplesTable.id, id))
    .returning()

  return results[0] ?? null
}

export async function deleteSample(id: string) {
  const results = await getDb()
    .delete(samplesTable)
    .where(eq(samplesTable.id, id))
    .returning()

  return results[0] ?? null
}
