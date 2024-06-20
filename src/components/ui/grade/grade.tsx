import { ComponentPropsWithoutRef } from 'react'

import { Star, StarOutline } from '@/assets/components/svgIcons'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './grade.module.scss'

const STARS_MAX = 5

type Props = {
  stars?: 0 | 1 | 2 | 3 | 4 | 5
} & ComponentPropsWithoutRef<typeof FlexContainer>

export const Grade = ({ stars = 0, ...rest }: Props) => {
  const cn = clsx(s.star)

  const starElements = Array.from({ length: STARS_MAX }, (_, index) => {
    return index < stars ? (
      <Star className={cn} key={index} />
    ) : (
      <StarOutline className={cn} key={index} />
    )
  })

  return (
    <FlexContainer gap={'12px'} {...rest}>
      {starElements}
    </FlexContainer>
  )
}
