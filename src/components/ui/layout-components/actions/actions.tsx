import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/primitives'
import { ACTIONS, VARIANT } from '@/shared/enums'
import { useActionButtons } from '@/shared/hooks/use-actions-buttons'
import { FlexContainer } from '@/shared/ui/flex-container'

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
  const { filteredActionButtons } = useActionButtons({
    id,
    isFavorite,
    isMobile,
    onDelete,
    onEdit,
    onLearn,
    variant,
  })

  return isMobile ? (
    <PositionCell>
      <FlexContainer fw={'wrap'}>
        {filteredActionButtons.map(el => {
          if (isEmptyDeck && el.label === ACTIONS.LEARN) {
            return null
          }

          return (
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
          )
        })}
      </FlexContainer>
    </PositionCell>
  ) : (
    <FlexContainer gap={'10px'} {...restFlexContainer}>
      {filteredActionButtons.map(el => {
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
