import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import { Trash, TrashOutline } from '@/assets/icons'
import { cn } from '@/components/forms/dialog-forms/dialog-forms.styles'
import { Button } from '@/components/ui/primitives'

type Props = {
  onClick: (deleteFlag: boolean) => void
} & Omit<ComponentPropsWithoutRef<typeof Button>, 'onClick'>

export const DialogImageDelete = ({ onClick, ...args }: Props) => {
  const [deleteFlag, setDeleteFlag] = useState(false)

  const deleteFlagHandler = (e: ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const flag = !deleteFlag

    setDeleteFlag(flag)
    onClick(flag)
  }

  return (
    <Button className={cn.delete} onClick={deleteFlagHandler} variant={'icon'} {...args}>
      {deleteFlag ? <Trash className={cn.trash} /> : <TrashOutline className={cn.trash} />}
    </Button>
  )
}
