import { z } from 'zod'

export const emailSchema = z.string().email('Enter a valid email address').toLowerCase()

export const passwordSchema = z
  .string()
  .regex(/^\S*$/, 'Yo man, no whitespace characters allowed, alright?')
  .min(3, 'Hey buddy, is it really that hard to hit the keys more than 3 times?')
  .max(30, 'Bro... no need for an essay, keep your password under 30 characters')
  .regex(
    /^(?=.*\d)(?=.*[a-zA-Z]).*$/,
    'Dude... make sure your password has at least 1 digit and 1 letter, alright?'
  )

export const nicknameScheme = z
  .string()
  .regex(
    /^[^!@#$%^&*(),.?":{}|<>]*$/,
    'Man... keep it chill! no special characters in the nickname'
  )
  .trim()
