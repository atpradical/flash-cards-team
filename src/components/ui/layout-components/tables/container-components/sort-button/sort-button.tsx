import { ChangeEvent, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowUp } from '@/assets/icons'
import { Button } from '@/components/ui/primitives'
import { ORDER } from '@/shared/enums'
import clsx from 'clsx'

import s from '@/components/ui/layout-components/tables/container-components/sort-button/sort-button.module.scss'

type Props = {
  onClick: (order: ORDER) => void
  order: ORDER
} & ComponentPropsWithoutRef<typeof Button>

type SortButtonRef = ElementRef<typeof Button>

export const SortButton = forwardRef<SortButtonRef, Props>(({ onClick, order, ...rest }, ref) => {
  const cn = clsx(s.sort, order === ORDER.DESC && s.desc)

  const sortHandler = (e: ChangeEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (order === ORDER.ASC) {
      onClick(ORDER.DESC)
    } else {
      onClick(ORDER.ASC)
    }
  }

  return (
    <Button className={cn} onClick={sortHandler} ref={ref} variant={'icon'} {...rest}>
      <ArrowUp />
    </Button>
  )
})
