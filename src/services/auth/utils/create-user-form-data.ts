import { UpdateUserArgs } from '@/services'

export function createUserFormData({ avatar, name }: Partial<UpdateUserArgs>): FormData {
  const formData = new FormData()

  if (name) {
    formData.append('name', name)
  }

  if (avatar) {
    formData.append('avatar', avatar)
  } else if (avatar === null) {
    formData.append('avatar', '')
  }

  return formData
}
