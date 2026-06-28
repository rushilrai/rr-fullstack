import { Elysia } from 'elysia'
import { z } from 'zod'

import {
  handleCreateSample,
  handleDeleteSample,
  handleGetSample,
  handleListSamples,
  handleUpdateSample,
} from './handler.ts'
import { SampleInsertSchema, SampleUpdateSchema } from './schema.ts'

const SampleParams = z.object({ id: z.string() })

export const sampleRoutes = new Elysia({ prefix: '/sample' })
  .get('', handleListSamples)
  .get('/:id', handleGetSample, { params: SampleParams })
  .post('', handleCreateSample, { body: SampleInsertSchema })
  .put('/:id', handleUpdateSample, {
    params: SampleParams,
    body: SampleUpdateSchema,
  })
  .delete('/:id', handleDeleteSample, { params: SampleParams })
