import { Elysia } from 'elysia'

import { handleHealthCheck } from './handler.ts'

export const healthRoutes = new Elysia({ prefix: '/health' }).get(
  '/check',
  handleHealthCheck,
)
