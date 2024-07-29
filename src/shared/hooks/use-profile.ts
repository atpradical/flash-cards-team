import { ChangeEvent, useState } from 'react'

import { PersonalInfoFromValues } from '@/components/forms'
import { useLogoutMutation, useMeQuery, useUpdateUserMutation } from '@/services'
import { combineLoadingStates } from '@/shared/utils'

export const useProfile = () => {
  const [editMode, setEditMode] = useState(false)

  const { data, isLoading } = useMeQuery()
  const [updateUser, { isLoading: isUpdateUserLoading }] = useUpdateUserMutation()
  const [logout, { isLoading: isLogoutLoading }] = useLogoutMutation()

  const isLoadingData = combineLoadingStates(isLoading, isUpdateUserLoading, isLogoutLoading)

  const changeModeHandler = () => {
    setEditMode(true)
  }

  const updateAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      updateUser({ avatar: file })
    }
  }

  const deleteAvatarHandler = () => {
    updateUser({ avatar: null })
  }

  const logoutHandler = () => {
    logout()
  }

  const changeNickNameHandler = (formData: PersonalInfoFromValues) => {
    updateUser({ name: formData.nickname }).then(() => {
      setEditMode(false)
    })
  }

  const cancelHandler = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setEditMode(false)
  }

  return {
    cancelHandler,
    changeModeHandler,
    changeNickNameHandler,
    data,
    deleteAvatarHandler,
    editMode,
    isLoadingData,
    logoutHandler,
    updateAvatarHandler,
  }
}
