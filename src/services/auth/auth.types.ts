export type User = {
  avatar: string
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
