import { ChangeEvent } from 'react'

import { TrashOutline } from '@/assets/icons'
import { Button, Slider, Tab, TabSwitcher, TextField } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './table-filter-bar.styles'

type TableFilterBarProps = {
  onFilterTabChange: (value: string) => void
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSliderChange: (sliderRange: number[]) => void
  search: string
  sliderRange: number[]
}
export const TableFilterBar = ({
  onFilterTabChange,
  onSearchChange,
  onSliderChange,
  search,
  sliderRange,
}: TableFilterBarProps) => {
  const tabs: Tab[] = [
    { title: 'All Decks', value: 'allDecks' },
    { title: 'My Decks', value: 'myDecks' },
    { title: 'Favorites', value: 'favorites' },
  ]

  return (
    <FlexContainer ai={'flex-end'} fd={'row'} gap={'24px'}>
      <TextField
        onChange={onSearchChange}
        placeholder={'Filter deck by name'}
        value={search}
        variant={'search'}
      />
      <TabSwitcher
        className={cn.tabs}
        label={'Show decks'}
        onFilterTabChange={onFilterTabChange}
        tabs={tabs}
      />
      <Slider label={'Cards amount'} onRangeChange={onSliderChange} range={sliderRange} />
      <Button className={cn.button} variant={'secondary'}>
        <TrashOutline />
        Clear Filter
      </Button>
    </FlexContainer>
  )
}
