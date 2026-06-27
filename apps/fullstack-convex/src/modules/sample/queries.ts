import { api } from '@convex/_generated/api.js'
import { useQuery } from 'convex/react'

import type { SampleId } from './schema'

export function useSamples() {
  return useQuery(api.modules.sample.queries.list)
}

export function useSample(id: SampleId) {
  return useQuery(api.modules.sample.queries.get, { id })
}
