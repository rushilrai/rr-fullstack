import { z } from 'zod'

const CsvStringSchema = z
  .string()
  .default('')
  .transform((value) =>
    value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean),
  )

const EnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  HOST: z.string().min(1).default('0.0.0.0'),
  PORT: z.coerce.number().int().positive().default(4000),
  DATABASE_URL: z.string().min(1),
  CORS_ORIGINS: CsvStringSchema,
})

export type Env = z.infer<typeof EnvSchema>

function parseEnv(raw: NodeJS.ProcessEnv): Env {
  const result = EnvSchema.safeParse(raw)

  if (result.success) return result.data

  const issues = result.error.issues
    .map((issue) => `${issue.path.join('.') || 'env'}: ${issue.message}`)
    .join('\n')

  throw new Error(`Invalid backend environment:\n${issues}`)
}

export const env = parseEnv(process.env)
