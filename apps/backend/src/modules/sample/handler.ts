import { NotFoundError } from '../../lib/errors.ts'
import {
  toSampleDto,
  type SampleInsertSchema,
  type SampleUpdateSchema,
} from './schema.ts'
import * as sampleService from './service.ts'

export async function handleListSamples() {
  const rows = await sampleService.getAllSamples()

  return { samples: rows.map(toSampleDto) }
}

export async function handleGetSample({ params }: { params: { id: string } }) {
  const row = await sampleService.getSampleById(params.id)

  if (!row) throw new NotFoundError('Sample not found')

  return { sample: toSampleDto(row) }
}

export async function handleCreateSample({
  body,
}: {
  body: SampleInsertSchema
}) {
  const row = await sampleService.createSample(body)

  if (!row) throw new Error('Failed to create sample')

  return { sample: toSampleDto(row) }
}

export async function handleUpdateSample({
  params,
  body,
}: {
  params: { id: string }
  body: SampleUpdateSchema
}) {
  const row = await sampleService.updateSample(params.id, body)

  if (!row) throw new NotFoundError('Sample not found')

  return { sample: toSampleDto(row) }
}

export async function handleDeleteSample({
  params,
}: {
  params: { id: string }
}) {
  const row = await sampleService.deleteSample(params.id)

  if (!row) throw new NotFoundError('Sample not found')

  return { sample: toSampleDto(row) }
}
