import { ComponentPropsWithoutRef } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { Typography } from '../typography'

type Props = {
  max?: number
  min?: number
  onValueChange: (value: number[]) => void
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
    <div className={s.container}>
      <Typography className={s.outputWrap} variant={'body1'}>
        {value && value[0].toFixed(0)}
      </Typography>
      <RadixSlider.Root
        className={s.root}
        defaultValue={defaultValue}
        max={max}
        min={min}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
        onValueChange={onValueChange}
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
        {value && value[1].toFixed(0)}
      </Typography>
    </div>
  )
}
