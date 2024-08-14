import { Nullable } from '@/shared/types/common'

export function revokeObjectURL(url: Nullable<string>, delay: number = 60000) {
  if (url) {
    setTimeout(() => {
      URL.revokeObjectURL(url)
    }, delay)
  }
}
