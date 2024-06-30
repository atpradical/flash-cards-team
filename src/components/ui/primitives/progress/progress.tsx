import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import clsx from 'clsx'

import s from './progress.module.scss'

type ProgressProps = {
  color?: CSSProperties['color']
} & ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>

export const Progress = (props: ProgressProps) => {
  const { className, color } = props
  const cn = {
    indicator: clsx(s.indicator, className),
    root: clsx(s.root),
  }

  return (
    <ProgressPrimitive.Root className={cn.root} {...props}>
      <ProgressPrimitive.Indicator className={cn.indicator} style={{ backgroundColor: color }} />
    </ProgressPrimitive.Root>
  )
}

Progress.displayName = ProgressPrimitive.Root.displayName
