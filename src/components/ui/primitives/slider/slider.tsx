import { ComponentPropsWithoutRef, ElementRef, forwardRef, useMemo } from 'react'

import { Typography } from '@/components/ui/primitives/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = {
  label?: string
  max: number
  min: number
  onCommit: (newRange: number[]) => void
  onRangeChange: (newRange: number[]) => void
  range: number[]
} & ComponentPropsWithoutRef<typeof RadixSlider.Root>

type SliderRef = ElementRef<typeof RadixSlider.Root>

export const Slider = forwardRef<SliderRef, Props>(
  ({ label, max = 22, min = 0, onCommit, onRangeChange, range, ...rest }, ref) => {
    const cn = useMemo(
      () => ({
        container: s.container,
        outputWrap: s.outputWrap,
        range: s.range,
        root: s.root,
        thumb: s.thumb,
        track: s.track,
      }),
      []
    )

    return (
      <div className={s.container}>
        {label && <Typography as={'label'}>{label}</Typography>}
        <FlexContainer>
          <Typography className={cn.outputWrap} variant={'body1'}>
            {range[0]}
          </Typography>
          <RadixSlider.Root
            className={cn.root}
            defaultValue={range}
            max={max}
            min={min}
            minStepsBetweenThumbs={1}
            onValueChange={onRangeChange}
            onValueCommit={onCommit}
            ref={ref}
            step={1}
            value={range}
            {...rest}
          >
            <RadixSlider.Track className={cn.track}>
              <RadixSlider.Range className={cn.range} />
            </RadixSlider.Track>
            <RadixSlider.Thumb aria-label={'Start Thumb'} className={cn.thumb} title={'Min'} />
            <RadixSlider.Thumb aria-label={'End Thumb'} className={cn.thumb} title={'Max'} />
          </RadixSlider.Root>
          <Typography className={cn.outputWrap} variant={'body1'}>
            {range[1]}
          </Typography>
        </FlexContainer>
      </div>
    )
  }
)
