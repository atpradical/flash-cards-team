import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { EditOutline, PlayCircleOutline, TrashOutline } from '@/assets/components/svgIcons'
import { Button } from '@/components/ui/button'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './actions.module.scss'

type ActionButton = {
  handler: () => void
  hidden?: { display: 'none' } | {}
  icon: ReactNode
}

type ActionsProps = {
  onDelete: () => void
  onEdit: () => void
  onPlay: () => void
  showAll?: boolean
} & ComponentPropsWithoutRef<typeof FlexContainer>

export const Actions = ({
  onDelete,
  onEdit,
  onPlay,
  showAll = false,
  ...restFlexContainer
}: ActionsProps) => {
  const cn = {
    action: clsx(s.action),
    button: clsx(s.button),
    hidden: clsx(s.hidden),
  }
  const playHandler = () => {
    onPlay()
  }
  const editHandler = () => {
    onEdit()
  }
  const deleteHandler = () => {
    onDelete()
  }

  const hidden = showAll ? { display: 'none' } : {}

  const actionButtons: ActionButton[] = [
    { handler: playHandler, icon: <PlayCircleOutline className={cn.action} /> },
    { handler: editHandler, hidden, icon: <EditOutline className={cn.action} /> },
    { handler: deleteHandler, hidden, icon: <TrashOutline className={cn.action} /> },
  ]

  return (
    <FlexContainer gap={'12px'} {...restFlexContainer}>
      {actionButtons.map((el, index) => {
        const { handler, hidden, icon } = el

        return (
          <Button
            className={cn.button}
            key={index}
            onClick={handler}
            style={hidden}
            variant={'link'}
          >
            {icon}
          </Button>
        )
      })}
    </FlexContainer>
  )
}
