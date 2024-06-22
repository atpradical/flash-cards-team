import { z } from 'zod'

export const emailSchema = z
  .string()
  .email('Bro, looks that specified email is from another galaxy, enter a valid email address.')
  .toLowerCase()

export const passwordSchema = z
  .string()
  .regex(/^\S*$/, 'Yo man, no whitespace characters allowed, alright?')
  .min(3, 'Hey buddy, is it really that hard to hit the keys more than 3 times?')
  .max(30, 'Bro, no need for an essay, keep your password under 30 characters')
  .regex(
    /^(?=.*\d)(?=.*[a-zA-Z]).*$/,
    'Dude, make sure your password has at least 1 digit and 1 letter, alright?'
  )

export const rememberMeSchema = z.boolean().optional().default(false)
export const entityIdScheme = z.string().default('')

export const nicknameScheme = z
  .string()
  .regex(/^[^!@#$%^&*(),.?":{}|<>]*$/, 'Man, keep it chill! no special characters in the nickname.')
  .trim()
export const radioScheme = z.string()

export const deckNameScheme = z
  .string()
  .trim()
  .min(3, 'Hey buddy, is it really that hard to hit the keys with characters more than 3 times?')
  .max(30, 'Bro, no need for an essay, keep your deck name under 30 characters')

export const privateDeckScheme = z.boolean().optional().default(false)

export const cardAnswerScheme = z
  .string()
  .trim()
  .min(3, 'Hey buddy, is it really that hard to hit the keys with characters more than 3 times?')
  .max(500, "Bro, unless you're writing a novel, keep your answer under 500 characters.")
export const cardQuestionScheme = z
  .string()
  .trim()
  .min(3, 'Hey buddy, is it really that hard to hit the keys with characters more than 3 times?')
  .max(500, "Bro, unless you're writing a novel, keep your question under 500 characters.")
