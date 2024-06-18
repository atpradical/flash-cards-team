import { z } from 'zod'

export const emailSchema = z.string().email('Enter a valid email address').toLowerCase()

export const passwordSchema = z
  .string()
  .regex(/^\S*$/, "You can't use the whitespace character")
  .min(3, 'Password length must be at least 3 characters long')
  .max(30, 'Password length must not exceed 30 characters')
  .regex(/^(?=.*\d)(?=.*[a-zA-Z]).*$/, 'Password must include at least 1 digit and 1 character')
