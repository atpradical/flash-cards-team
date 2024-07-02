import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { EditOutline, PlayCircleOutline, TrashOutline } from '@/assets/components/svgIcons'
import { getActionButtons } from '@/components/ui/layout-components/actions/utils/utils'
import { Button } from '@/components/ui/primitives'
import { ACTIONS, VARIANT } from '@/shared/enums/actions'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './actions.module.scss'

export type ActionButton = {
  handler?: () => void
  icon: ReactNode
  label: ACTIONS
}

type ActionsProps = {
  onDelete: () => void
  onEdit: () => void
  onLearn: () => void
  variant?: VARIANT
} & ComponentPropsWithoutRef<typeof FlexContainer>

export const Actions = ({
  onDelete,
  onEdit,
  onLearn,
  variant = VARIANT.ALL,
  ...restFlexContainer
}: ActionsProps) => {
  const cn = {
    action: clsx(s.action),
    button: clsx(s.button),
  }
  const learnHandler = () => {
    onLearn()
  }
  const editHandler = () => {
    onEdit()
  }
  const deleteHandler = () => {
    onDelete()
  }

  const actionButtons: ActionButton[] = [
    {
      handler: learnHandler,
      icon: <PlayCircleOutline className={cn.action} />,
      label: ACTIONS.LEARN,
    },
    { handler: editHandler, icon: <EditOutline className={cn.action} />, label: ACTIONS.EDIT },
    { handler: deleteHandler, icon: <TrashOutline className={cn.action} />, label: ACTIONS.DELETE },
  ]

  return (
    <FlexContainer gap={'10px'} {...restFlexContainer}>
      {getActionButtons(actionButtons, variant).map(el => (
        <Button className={cn.button} key={el.label} onClick={el.handler} variant={'link'}>
          {el.icon}
        </Button>
      ))}
    </FlexContainer>
  )
}
