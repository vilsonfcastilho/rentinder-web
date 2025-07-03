import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

export const envSchema = z.object({
  API_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('Invalid environment variables:', parsedEnv.error.format())
  process.exit(1)
}

export const env = parsedEnv.data

export type Env = z.infer<typeof envSchema>
