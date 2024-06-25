import { ArrowBackOutline } from '@/assets/components/svgIcons'
import { DropdownSettings } from '@/components/layout/deckSettingsDropdown/dropdownSettings'
import { Button } from '@/components/ui/button'
import { DeckTable } from '@/components/ui/deck-table'
import { CardListExample } from '@/components/ui/deck-table/deck-table.mock'
import { Pagination } from '@/components/ui/pagination'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'
import clsx from 'clsx'

import s from './deck-page.module.scss'

export const DeckPage = () => {
  const cn = {
    goBack: clsx(s.goBack),
    icon: clsx(s.icon),
    learnDeck: clsx(s.learnDeck),
    pagination: clsx(s.pagination),
  }

  // todo: delete mock data from components props during relevant Routing or RTKQuery task.
  return (
    <Page>
      <FlexContainer fd={'column'} gap={'24px'} jc={'space-between'}>
        <Button as={'a'} className={cn.goBack} href={''} variant={'link'}>
          <ArrowBackOutline className={cn.icon} />
          Back to Decks List
        </Button>
        <FlexContainer jc={'start'}>
          <Typography as={'h1'} variant={'h1'}>
            Friend’s Deck
          </Typography>
          <DropdownSettings />
          <Button as={'a'} className={cn.learnDeck} href={''}>
            Learn Deck
          </Button>
        </FlexContainer>
        <TextField placeholder={'find card'} variant={'search'} />
        <DeckTable cardList={CardListExample} onSort={() => console.log('onSort invoked!')} />
        <Pagination
          className={cn.pagination}
          currentPage={1}
          onPageChange={() => {}}
          totalCount={100}
        />
      </FlexContainer>
    </Page>
  )
}
