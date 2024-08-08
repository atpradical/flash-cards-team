import { ComponentPropsWithoutRef } from 'react'

import { Star, StarOutline } from '@/assets/icons'
import { FlexContainer } from '@/shared/ui/flex-container'

import s from '@/components/ui/primitives/grade/grade.module.scss'

const STARS_MAX = 5

type GradeProps = {
  stars?: number
} & ComponentPropsWithoutRef<typeof FlexContainer>

export const Grade = ({ stars = 0, ...rest }: GradeProps) => {
  const cn = s.star

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
