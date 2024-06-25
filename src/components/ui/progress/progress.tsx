import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import clsx from 'clsx'

import s from './progress.module.scss'
type ProgressProps = {
  color?: CSSProperties['color']
} & ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
type ProgressRef = ElementRef<typeof ProgressPrimitive.Root>
export const Progress = forwardRef<ProgressRef, ProgressProps>((props, ref) => {
  const { className, color, value } = props
  const cn = {
    indicator: clsx(s.indicator, className),
    root: clsx(s.root),
  }

  return (
    <ProgressPrimitive.Root className={cn.root} ref={ref} {...props} value={value}>
      <ProgressPrimitive.Indicator
        className={cn.indicator}
        style={{ backgroundColor: color, transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})

Progress.displayName = ProgressPrimitive.Root.displayName
