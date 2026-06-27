import { api } from '@convex/_generated/api.js'
import { useMutation } from 'convex/react'

export function useCreateSample() {
  return useMutation(api.modules.sample.mutations.create)
}

export function useUpdateSample() {
  return useMutation(api.modules.sample.mutations.update)
}

export function useRemoveSample() {
  return useMutation(api.modules.sample.mutations.remove)
}
