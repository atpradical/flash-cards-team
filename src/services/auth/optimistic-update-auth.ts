import { AppDispatch, RootState, UpdateUserArgs, UpdateUserResponse, authApi } from '@/services'
import { createUploadedImageURL } from '@/shared/utils'

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

  const uploadedImageUrl = createUploadedImageURL(avatar)

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
