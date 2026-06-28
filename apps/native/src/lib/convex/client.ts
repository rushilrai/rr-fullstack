import { ConvexReactClient } from 'convex/react'

import { env } from '@/env'

export const convexClient = new ConvexReactClient(env.EXPO_PUBLIC_CONVEX_URL, {
  unsavedChangesWarning: false,
})
