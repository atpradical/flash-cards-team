import { Nullable } from '../types/common'

export function convertToString(avatar: Nullable<File | string | undefined>): string | undefined {
  if (avatar instanceof File) {
    return URL.createObjectURL(avatar)
  } else if (typeof avatar === 'string') {
    return avatar
  }

  return undefined
}
