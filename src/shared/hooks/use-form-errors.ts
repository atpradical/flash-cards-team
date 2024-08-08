import { useEffect } from 'react'
import { FieldValues, Path, UseFormSetError } from 'react-hook-form'

import { Nullable } from '@/shared/types/common'
import { FormErrorData } from '@/shared/utils'

type UseFormErrorsProps<T extends FieldValues> = {
  errors: Nullable<FormErrorData[]> | string
  fields: (keyof T)[]
  setError: UseFormSetError<T>
}
/**
 * Custom hook to handle form errors.
 *
 * @template T - The type of the form fields, extending FieldValues.
 *
 * @param {UseFormErrorsProps<T>} props - The properties for the hook.
 * @param {Nullable<FormErrorData[]> | string} props.errors - The errors to be handled. Can be an array of FormErrorData or a string.
 * @param {(keyof T)[]} props.fields - The list of fields in the form.
 * @param {UseFormSetError<T>} props.setError - The function to set errors for the form fields.
 *
 * @returns {void}
 */
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
