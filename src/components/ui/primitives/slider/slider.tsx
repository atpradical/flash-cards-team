import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/primitives/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import * as RadixSlider from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './slider.module.scss'

type Props = {
  onRangeChange: (value: number[]) => void
  range: number[]
} & ComponentPropsWithoutRef<typeof RadixSlider.Root>

type SliderRef = ElementRef<typeof RadixSlider.Root>

export const Slider = forwardRef<SliderRef, Props>(
  ({ minStepsBetweenThumbs = 1, onRangeChange, range, ...rest }, ref) => {
    const cn = {
      outputWrap: clsx(s.outputWrap),
      range: clsx(s.range),
      root: clsx(s.root),
      thumb: clsx(s.thumb),
      track: clsx(s.track),
    }

    return (
      <FlexContainer>
        <Typography className={cn.outputWrap} variant={'body1'}>
          {range[0]}
        </Typography>
        <RadixSlider.Root
          className={cn.root}
          minStepsBetweenThumbs={minStepsBetweenThumbs}
          onValueChange={onRangeChange}
          ref={ref}
          step={1}
          value={range}
          {...rest}
        >
          <RadixSlider.Track className={cn.track}>
            <RadixSlider.Range className={cn.range} />
          </RadixSlider.Track>
          <RadixSlider.Thumb aria-label={'Start Thumb'} className={cn.thumb} />
          <RadixSlider.Thumb aria-label={'End Thumb'} className={cn.thumb} />
        </RadixSlider.Root>
        <Typography className={cn.outputWrap} variant={'body1'}>
          {range[1]}
        </Typography>
      </FlexContainer>
    )
  }
)
