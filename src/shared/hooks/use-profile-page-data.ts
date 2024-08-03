import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  useDeleteUserMutation,
  useLogoutMutation,
  useMeQuery,
  useUpdateUserMutation,
} from '@/services'

import { PATH } from '../enums'

export const useProfilePageData = () => {
  const { data: user, isFetching } = useMeQuery()
  const [isEditMode, setIsEditMode] = useState(false)

  const [logout, { isLoading: isLoadingLogOut }] = useLogoutMutation()
  const [updateUser, { isLoading: isLoadingUpdateUser }] = useUpdateUserMutation()
  const [deleteUser, { isLoading: isLoadingDeleteUser }] = useDeleteUserMutation()

  const navigate = useNavigate()

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

    await updateUser({ name: nickname })
    setIsEditMode(false)
  }

  const cancelPersonalInfoHandler = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsEditMode(false)
  }

  const deleteUserHandler = async () => {
    await deleteUser()
      .then(() => navigate(PATH.SIGN_IN))
      .catch(e => {
        console.log(`User wasn't deleted, ${e}`)
      })
  }

  const isLoading = isLoadingUpdateUser || isFetching || isLoadingLogOut || isLoadingDeleteUser

  return {
    cancelPersonalInfoHandler,
    deleteAvatarHandler,
    deleteUserHandler,
    editNameHandler,
    isEditMode,
    isLoading,
    logoutHandler,
    saveNameHandler,
    uploadHandler,
    user,
  }
}
