import { UpdateDeckArgs } from '@/services'

export function createFormData({ cover, isPrivate, name }: Partial<UpdateDeckArgs>): FormData {
  const formData = new FormData()

  if (name) {
    formData.append('name', name)
  }

  if (cover) {
    formData.append('cover', cover)
  } else if (cover === null) {
    formData.append('cover', '')
  }

  if (isPrivate) {
    formData.append('isPrivate', isPrivate.toString())
  }

  return formData
}
