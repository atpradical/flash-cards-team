import { Nullable } from '@/shared/types/common'

export function revokeImageUrl(url: Nullable<string> | undefined) {
  if (url) {
    URL.revokeObjectURL(url)
  }
}
