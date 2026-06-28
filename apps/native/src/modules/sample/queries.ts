import { useQuery } from 'convex/react'

import { api } from '@monorepo/convex'

import type { SampleId } from './schema'

export function useSamples() {
  return useQuery(api.modules.sample.queries.list)
}

export function useSample(id: SampleId) {
  return useQuery(api.modules.sample.queries.get, { id })
}
