import { ChangeEvent } from 'react'

import { TrashOutline } from '@/assets/icons'
import { Button, Slider, TabSwitcher, TextField } from '@/components/ui/primitives'
import { Tab } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './table-filter-bar.styles'

type TableFilterBarProps = {
  max: number
  min: number
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSliderChange: (sliderRange: number[]) => void
  onTabChange: (tab: string) => void
  search: string
}
export const TableFilterBar = ({
  max,
  min,
  onSearchChange,
  onSliderChange,
  onTabChange,
  search,
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
      <TabSwitcher className={cn.tabs} label={'Show decks'} onTabChange={onTabChange} tabs={tabs} />
      <Slider label={'Cards amount'} max={max} min={min} onRangeChange={onSliderChange} />
      <Button className={cn.button} variant={'secondary'}>
        <TrashOutline />
        Clear Filter
      </Button>
    </FlexContainer>
  )
}
