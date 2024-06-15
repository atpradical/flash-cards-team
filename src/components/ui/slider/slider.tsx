import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'

import { Typography } from '../typography'
import s from './slider.module.scss'

type Props = {
  onValueChange: (value: number[]) => void
  value: number[]
} & ComponentPropsWithoutRef<typeof RadixSlider.Root>

type SliderRef = ElementRef<typeof RadixSlider.Root>

export const Slider = forwardRef<SliderRef, Props>((props, ref) => {
  const { defaultValue, minStepsBetweenThumbs = 1, onValueChange, value, ...rest } = props

  return (
    <div className={s.container}>
      <Typography className={s.outputWrap} variant={'body1'}>
        {value[0]}
      </Typography>
      <RadixSlider.Root
        className={s.root}
        defaultValue={defaultValue}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
        onValueChange={onValueChange}
        ref={ref}
        step={1}
        value={value}
        {...rest}
      >
        <RadixSlider.Track className={s.track}>
          <RadixSlider.Range className={s.range} />
        </RadixSlider.Track>
        <RadixSlider.Thumb aria-label={'Start Thumb'} className={s.thumb} />
        <RadixSlider.Thumb aria-label={'End Thumb'} className={s.thumb} />
      </RadixSlider.Root>
      <Typography className={s.outputWrap} variant={'body1'}>
        {value[1]}
      </Typography>
    </div>
  )
})
