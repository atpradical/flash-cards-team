import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Aspect_Ratio } from '@/common/enums/aspect-ratio'
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'
import clsx from 'clsx'

import s from './aspect-ratio.module.scss'
type AspectRatioProps = {
  size: Aspect_Ratio
} & ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
type AspectRadioRef = ElementRef<typeof AspectRatioPrimitive.Root>
export const AspectRatio = forwardRef<AspectRadioRef, AspectRatioProps>(
  ({ children, size, ...rest }, ref) => {
    const cn = {
      container: clsx(s.container),
    }

    return (
      <AspectRatioPrimitive.Root className={cn.container} ratio={size} ref={ref} {...rest}>
        {children}
      </AspectRatioPrimitive.Root>
    )
  }
)
