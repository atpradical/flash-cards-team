import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

import { EditOutline, Heart, HeartOutline, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import { Button } from '@/components/ui/primitives'
import { useAddDeckToFavoriteMutation, useRemoveDeckFromFavoriteMutation } from '@/services'
import { ACTIONS, VARIANT } from '@/shared/enums'
import { ActionButton } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'
import { getActionButtons } from '@/shared/utils'

import { cn } from './actions.styles'

type ActionsProps = {
  id: string
  isFavorite?: boolean
  onDelete: () => void
  onEdit: () => void
  onLearn?: string
  variant?: VARIANT
} & ComponentPropsWithoutRef<typeof FlexContainer>

export const Actions = ({
  id,
  isFavorite,
  onDelete,
  onEdit,
  onLearn,
  variant = VARIANT.ALL,
  ...restFlexContainer
}: ActionsProps) => {
  const [addDeckToFavorite] = useAddDeckToFavoriteMutation()
  const [removeDeckFromFavorite] = useRemoveDeckFromFavoriteMutation()

  const favoriteHandler = () => {
    if (isFavorite) {
      removeDeckFromFavorite({ id })
    } else {
      addDeckToFavorite({ id })
    }
  }

  const actionButtons: ActionButton[] = [
    {
      icon: <PlayCircleOutline className={cn.action} />,
      label: ACTIONS.LEARN,
      path: onLearn,
      title: 'Learn deck',
    },
    {
      handler: onEdit,
      icon: <EditOutline className={cn.action} />,
      label: ACTIONS.EDIT,
      title: 'Edit deck',
    },
    {
      handler: onDelete,
      icon: <TrashOutline className={cn.action} />,
      label: ACTIONS.DELETE,
      title: 'Delete deck',
    },
    {
      handler: favoriteHandler,
      icon: isFavorite ? (
        <Heart className={cn.favorite} />
      ) : (
        <HeartOutline className={cn.favorite} />
      ),
      label: ACTIONS.FAVORITE,
      title: 'Add deck to favorite',
    },
  ]

  return (
    <FlexContainer gap={'10px'} {...restFlexContainer}>
      {getActionButtons(actionButtons, variant).map(el => (
        <Button
          as={el.path ? Link : 'button'}
          className={cn.button}
          key={el.label}
          onClick={el.handler}
          title={el.title}
          to={el.path}
          variant={'link'}
        >
          {el.icon}
        </Button>
      ))}
    </FlexContainer>
  )
}
