import * as RadixSlider from '@radix-ui/react-slider'
import s from './slider.module.scss'

type Props = {
  defaultValue: number[]
  onValueChange: (value: number[]) => void
  value?: number[] //current value
}

export const SliderCustom = (props: Props) => {
  const { onValueChange, defaultValue, value, ...rest } = props

  const changeHandler = (value: number[]) => {
    onValueChange(value)
  }

  return (
    <form className={s.sliderForm}>
      <RadixSlider.Root
        className={s.sliderRoot}
        onValueChange={changeHandler}
        defaultValue={defaultValue}
        step={1}
        value={value}
        {...rest}
      >
        <RadixSlider.Track className={s.sliderTrack}>
          <RadixSlider.Range className={s.sliderRange} />
        </RadixSlider.Track>
        <RadixSlider.Thumb className={s.sliderThumb} aria-label="Start Thumb" />
        <RadixSlider.Thumb className={s.sliderThumb} aria-label="End Thumb" />
      </RadixSlider.Root>
    </form>
  )
}
