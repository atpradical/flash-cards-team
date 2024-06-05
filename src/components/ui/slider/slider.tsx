import { ComponentPropsWithoutRef } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { Typography } from '../typography'

type Props = {
  max?: number
  min?: number
  onValueChange: (value: number[]) => void
  value?: number[]
} & ComponentPropsWithoutRef<typeof RadixSlider.Root>

export const Slider = (props: Props) => {
  const {
    defaultValue,
    max,
    min = 0,
    minStepsBetweenThumbs = 1,
    onValueChange,
    value,
    ...rest
  } = props

  return (
    <div className={s.sliderForm}>
      <Typography className={s.outputWrap} variant={'body1'}>
        {value && value[0].toFixed(0)}
      </Typography>
      <RadixSlider.Root
        className={s.sliderRoot}
        defaultValue={defaultValue}
        max={max ? max : undefined}
        min={min}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
        onValueChange={onValueChange}
        step={1}
        value={value}
        {...rest}
      >
        <RadixSlider.Track className={s.sliderTrack}>
          <RadixSlider.Range className={s.sliderRange} />
        </RadixSlider.Track>
        <RadixSlider.Thumb aria-label={'Start Thumb'} className={s.sliderThumb} />
        <RadixSlider.Thumb aria-label={'End Thumb'} className={s.sliderThumb} />
      </RadixSlider.Root>
      <Typography className={s.outputWrap} variant={'body1'}>
        {value && value[1].toFixed(0)}
      </Typography>
    </div>
  )
}
