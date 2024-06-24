import { useState } from 'react'
import { useForm } from 'react-hook-form'

import TrashOutline from '@/assets/components/svgIcons/TrashOutline'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Tab, TabSwitcher } from '@/components/ui/tabSwitcher'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import clsx from 'clsx'

import s from './table-filter-bar.module.scss'

type TableFilterBarProps = {
  onValueChange: (value: number[]) => void
  value: number[]
}
export const TableFilterBar = ({ onValueChange, value }: TableFilterBarProps) => {
  const tabs: Tab[] = [
    { title: 'My Cards', value: 'tab-value-1' },
    { title: 'All Cards', value: 'tab-value-2' },
  ]
  const cn = {
    button: clsx(s.button),
    input: clsx(s.input),
    slider: clsx(s.slider),
    tabs: clsx(s.tabs),
  }
  const [sliderValue, setsliderValue] = useState<number[]>(value)

  const handleSliderValueChange = (newValue: number[]) => {
    setsliderValue(newValue)
    onValueChange(newValue)
  }
  const { control } = useForm({
    mode: 'onSubmit',
  })

  return (
    <FlexContainer ai={'flex-end'} fd={'row'} gap={'24px'}>
      <ControlledTextField
        className={cn.input}
        control={control}
        name={'search'}
        placeholder={'Input search'}
        variant={'search'}
      />
      <TabSwitcher className={cn.tabs} label={'Show decks cards'} tabs={tabs} />
      <div className={cn.slider}>
        <Typography variant={'body2'}>Number of cards</Typography>
        <Slider onValueChange={handleSliderValueChange} value={sliderValue} />
      </div>
      <Button className={cn.button} variant={'secondary'}>
        <TrashOutline />
        Clear Filter
      </Button>
    </FlexContainer>
  )
}