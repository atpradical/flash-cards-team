import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'
import { Typography } from '../typography'

type Props = {
  defaultValue: number[]
  onValueChange: (value: number[]) => void
  value?: number[] //current value
}

export const Slider = (props: Props) => {
  const { defaultValue, onValueChange, value, ...rest } = props

  const changeHandler = (value: number[]) => {
    onValueChange(value)
  }

  return (
    <form className={s.sliderForm}>
      <div className={s.outputWrap}>
        <Typography variant={'body1'}>{value ? value[0] : null}</Typography>
      </div>
      <RadixSlider.Root
        className={s.sliderRoot}
        defaultValue={defaultValue}
        onValueChange={changeHandler}
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
      <div className={s.outputWrap}>
        <Typography variant={'body1'}> {value ? value[1] : null}</Typography>
      </div>
    </form>
  )
}
