import { ChangeEvent, useState } from 'react'

import { useLogoutMutation, useMeQuery, useUpdateUserMutation } from '@/services'

export const useProfilePageData = () => {
  const { data: user, isFetching } = useMeQuery()
  const [isEditMode, setIsEditMode] = useState(false)

  const [logout, { isLoading: isLoadingLogOut }] = useLogoutMutation()
  const [updateUser, { isLoading: isLoadingUpdateUser }] = useUpdateUserMutation()

  const logoutHandler = () => {
    logout()
  }

  const uploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      await updateUser({ avatar: file })
    }
  }

  const editNameHandler = () => {
    setIsEditMode(true)
  }

  const deleteAvatarHandler = () => {
    updateUser({ avatar: '' })
  }

  const saveNameHandler = async (data: { nickname: string }) => {
    const { nickname } = data

    await updateUser({ avatar: user?.avatar || '', name: nickname })
    setIsEditMode(false)
  }

  const cancelPersonalInfoHandler = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsEditMode(false)
  }
  const isLoading = isLoadingUpdateUser || isFetching || isLoadingLogOut

  return {
    cancelPersonalInfoHandler,
    deleteAvatarHandler,
    editNameHandler,
    isEditMode,
    isLoading,
    logoutHandler,
    saveNameHandler,
    uploadHandler,
    user,
  }
}
