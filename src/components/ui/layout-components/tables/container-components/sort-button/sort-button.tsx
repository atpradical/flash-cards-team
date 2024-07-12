import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { ArrowUp } from '@/assets/icons'
import { Button } from '@/components/ui/primitives'
import { SORT_ORDER } from '@/shared/enums'
import clsx from 'clsx'

import s from '@/components/ui/layout-components/tables/container-components/sort-button/sort-button.module.scss'

type Props = {
  onSort: () => void
} & ComponentPropsWithoutRef<typeof Button>

type SortButtonRef = ElementRef<typeof Button>

export const SortButton = forwardRef<SortButtonRef, Props>(({ onSort, ...rest }, ref) => {
  const [sortOrder, setSortOrder] = useState<SORT_ORDER>(SORT_ORDER.ASC)

  const cn = clsx(s.sort, sortOrder === SORT_ORDER.DESC && s.desc)

  const sortHandler = () => {
    if (sortOrder === SORT_ORDER.ASC) {
      setSortOrder(SORT_ORDER.DESC)
    } else {
      setSortOrder(SORT_ORDER.ASC)
    }
    onSort()
  }

  return (
    <Button className={cn} onClick={sortHandler} ref={ref} variant={'icon'} {...rest}>
      <ArrowUp />
    </Button>
  )
})
