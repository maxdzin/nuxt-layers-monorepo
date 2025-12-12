import type { NuxtError } from 'nuxt/app'

export interface AppErrorData {
  message?: string
  redirect?: {
    to: string
    label?: string
  }
  fields?: Record<string, string[]>
}

export type AppError = NuxtError<AppErrorData>
