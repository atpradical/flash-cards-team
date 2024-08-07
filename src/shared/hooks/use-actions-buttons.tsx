import { useCallback, useMemo } from 'react'

import { EditOutline, Heart, HeartOutline, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import { cn } from '@/components/ui/layout-components/actions/actions.styles'
import { useAddDeckToFavoriteMutation, useRemoveDeckFromFavoriteMutation } from '@/services'
import { ACTIONS, VARIANT } from '@/shared/enums'
import { ActionButton } from '@/shared/types/common'
import { getActionButtons } from '@/shared/utils'

type UseActionButtons = {
  id: string
  isFavorite: boolean | undefined
  isMobile: boolean
  onDelete: () => void
  onEdit: () => void
  onLearn: string | undefined
  variant: VARIANT
}

export const useActionButtons = ({
  id,
  isFavorite,
  isMobile,
  onDelete,
  onEdit,
  onLearn,
  variant,
}: UseActionButtons) => {
  const [addDeckToFavorite] = useAddDeckToFavoriteMutation()
  const [removeDeckFromFavorite] = useRemoveDeckFromFavoriteMutation()

  const favoriteHandler = useCallback(() => {
    if (isFavorite) {
      removeDeckFromFavorite({ id })
    } else {
      addDeckToFavorite({ id })
    }
  }, [id, isFavorite, addDeckToFavorite, removeDeckFromFavorite])

  const actionButtons: ActionButton[] = useMemo(
    () => [
      {
        icon: <PlayCircleOutline className={isMobile ? cn.mobile : cn.action} />,
        label: ACTIONS.LEARN,
        path: onLearn,
        title: 'Learn deck',
      },
      {
        handler: onEdit,
        icon: <EditOutline className={isMobile ? cn.mobile : cn.action} />,
        label: ACTIONS.EDIT,
        title: 'Edit deck',
      },
      {
        handler: onDelete,
        icon: <TrashOutline className={isMobile ? cn.mobile : cn.action} />,
        label: ACTIONS.DELETE,
        title: 'Delete deck',
      },
      {
        handler: favoriteHandler,
        icon: isFavorite ? (
          <Heart className={isMobile ? cn.favoriteMobile : cn.favorite} />
        ) : (
          <HeartOutline className={isMobile ? cn.favoriteMobile : cn.favorite} />
        ),
        label: ACTIONS.FAVORITE,
        title: 'Add deck to favorite',
      },
    ],
    [isMobile, onLearn, onEdit, onDelete, favoriteHandler, isFavorite]
  )

  const filteredActionButtons = useMemo(
    () => getActionButtons(actionButtons, variant),
    [actionButtons, variant]
  )

  return { filteredActionButtons }
}
