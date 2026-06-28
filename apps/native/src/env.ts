import { z } from 'zod'

const EnvSchema = z.object({
  EXPO_PUBLIC_CONVEX_URL: z.url(),
})

export type Env = z.infer<typeof EnvSchema>

function parseEnv(raw: Record<string, string | undefined>): Env {
  const result = EnvSchema.safeParse(raw)

  if (result.success) return result.data

  const issues = result.error.issues
    .map((issue) => `${issue.path.join('.') || 'env'}: ${issue.message}`)
    .join('\n')

  throw new Error(`Invalid native environment:\n${issues}`)
}

export const env = parseEnv({
  EXPO_PUBLIC_CONVEX_URL: process.env.EXPO_PUBLIC_CONVEX_URL,
})
