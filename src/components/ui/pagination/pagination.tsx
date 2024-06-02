import { ComponentPropsWithoutRef } from 'react'

type Props = {
  currentPage: number // представляет текущую активную страницу. Для нашего значения мы будем использовать индекс, отсчитываемый от 1, вместо традиционного индекса, отсчитываемого от 0.currentPage
  onPageChange: () => void // функция обратного вызова, вызываемая с обновленным значением страницы при изменении страницы.
  pageSize: number // представляет максимальное количество данных, видимых на одной странице.
  siblingCount?: number // (необязательно): представляет минимальное количество кнопок страницы, отображаемых с каждой стороны от кнопки текущей страницы. По умолчанию 1.
  totalCount: number // представляет общее количество данных, доступных из источника.
} & ComponentPropsWithoutRef<'div'>

export const Pagination = (props: Props) => {
  const { className, ...rest } = props

  return <div {...rest}></div>
}
