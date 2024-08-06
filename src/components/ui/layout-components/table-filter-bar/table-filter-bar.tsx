import { memo } from 'react'

import { TrashOutline } from '@/assets/icons'
import { Button, Slider, TabSwitcher, TextField } from '@/components/ui/primitives'
import { SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth, useTableFilterBarData } from '@/shared/hooks'
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

export const TableFilterBar = memo(
  ({
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

    const { searchHandler, tabHandler, tabs } = useTableFilterBarData()

    return (
      <FlexContainer ai={'flex-end'} fd={'row'} fw={isTablet ? 'wrap' : 'nowrap'} gap={'24px'}>
        <TextField
          onChange={searchHandler}
          placeholder={'Filter deck by name'}
          value={search}
          variant={'search'}
        />
        <TabSwitcher
          className={cn.tabs}
          label={'Show decks'}
          onTabChange={tabHandler}
          tabs={tabs}
        />
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
)
