import { useMutation } from 'convex/react'

import { api } from '@monorepo/convex'

export function useCreateSample() {
  return useMutation(api.modules.sample.mutations.create)
}

export function useUpdateSample() {
  return useMutation(api.modules.sample.mutations.update)
}

export function useRemoveSample() {
  return useMutation(api.modules.sample.mutations.remove)
}
