import { ArrowIosBack } from '@/assets/components/svgIcons'
import { Button } from '@/components/ui/button'
import { Select, SelectItem } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './pagination.module.scss'

import { DOTS, usePagination } from './hooks/usePagination'

const paginationSelectOptions: SelectItem[] = [
  { title: '10', value: '10' },
  { title: '20', value: '20' },
  { title: '30', value: '30' },
  { title: '50', value: '50' },
  { title: '100', value: '100' },
]

type Props = {
  className?: string
  currentPage: number
  onPageChange: (page: number) => void
  onPageSizeChange?: (value: string) => void
  pageSize?: number
  siblingCount?: number
  totalCount: number
}

export const Pagination = (props: Props) => {
  const {
    className,
    currentPage,
    onPageChange,
    onPageSizeChange,
    pageSize = 10,
    siblingCount = 1,
    totalCount,
  } = props

  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const nextPageHandler = () => {
    onPageChange(currentPage + 1)
  }

  const previousPageHandler = () => {
    onPageChange(currentPage - 1)
  }

  const changeDisplayPagesHandler = (value: string) => {
    if (onPageSizeChange) {
      onPageSizeChange(value)
    }
  }

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === paginationRange.length

  const cn = {
    arrow: clsx(s.arrow),
    arrowRight: clsx(s.arrow, s.arrowRight),
    container: clsx(s.paginationContainer, className),
    dots: clsx(s.paginationOption, s.dots),
    option: clsx(s.paginationOption),
    select: clsx(s.selectOption),
    selectedOption: clsx(s.paginationOption, s.selected),
  }

  const options = paginationRange.map((el, index) => {
    const key = Number(el) + index
    const isOptionSelected = el === currentPage ? cn.selectedOption : cn.option

    // If the pageItem is a DOT, render the DOTS unicode character
    if (el === DOTS) {
      return (
        <Typography as={'span'} className={cn.dots} key={key} variant={'body2'}>
          &#8230;
        </Typography>
      )
    }

    return (
      <Button className={isOptionSelected} key={key} onClick={() => onPageChange(+el)}>
        <Typography as={'span'} className={isOptionSelected} variant={'body2'}>
          {el}
        </Typography>
      </Button>
    )
  })

  return (
    <div className={cn.container}>
      <Button disabled={isFirstPage} onClick={previousPageHandler} variant={'icon'}>
        <ArrowIosBack className={cn.arrow} />
      </Button>
      {options}
      <Button disabled={isLastPage} onClick={nextPageHandler} variant={'icon'}>
        <ArrowIosBack className={cn.arrowRight} />
      </Button>
      <Typography as={'span'} variant={'body2'}>
        Показать
      </Typography>
      <Select
        className={cn.select}
        defaultValue={'10'}
        items={paginationSelectOptions}
        onValueChange={changeDisplayPagesHandler}
      />
      <Typography as={'span'} variant={'body2'}>
        на странице
      </Typography>
    </div>
  )
}
