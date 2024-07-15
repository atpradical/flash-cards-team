import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { SortCriteria } from '@/common/types'
import { TableHeaderCell } from '@/components/ui/primitives'
import { ORDER } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './header-cell.module.scss'

import { SortButton } from '../sort-button'

type Props = {
  content: string
  id?: string
  onSort?: (sort: SortCriteria) => void
  sortId?: string
  sortable?: boolean
} & ComponentPropsWithoutRef<typeof TableHeaderCell>

type HeaderCellRef = ElementRef<typeof TableHeaderCell>

export const HeaderCell = forwardRef<HeaderCellRef, Props>(
  ({ children, content, id, onSort, sortId, sortable = true, ...rest }, ref) => {
    const [order, setOrder] = useState<ORDER>(ORDER.ASC)
    const cn = clsx(sortable && s.hcell)

    const isSortable = sortable ? id === sortId : false

    const headerHandler = () => {
      if (id && onSort) {
        onSort({ id, order })
      }
    }

    const sortButtonHandler = (order: ORDER) => {
      setOrder(order)
      if (id && onSort) {
        onSort({ id, order })
      }
    }

    return (
      <TableHeaderCell {...rest} className={cn} onClick={headerHandler} ref={ref}>
        <FlexContainer gap={'6px'}>
          {content} {children}
          {isSortable && <SortButton onClick={sortButtonHandler} order={order} />}
        </FlexContainer>
      </TableHeaderCell>
    )
  }
)
