import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets/components/svgIcons'
import myImage from '@/assets/webp/react-logo.webp'
import { AddNewCardDialogForm, AddNewDeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { DeckTable, DeckTitle } from '@/components/ui/layout-components'
import { CardListExample } from '@/components/ui/layout-components/deck-table/deck-table.mock'
import { Button, TextField } from '@/components/ui/primitives'
import { Pagination } from '@/components/ui/primitives/pagination'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'
import clsx from 'clsx'

import s from './deck-page.module.scss'

export const DeckPage = () => {
  const [showAddNewCardDialogForm, setShowAddNewCardDialogForm] = useState(false)
  const [showDeleteCardDialogForm, setShowDeleteCardDialogForm] = useState(false)
  const [showAddNewDeckDialogForm, setShowAddNewDeckDialogForm] = useState(false)
  const [showDeleteDeckDialogForm, setShowDeleteDeckDialogForm] = useState(false)
  const cn = {
    goBack: clsx(s.goBack),
    icon: clsx(s.icon),
    image: clsx(s.image),
    learnDeck: clsx(s.learnDeck),
    pagination: clsx(s.pagination),
  }

  const editDeckHandler = () => {
    setShowAddNewDeckDialogForm(!showAddNewDeckDialogForm)
  }

  const deleteDeckHandler = () => {
    setShowDeleteDeckDialogForm(!showDeleteDeckDialogForm)
  }

  const editCardHandler = () => {
    setShowAddNewCardDialogForm(!showAddNewCardDialogForm)
  }

  const deleteCardHandler = () => {
    setShowDeleteCardDialogForm(!showDeleteCardDialogForm)
  }

  // todo: delete mock data from components props during relevant Routing or RTKQuery task.
  return (
    <Page>
      <FlexContainer fd={'column'} gap={'24px'} jc={'space-between'} pd={'0 20px'}>
        <Button as={Link} className={cn.goBack} to={PATH.DECK_LIST} variant={'link'}>
          <ArrowBackOutline className={cn.icon} />
          Back to Decks List
        </Button>
        <FlexContainer ai={'start'} jc={'start'}>
          <DeckTitle
            image={myImage}
            onDelete={deleteDeckHandler}
            onEdit={editDeckHandler}
            title={"Fried's Deck"}
          />
          <Button as={Link} className={cn.learnDeck} to={PATH.CARD}>
            Learn Deck
          </Button>
        </FlexContainer>
        <TextField placeholder={'find card'} variant={'search'} />
        <DeckTable
          cardList={CardListExample}
          onDelete={deleteCardHandler}
          onEdit={editCardHandler}
          onSort={() => console.log('onSort invoked!')}
        />
        <Pagination
          className={cn.pagination}
          currentPage={1}
          onPageChange={() => {}}
          totalCount={100}
        />
        <AddNewCardDialogForm
          onOpenChange={editCardHandler}
          onSubmit={() => console.log('onSubmit')}
          open={showAddNewCardDialogForm}
        />
        <AddNewDeckDialogForm
          onOpenChange={setShowAddNewDeckDialogForm}
          onSubmit={() => console.log('onSubmit')}
          open={showAddNewDeckDialogForm}
        />
        <DeleteDialogForm
          entity={'Card'}
          id={'15'}
          name={'Some name'}
          onOpenChange={deleteCardHandler}
          onSubmit={() => console.log('onSubmit')}
          open={showDeleteCardDialogForm}
        />
        <DeleteDialogForm
          entity={'Deck'}
          id={'15'}
          name={'Some name'}
          onOpenChange={deleteDeckHandler}
          onSubmit={() => console.log('onSubmit')}
          open={showDeleteDeckDialogForm}
        />
      </FlexContainer>
    </Page>
  )
}
