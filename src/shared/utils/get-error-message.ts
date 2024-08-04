import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export type ServerResponseError = {
  errorMessages: string[]
}

type ComponentResponseErrorData = {
  message: string
  path: string
  statusCode: number
  timestamp: string
}

export type CustomerError = {
  data: ComponentResponseErrorData | ServerResponseError
  status: number
}

export function getErrorMessage(error: unknown) {
  if (isFetchBaseQueryError(error)) {
    if ('data' in error) {
      const errorData = error as CustomerError

      if ('errorMessages' in errorData.data) {
        return errorData.data.errorMessages.join(' / ')
      } else if ('message' in errorData.data) {
        return errorData.data.message
      }
    }
  } else if (isErrorWithMessage(error)) {
    return error.message
  }

  return JSON.stringify(error)
}

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as any).message === 'string'
  )
}
