import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { LoginFormValues } from '@/components/forms'
import { useLoginMutation } from '@/services'
import { PATH } from '@/shared/enums'
import { getErrorMessage } from '@/shared/utils/get-error-message'

export const useSignInPageData = () => {
  const navigate = useNavigate()
  const [login, { error, isLoading, isSuccess }] = useLoginMutation()

  useEffect(() => {
    if (error) {
      const message = getErrorMessage(error)

      toast.error(message)
    }

    if (isSuccess) {
      navigate(PATH.ROOT)
    }
  }, [error, isSuccess, navigate])

  const signInHandler = async (formData: LoginFormValues) => {
    await login(formData)
  }

  return { isLoading, signInHandler }
}
