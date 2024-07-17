import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { Typography } from '@/components/ui/primitives/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import * as RadixSlider from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './slider.module.scss'

type Props = {
  label?: string
  max: number
  min: number
  onRangeChange?: (value: number[]) => void
  onValueCommit: (value: number[]) => void
  range?: number[]
} & ComponentPropsWithoutRef<typeof RadixSlider.Root>

type SliderRef = ElementRef<typeof RadixSlider.Root>

export const Slider = forwardRef<SliderRef, Props>(
  (
    { label, max, min, minStepsBetweenThumbs = 1, onRangeChange, onValueCommit, range, ...rest },
    ref
  ) => {
    const cn = {
      outputWrap: clsx(s.outputWrap),
      range: clsx(s.range),
      root: clsx(s.root),
      thumb: clsx(s.thumb),
      track: clsx(s.track),
    }

    const [value, setValue] = useState<number[]>(range ?? [min, max])

    const onRangeChangeHandler = (newValue: number[]) => {
      setValue(newValue)
      onRangeChange?.(newValue)
    }

    return (
      <div>
        {label && <Typography as={'label'}>{label}</Typography>}
        <FlexContainer>
          <Typography className={cn.outputWrap} variant={'body1'}>
            {value[0]}
          </Typography>
          <RadixSlider.Root
            className={cn.root}
            minStepsBetweenThumbs={minStepsBetweenThumbs}
            onValueChange={onRangeChangeHandler}
            onValueCommit={onValueCommit}
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
      </div>
    )
  }
)
