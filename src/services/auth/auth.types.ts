import { Nullable } from '@/shared/types/common'

export type User = {
  avatar: Nullable<string>
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type LoginResponse = {
  accessToken: string
  refreshToken: string
}
export type LoginArgs = {
  email: string
  password: string
  rememberMe: boolean
}

export type CreateUserArgs = {
  email: string
  html?: string
  name?: string
  password: string
  sendConfirmationEmail?: boolean
  subject?: string
}

export type CreateUserResponse = User

export type UpdateUserResponse = User

export type UpdateUserArgs = {
  avatar?: Nullable<File | string>
  name?: string
}
