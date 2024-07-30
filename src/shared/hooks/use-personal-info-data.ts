import { ChangeEvent, useState } from 'react'

import { User, useLogoutMutation, useUpdateUserMutation } from '@/services'

import { Nullable } from '../types/common'

export const usePersonalInfoData = (userData: User) => {
  const [avatar, setAvatar] = useState<Nullable<File | string>>(userData.avatar ?? null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [name, setName] = useState(userData.name || '')

  const [logout] = useLogoutMutation()
  const [updateUser] = useUpdateUserMutation()

  const logoutHandler = () => {
    logout()
  }

  const uploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      setAvatar(file)
      await updateUser({ avatar: file, name })
    }
  }

  const editNameHandler = () => {
    setIsEditMode(true)
  }

  const deleteAvatarHandler = async () => {
    setAvatar('')
    await updateUser({ avatar: null, name })
  }

  const saveNameHandler = async (data: { nickname: string }) => {
    const { nickname } = data

    await updateUser({ avatar, name: nickname })
    setName(nickname)
    setIsEditMode(false)
  }

  const cancelPersonalInfoHandler = () => {
    setIsEditMode(false)
  }

  return {
    cancelPersonalInfoHandler,
    deleteAvatarHandler,
    editNameHandler,
    isEditMode,
    logoutHandler,
    saveNameHandler,
    uploadHandler,
  }
}
