import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { FlexContainer } from '@/shared/ui/flex-container'
import * as RadixSlider from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './slider.module.scss'

import { Typography } from '../typography'

type Props = {
  onValueChange: (value: number[]) => void
  value: number[]
} & ComponentPropsWithoutRef<typeof RadixSlider.Root>

type SliderRef = ElementRef<typeof RadixSlider.Root>

export const Slider = forwardRef<SliderRef, Props>(
  ({ defaultValue, minStepsBetweenThumbs = 1, onValueChange, value, ...rest }, ref) => {
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
          {value[0]}
        </Typography>
        <RadixSlider.Root
          className={cn.root}
          defaultValue={defaultValue}
          minStepsBetweenThumbs={minStepsBetweenThumbs}
          onValueChange={onValueChange}
          ref={ref}
          step={1}
          value={value}
          {...rest}
        >
          <RadixSlider.Track className={cn.track}>
            <RadixSlider.Range className={cn.range} />
          </RadixSlider.Track>
          <RadixSlider.Thumb aria-label={'Start Thumb'} className={cn.thumb} />
          <RadixSlider.Thumb aria-label={'End Thumb'} className={cn.thumb} />
        </RadixSlider.Root>
        <Typography className={cn.outputWrap} variant={'body1'}>
          {value[1]}
        </Typography>
      </FlexContainer>
    )
  }
)
