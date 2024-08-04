import { ChangeEvent, useState } from 'react'

import { PersonalInfoFromValues } from '@/components/forms'
import {
  useDeleteUserMutation,
  useLogoutMutation,
  useMeQuery,
  useResendVerificationEmailMutation,
  useUpdateUserMutation,
} from '@/services'
import { combineLoadingStates } from '@/shared/utils'

export const useProfileData = () => {
  const [editMode, setEditMode] = useState(false)

  const { data, isLoading } = useMeQuery()
  const [updateUser, { isLoading: isUpdateUserLoading }] = useUpdateUserMutation()
  const [logout, { isLoading: isLogoutLoading }] = useLogoutMutation()
  const [deleteUser, { isLoading: isDeleteUserLoading }] = useDeleteUserMutation()
  const [resendVerification, { isLoading: isResendLoading, isSuccess: isResendSuccess }] =
    useResendVerificationEmailMutation()

  const isLoadingData = combineLoadingStates(
    isLoading,
    isUpdateUserLoading,
    isLogoutLoading,
    isDeleteUserLoading,
    isResendLoading
  )

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

  const deleteUserAccountHandler = () => {
    deleteUser()
  }

  const resendEmailConfirmationRequestHandler = (userId: string) => {
    resendVerification({ userId })
  }

  return {
    cancelHandler,
    changeModeHandler,
    changeNickNameHandler,
    data,
    deleteAvatarHandler,
    deleteUserAccountHandler,
    editMode,
    isLoadingData,
    isResendSuccess,
    logoutHandler,
    resendEmailConfirmationRequestHandler,
    updateAvatarHandler,
  }
}