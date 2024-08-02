import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

import { EditOutline, Heart, HeartOutline, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import { Button } from '@/components/ui/primitives'
import { useAddDeckToFavoriteMutation, useRemoveDeckFromFavoriteMutation } from '@/services'
import { ACTIONS, VARIANT } from '@/shared/enums'
import { ActionButton } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'
import { getActionButtons } from '@/shared/utils'

import { PositionCell } from '../tables/container-components'
import { cn } from './actions.styles'

type ActionsProps = {
  id: string
  isEmptyDeck?: boolean
  isFavorite?: boolean
  isMobile?: boolean
  onDelete: () => void
  onEdit: () => void
  onLearn?: string
  variant?: VARIANT
} & ComponentPropsWithoutRef<typeof FlexContainer>

export const Actions = ({
  id,
  isEmptyDeck = false,
  isFavorite,
  isMobile = false,
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
  ]

  return isMobile ? (
    <FlexContainer fw={'wrap'}>
      {getActionButtons(actionButtons, variant).map(el => {
        if (isEmptyDeck && el.label === ACTIONS.LEARN) {
          return null
        }

        return (
          <PositionCell className={cn.tableCell} key={el.label}>
            <Button
              as={el.path ? Link : 'button'}
              className={cn.buttonMobile}
              fullWidth
              key={el.label}
              onClick={el.handler}
              title={el.title}
              to={el.path}
              variant={'link'}
            >
              {el.icon}
            </Button>
          </PositionCell>
        )
      })}
    </FlexContainer>
  ) : (
    <FlexContainer gap={'10px'} {...restFlexContainer}>
      {getActionButtons(actionButtons, variant).map(el => {
        if (isEmptyDeck && el.label === ACTIONS.LEARN) {
          return null
        }

        return (
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
        )
      })}
    </FlexContainer>
  )
}
