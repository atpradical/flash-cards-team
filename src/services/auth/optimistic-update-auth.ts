import { AppDispatch, RootState, UpdateUserArgs, UpdateUserResponse, authApi } from '@/services'
import { Nullable } from '@/shared/types/common'

type OptimisticUpdateContext = {
  dispatch: AppDispatch
  getState: () => RootState
  queryFulfilled: Promise<{ data: UpdateUserResponse }>
}

export async function optimisticUpdateAuth(
  { avatar, ...args }: UpdateUserArgs,
  { dispatch, getState, queryFulfilled }: OptimisticUpdateContext
) {
  const cachedArgsForQuery = authApi.util.selectCachedArgsForQuery(getState(), 'me')
  const patchResults: any[] = []

  let uploadedImageUrl: Nullable<string | undefined>

  if (avatar === null) {
    uploadedImageUrl = null
  } else if (avatar && avatar instanceof File) {
    uploadedImageUrl = URL.createObjectURL(avatar)
  }

  cachedArgsForQuery.forEach(cachedArgs => {
    patchResults.push(
      dispatch(
        authApi.util.updateQueryData('me', cachedArgs, draft => {
          if (uploadedImageUrl !== undefined) {
            draft.avatar = uploadedImageUrl
          }
          if (args.name) {
            draft.name = args.name
          }
        })
      )
    )
  })

  try {
    await queryFulfilled
  } catch (e) {
    patchResults.forEach(patchResult => {
      patchResult.undo()
    })
  } finally {
    if (uploadedImageUrl) {
      URL.revokeObjectURL(uploadedImageUrl)
    }
  }
}
