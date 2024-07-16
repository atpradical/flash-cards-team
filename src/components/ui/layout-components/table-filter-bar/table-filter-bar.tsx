import { ChangeEvent } from 'react'

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
export const TableFilterBar = ({ max, min, search }: TableFilterBarProps) => {
  const updateSearchParam = useSearchParamUpdater()

  const tabs: Tab[] = [
    { title: 'All Decks', value: 'allDecks' },
    { title: 'My Decks', value: 'myDecks' },
    { title: 'Favorites', value: 'favorites' },
  ]

  const clearFiltersHandler = () => {
    updateSearchParam({
      authorId: '',
      currentPage: 1,
      itemsPerPage: 10,
      max: 100,
      min: 0,
      orderBy: '',
      search: '',
      tab: 'allDecks',
    })
  }

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchParam({ currentPage: 1, search: e.currentTarget.value })
  }

  const sliderHandler = (range: number[]) => {
    const [min, max] = range

    updateSearchParam({ currentPage: 1, max, min })
  }

  const tabHandler = (tab: string) => {
    updateSearchParam({ currentPage: 1, tab })
  }

  return (
    <FlexContainer ai={'flex-end'} fd={'row'} gap={'24px'}>
      <TextField
        onChange={searchHandler}
        placeholder={'Filter deck by name'}
        value={search}
        variant={'search'}
      />
      <TabSwitcher className={cn.tabs} label={'Show decks'} onTabChange={tabHandler} tabs={tabs} />
      <Slider label={'Cards amount'} max={max} min={min} onRangeChange={sliderHandler} />
      <Button className={cn.button} onClick={clearFiltersHandler} variant={'secondary'}>
        <TrashOutline />
        Clear Filter
      </Button>
    </FlexContainer>
  )
}
