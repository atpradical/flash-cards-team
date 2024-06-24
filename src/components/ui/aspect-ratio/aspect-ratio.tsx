import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ASPECT_RATIO } from '@/common/enums/aspect-ratio'
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'
import clsx from 'clsx'

import s from './aspect-ratio.module.scss'
type AspectRatioProps = {
  ratio: ASPECT_RATIO
  variant: 'l' | 'm' | 's'
  width?: CSSProperties['width']
} & ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
type AspectRadioRef = ElementRef<typeof AspectRatioPrimitive.Root>
export const AspectRatio = forwardRef<AspectRadioRef, AspectRatioProps>(
  ({ ratio, variant, width, ...rest }, ref) => {
    const cn = {
      container: clsx(s.container, variant && s[variant]),
    }
    const containerStyles: CSSProperties = {
      width,
    }

    return (
      <div className={cn.container}>
        <AspectRatioPrimitive.Root ratio={ratio} ref={ref} style={containerStyles} {...rest} />
      </div>
    )
  }
)
