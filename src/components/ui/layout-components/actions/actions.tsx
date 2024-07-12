import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { EditOutline, Heart, HeartOutline, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import { Button } from '@/components/ui/primitives'
import {
  useAddDeckToFavoriteMutation,
  useRemoveDeckToFavoriteMutation,
} from '@/services/flashcards-api'
import { ACTIONS, VARIANT } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { getActionButtons } from '@/shared/utils/get-action-buttons.utils'

import { cn } from './actions.styles'

export type ActionButton = {
  handler?: () => void
  icon: ReactNode
  label: ACTIONS
  path?: string
}

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
  const [removeDeckToFavorite] = useRemoveDeckToFavoriteMutation()

  const editHandler = () => {
    onEdit()
  }

  const deleteHandler = () => {
    onDelete()
  }

  const favoriteHandler = () => {
    if (isFavorite) {
      removeDeckToFavorite({ id })
    } else {
      addDeckToFavorite({ id })
    }
  }

  const actionButtons: ActionButton[] = [
    {
      icon: <PlayCircleOutline className={cn.action} />,
      label: ACTIONS.LEARN,
      path: onLearn,
    },
    { handler: editHandler, icon: <EditOutline className={cn.action} />, label: ACTIONS.EDIT },
    { handler: deleteHandler, icon: <TrashOutline className={cn.action} />, label: ACTIONS.DELETE },
    {
      handler: favoriteHandler,
      icon: isFavorite ? (
        <Heart className={cn.favorite} />
      ) : (
        <HeartOutline className={cn.favorite} />
      ),
      label: ACTIONS.FAVORITE,
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
          to={el.path}
          variant={'link'}
        >
          {el.icon}
        </Button>
      ))}
    </FlexContainer>
  )
}
