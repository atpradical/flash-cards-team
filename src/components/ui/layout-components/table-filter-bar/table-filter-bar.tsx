import { ChangeEvent } from 'react'

import { TrashOutline } from '@/assets/icons'
import { Button, Slider, Tab, TabSwitcher, TextField } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './table-filter-bar.styles'

type TableFilterBarProps = {
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSliderChange: (sliderRange: number[]) => void
  search: string
  sliderRange: number[]
}
export const TableFilterBar = ({
  onSearchChange,
  onSliderChange,
  search,
  sliderRange,
}: TableFilterBarProps) => {
  const tabs: Tab[] = [
    { title: 'My Cards', value: 'tab-value-1' },
    { title: 'All Cards', value: 'tab-value-2' },
  ]

  return (
    <FlexContainer ai={'flex-end'} fd={'row'} gap={'24px'}>
      <TextField
        onChange={onSearchChange}
        placeholder={'Search decks'}
        value={search}
        variant={'search'}
      />
      <TabSwitcher className={cn.tabs} label={'Show decks cards'} tabs={tabs} />
      <Slider label={'Number of cards'} onRangeChange={onSliderChange} range={sliderRange} />
      <Button className={cn.button} variant={'secondary'}>
        <TrashOutline />
        Clear Filter
      </Button>
    </FlexContainer>
  )
}
