import { ChangeEvent } from 'react'

import { TrashOutline } from '@/assets/icons'
import { Button, Slider, TabSwitcher, TextField } from '@/components/ui/primitives'
import { SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth, useSearchParamUpdater } from '@/shared/hooks'
import { Tab } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './table-filter-bar.styles'

type TableFilterBarProps = {
  max: number
  min: number
  onClearFilters: () => void
  onSliderChange: (newRange: number[]) => void
  onSliderCommit: (newRange: number[]) => void
  search: string
  sliderRange: number[]
}

const tabs: Tab[] = [
  { title: 'All Decks', value: 'allDecks' },
  { title: 'My Decks', value: 'myDecks' },
  { title: 'Favorites', value: 'favorites' },
]

export const TableFilterBar = ({
  max,
  min,
  onClearFilters,
  onSliderChange,
  onSliderCommit,
  search,
  sliderRange,
}: TableFilterBarProps) => {
  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.TABLET
  const isTablet = currentScreenWidth <= breakpoint

  const updateSearchParam = useSearchParamUpdater()

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchParam({ currentPage: 1, search: e.currentTarget.value })
  }

  const tabHandler = (tab: string) => {
    updateSearchParam({ currentPage: 1, tab })
  }

  return (
    <FlexContainer ai={'flex-end'} fd={'row'} fw={isTablet ? 'wrap' : 'nowrap'} gap={'24px'}>
      <TextField
        onChange={searchHandler}
        placeholder={'Filter deck by name'}
        value={search}
        variant={'search'}
      />
      <TabSwitcher className={cn.tabs} label={'Show decks'} onTabChange={tabHandler} tabs={tabs} />
      <Slider
        label={'Cards amount'}
        max={max}
        min={min}
        onCommit={onSliderCommit}
        onRangeChange={onSliderChange}
        range={sliderRange}
      />
      <Button className={cn.button} onClick={onClearFilters} variant={'secondary'}>
        <TrashOutline />
        Clear Filter
      </Button>
    </FlexContainer>
  )
}
