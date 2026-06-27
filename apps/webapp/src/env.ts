import { z } from 'zod'

const EnvSchema = z.object({
  VITE_BACKEND_URL: z.url().default('http://localhost:4000'),
})

export type Env = z.infer<typeof EnvSchema>

function parseEnv(raw: Record<string, string | undefined>): Env {
  const result = EnvSchema.safeParse(raw)

  if (result.success) return result.data

  const issues = result.error.issues
    .map((issue) => `${issue.path.join('.') || 'env'}: ${issue.message}`)
    .join('\n')

  throw new Error(`Invalid webapp environment:\n${issues}`)
}

export const env = parseEnv({
  VITE_BACKEND_URL: import.meta.env.VITE_BACKEND_URL,
})
