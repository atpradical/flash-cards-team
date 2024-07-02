import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { RATIO } from '@/shared/enums/ratio'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import clsx from 'clsx'

import s from './image.module.scss'

type ImageProps = {
  alt: string
  ratio: RATIO
  src: string
  variant: 'l' | 'm' | 's' | 'xl'
  width?: CSSProperties['width']
} & ComponentPropsWithoutRef<typeof AspectRatio.Root>

type ImageRef = ElementRef<typeof AspectRatio.Root>

export const Image = forwardRef<ImageRef, ImageProps>(
  ({ alt, className, ratio, src, variant, width, ...rest }, ref) => {
    const cn = {
      container: clsx(s.container, s[variant]),
      image: clsx(s.image),
    }
    const containerStyles: CSSProperties = {
      width,
    }

    return (
      <div className={cn.container}>
        <AspectRatio.Root ratio={ratio} ref={ref} style={containerStyles} {...rest}>
          <img alt={alt} className={cn.image} src={src} />
        </AspectRatio.Root>
      </div>
    )
  }
)
