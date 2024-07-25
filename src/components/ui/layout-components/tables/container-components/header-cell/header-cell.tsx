import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { ArrowUp } from '@/assets/icons'
import { TableHeaderCell } from '@/components/ui/primitives'
import { ORDER } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { getOrderByString } from '@/shared/utils/get-order-by-string'
import clsx from 'clsx'

import s from './header-cell.module.scss'

type Props = {
  content: string
  id?: string
  onSort?: (orderBy: string, sortId: string) => void
  sortId?: string
  sortable?: boolean
} & ComponentPropsWithoutRef<typeof TableHeaderCell>

type HeaderCellRef = ElementRef<typeof TableHeaderCell>

export const HeaderCell = forwardRef<HeaderCellRef, Props>(
  ({ children, className, content, id, onSort, sortId, sortable = true, ...rest }, ref) => {
    const [order, setOrder] = useState<ORDER>(ORDER.ASC)
    const cn = clsx(sortable && s.hcell, className)

    const isSortable = sortable ? id === sortId : false

    const sortHandler = () => {
      if (id && onSort) {
        if (order === ORDER.ASC) {
          setOrder(ORDER.DESC)
        } else {
          setOrder(ORDER.ASC)
        }
        onSort(getOrderByString({ id, order }), id)
      }
    }

    return (
      <TableHeaderCell {...rest} className={cn} onClick={sortHandler} ref={ref}>
        <FlexContainer gap={'6px'}>
          {content} {children}
          {isSortable && <ArrowUp className={clsx(s.sort, order === ORDER.DESC && s.desc)} />}
        </FlexContainer>
      </TableHeaderCell>
    )
  }
)
