import { Nullable } from '@/shared/types/common'

export function createUploadedImageURL(
  image: Nullable<File> | string | undefined
): Nullable<string> {
  if (image === null) {
    return null
  }
  if (image instanceof File) {
    return URL.createObjectURL(image)
  }

  return null
}
