import { ChangeEvent, useState } from 'react'

import { TrashOutline } from '@/assets/icons'
import { Button, Slider, TabSwitcher, TextField } from '@/components/ui/primitives'
import { useSearchParamUpdater } from '@/shared/hooks'
import { Tab } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './table-filter-bar.styles'

type TableFilterBarProps = {
  max: number
  min: number
  search: string
}

const tabs: Tab[] = [
  { title: 'All Decks', value: 'allDecks' },
  { title: 'My Decks', value: 'myDecks' },
  { title: 'Favorites', value: 'favorites' },
]

export const TableFilterBar = ({ max, min, search }: TableFilterBarProps) => {
  const updateSearchParam = useSearchParamUpdater()

  const [sliderState, setSliderState] = useState([min, max])
  const [searchState, setSearchState] = useState(search)

  const sliderRangeChangeHandler = (newRange: number[]) => {
    setSliderState(newRange)
  }
  const sliderValueCommitHandler = (newRange: number[]) => {
    setSliderState(newRange)
    updateSearchParam({ currentPage: 1, max: newRange[1], min: newRange[0] })
  }

  const clearFiltersHandler = () => {
    setSliderState([min, max])
    setSearchState('')
    updateSearchParam({
      authorId: '',
      currentPage: 1,
      itemsPerPage: 10,
      max: max,
      min: min,
      orderBy: '',
      search: '',
      tab: 'allDecks',
    })
  }

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchState(e.currentTarget.value)
    updateSearchParam({ currentPage: 1, search: e.currentTarget.value })
  }

  const tabHandler = (tab: string) => {
    updateSearchParam({ currentPage: 1, tab })
  }

  console.log('search', search.length)
  console.log('searchState', searchState.length)

  return (
    <FlexContainer ai={'flex-end'} fd={'row'} gap={'24px'}>
      <TextField
        onChange={searchHandler}
        placeholder={'Filter deck by name'}
        value={searchState}
        variant={'search'}
      />
      <TabSwitcher className={cn.tabs} label={'Show decks'} onTabChange={tabHandler} tabs={tabs} />
      <Slider
        label={'Cards amount'}
        max={max}
        min={min}
        onCommit={sliderValueCommitHandler}
        onRangeChange={sliderRangeChangeHandler}
        range={sliderState}
      />
      <Button className={cn.button} onClick={clearFiltersHandler} variant={'secondary'}>
        <TrashOutline />
        Clear Filter
      </Button>
    </FlexContainer>
  )
}
