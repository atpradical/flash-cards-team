import { useEffect } from 'react'
import { FieldValues, Path, UseFormSetError } from 'react-hook-form'

import { Nullable } from '@/shared/types/common'
import { FormErrorData } from '@/shared/utils'

type UseFormErrorsProps<T extends FieldValues> = {
  errors: Nullable<FormErrorData[]> | string
  fields: (keyof T)[]
  setError: UseFormSetError<T>
}

export const useFormErrors = <T extends FieldValues>({
  errors,
  fields,
  setError,
}: UseFormErrorsProps<T>) => {
  useEffect(() => {
    if (errors) {
      // if errors are type of FormErrorData[] -> fire certain field
      if (typeof errors !== 'string') {
        errors.forEach(el => {
          setError(el.field as Path<T>, { message: el.message })
        })
      } else {
        // if errors are type of string (from ServerResponseError type) -> fire all fields
        fields.forEach(field => {
          setError(field as Path<T>, {})
        })
      }
    }
  }, [errors, setError, fields])
}
// todo: delete comment after review!
// useEffect(() => {
//   if (errors) {
//     if (typeof errors !== 'string') {
//       errors.forEach(el => {
//         if (el.field === 'email') {
//           setError(el.field, { message: el.message })
//         }
//       })
//     } else {
//       setError('email', {})
//     }
//   }
// }, [errors, setError])
