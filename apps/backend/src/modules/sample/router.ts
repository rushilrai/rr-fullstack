import type { FastifyInstance } from 'fastify'

import {
  handleCreateSample,
  handleDeleteSample,
  handleGetAllSamples,
  handleGetSampleById,
  handleUpdateSample,
} from './handler'

export function buildSampleRoutes(app: FastifyInstance) {
  app.route({
    method: 'GET',
    url: '/sample',
    handler: handleGetAllSamples,
  })

  app.route({
    method: 'GET',
    url: '/sample/:id',
    handler: handleGetSampleById,
  })

  app.route({
    method: 'POST',
    url: '/sample',
    handler: handleCreateSample,
  })

  app.route({
    method: 'PUT',
    url: '/sample/:id',
    handler: handleUpdateSample,
  })

  app.route({
    method: 'DELETE',
    url: '/sample/:id',
    handler: handleDeleteSample,
  })
}
