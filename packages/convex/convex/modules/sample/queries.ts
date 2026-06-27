import { v } from 'convex/values'

import type { Doc } from '../../_generated/dataModel'
import { query } from '../../_generated/server'
import { getAll, getById } from './helpers'

export const list = query({
  args: {},
  handler: async (ctx): Promise<{ samples: Doc<'samples'>[] }> => {
    const samples = await getAll(ctx)

    return { samples }
  },
})

export const get = query({
  args: { id: v.id('samples') },
  handler: async (
    ctx,
    args,
  ): Promise<{ sample: Doc<'samples'> } | { error: string }> => {
    const sample = await getById(ctx, args.id)

    if (!sample) {
      return { error: 'SAMPLE_NOT_FOUND' }
    }

    return { sample }
  },
})
