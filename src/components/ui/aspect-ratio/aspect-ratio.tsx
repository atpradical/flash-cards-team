import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Aspect_Ratio } from '@/common/enums/aspect-ratio'
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'
import clsx from 'clsx'

import s from './aspect-ratio.module.scss'
type AspectRatioProps = {
  ratio: Aspect_Ratio
  width: 'L' | 'M' | 'S'
} & ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
type AspectRadioRef = ElementRef<typeof AspectRatioPrimitive.Root>
export const AspectRatio = forwardRef<AspectRadioRef, AspectRatioProps>(
  ({ ratio, width, ...rest }, ref) => {
    const cn = {
      container: clsx(s.container, width && s[width]),
    }

    return (
      <div className={cn.container}>
        <AspectRatioPrimitive.Root ratio={ratio} ref={ref} {...rest} />
      </div>
    )
  }
)
