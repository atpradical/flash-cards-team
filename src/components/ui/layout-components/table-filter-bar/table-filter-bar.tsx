import { ChangeEvent, useState } from 'react'

import TrashOutline from '@/assets/components/svgIcons/TrashOutline'
import { Button, Slider, Tab, TabSwitcher, TextField, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './table-filter-bar.module.scss'

type TableFilterBarProps = {
  onValueChange: (value: number[]) => void
  searchChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
  searchValue: string
  value: number[]
}
export const TableFilterBar = ({
  onValueChange,
  searchChangeValue,
  searchValue,
  value,
}: TableFilterBarProps) => {
  const tabs: Tab[] = [
    { title: 'My Cards', value: 'tab-value-1' },
    { title: 'All Cards', value: 'tab-value-2' },
  ]
  const cn = {
    button: clsx(s.button),
    slider: clsx(s.slider),
    tabs: clsx(s.tabs),
  }
  const [sliderValue, setSliderValue] = useState<number[]>(value)

  const handleSliderValueChange = (newValue: number[]) => {
    setSliderValue(newValue)
    onValueChange(newValue)
  }

  return (
    <FlexContainer ai={'flex-end'} fd={'row'} gap={'24px'}>
      <TextField
        onChange={searchChangeValue}
        placeholder={'Search decks'}
        value={searchValue}
        variant={'search'}
      />
      <TabSwitcher className={cn.tabs} label={'Show decks cards'} tabs={tabs} />
      <div className={cn.slider}>
        <Typography>Number of cards</Typography>
        <Slider onValueChange={handleSliderValueChange} value={sliderValue} />
      </div>
      <Button className={cn.button} variant={'secondary'}>
        <TrashOutline />
        Clear Filter
      </Button>
    </FlexContainer>
  )
}
