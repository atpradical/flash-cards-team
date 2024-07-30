import { AppDispatch, AppGetState, UpdateUserArgs, authApi } from '@/services'

type PerformOptimisticUserUpdate = {
  args: UpdateUserArgs
  dispatch: AppDispatch
  getState: AppGetState
}

export function performOptimisticUserUpdate({
  args,
  dispatch,
  getState,
}: PerformOptimisticUserUpdate) {
  const cachedUserArgsForQuery = authApi.util.selectCachedArgsForQuery(getState(), 'me')

  debugger
  const patchUserResults: any[] = []
  const avatarImg = args.avatar && URL.createObjectURL(args.avatar)

  cachedUserArgsForQuery.forEach(cachedArgs => {
    patchUserResults.push(
      dispatch(
        authApi.util.updateQueryData('me', cachedArgs, draft => {
          Object.assign(draft, {
            ...draft,
            ...args,
            avatar: avatarImg !== undefined ? avatarImg : draft.avatar,
          })
        })
      )
    )
  })

  return { avatarImg, patchUserResults }
}
