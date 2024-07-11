import { ArrowBack } from '@/assets/icons'
import { Button, Typography } from '@/components/ui/primitives'
import { DOTS, usePagination } from '@/components/ui/primitives/pagination/hooks/usePagination'
import clsx from 'clsx'

import s from './pagination.module.scss'

import { Select } from '../select'

type Props = {
  className?: string
  currentPage: number
  onPageChange: (page: number) => void
  onPageSizeChange: (pageSize: string) => void
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

  const totalPageCount = Math.ceil(totalCount / pageSize)

  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
    totalPageCount,
  })

  const nextPageHandler = () => {
    onPageChange(currentPage + 1)
  }

  const previousPageHandler = () => {
    onPageChange(currentPage - 1)
  }

  const changeDisplayPagesHandler = (pageSize: string) => {
    onPageSizeChange(pageSize)
  }

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPageCount

  const cn = {
    arrow: clsx(s.arrow),
    arrowRight: clsx(s.arrow, s.arrowRight),
    container: clsx(s.paginationContainer, className),
    dots: clsx(s.paginationOption, s.dots),
    nowrap: clsx(s.nowrap),
    option: clsx(s.paginationOption),
    select: clsx(s.selectOption),
    selectedOption: clsx(s.paginationOption, s.selected),
  }

  const options = paginationRange.map((el, index) => {
    const key = `${el}${index}`
    const isOptionSelected = el === currentPage ? cn.selectedOption : cn.option

    // If the pageItem is a DOT, render the DOTS unicode character
    if (el === DOTS) {
      return (
        <Typography as={'span'} className={cn.dots} key={key}>
          &#8230;
        </Typography>
      )
    }

    return (
      <Button className={isOptionSelected} key={key} onClick={() => onPageChange(+el)}>
        <Typography as={'span'} className={clsx(s.nowrap, isOptionSelected)}>
          {el}
        </Typography>
      </Button>
    )
  })

  return (
    <div className={cn.container}>
      <Button disabled={isFirstPage} onClick={previousPageHandler} variant={'icon'}>
        <ArrowBack className={cn.arrow} />
      </Button>
      {options}
      <Button disabled={isLastPage} onClick={nextPageHandler} variant={'icon'}>
        <ArrowBack className={cn.arrowRight} />
      </Button>
      <Typography as={'span'} className={cn.nowrap}>
        Показать
      </Typography>
      <Select
        className={cn.select}
        defaultValue={'10'}
        onValueChange={changeDisplayPagesHandler}
        value={`${pageSize}`}
      />
      <Typography as={'span'} className={cn.nowrap}>
        на странице
      </Typography>
    </div>
  )
}
