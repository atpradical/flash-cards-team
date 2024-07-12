import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { TableHeaderCell } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './header-cell.module.scss'

import { SortButton } from '../sort-button'

type Props = {
  content: string
  onSort?: () => void
  sortable?: boolean
} & ComponentPropsWithoutRef<typeof TableHeaderCell>

type HeaderCellRef = ElementRef<typeof TableHeaderCell>

export const HeaderCell = forwardRef<HeaderCellRef, Props>(
  ({ children, content, onSort, sortable = true, ...rest }, ref) => {
    const [showSort, setShowSort] = useState(false)

    const cn = clsx(sortable && !showSort && s.hcell)

    const showSortHandler = () => {
      setShowSort(true)
    }

    return (
      <TableHeaderCell {...rest} className={cn} onClick={showSortHandler} ref={ref}>
        <FlexContainer gap={'6px'}>
          {content} {children}
          {showSort && sortable && <SortButton onSort={onSort} />}
        </FlexContainer>
      </TableHeaderCell>
    )
  }
)
