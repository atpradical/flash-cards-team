import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AddNewDeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { DeckListTable, TableFilterBar } from '@/components/ui/layout-components'
import { DeckListExample } from '@/components/ui/layout-components/deck-list-table/deck-list-table.mock'
import { Button, Typography } from '@/components/ui/primitives'
import { Pagination } from '@/components/ui/primitives/pagination'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const DeckListPage = () => {
  const dummyNumberOfCards = [2, 90]
  const [showAddDeckDialog, setShowAddDeckDialog] = useState(false)
  const [showEditDeckDialog, setEditDeckDialog] = useState(false)
  const [showDeleteDeckDialog, setDeleteDeckDialog] = useState(false)

  const navigate = useNavigate()

  const deleteDeckHandler = () => {
    setDeleteDeckDialog(!showDeleteDeckDialog)
  }

  const editDeckHandler = () => {
    setEditDeckDialog(!showEditDeckDialog)
  }
  const addNewDeckHandler = () => {
    setShowAddDeckDialog(!showAddDeckDialog)
  }

  const learnDeckHandler = () => {
    navigate('/deck')
  }

  //todo: replace related mock data and functions during RTQuery tasks implementation
  return (
    <Page>
      <FlexContainer fd={'column'} gap={'24px'} pd={'0 20px'}>
        <FlexContainer jc={'space-between'}>
          <Typography as={'h1'} variant={'h1'}>
            {"Deck's list"}
          </Typography>
          <Button onClick={addNewDeckHandler}>Add New Deck</Button>
        </FlexContainer>
        <TableFilterBar
          onValueChange={() => console.log('number of cards is changed')}
          value={dummyNumberOfCards}
        />
        <DeckListTable
          deckList={DeckListExample}
          onDelete={deleteDeckHandler}
          onEdit={editDeckHandler}
          onLearn={learnDeckHandler}
          onSort={() => console.log('onSort invoked!')}
        />
        <Pagination currentPage={1} onPageChange={() => {}} totalCount={100} />
        <AddNewDeckDialogForm
          onOpenChange={addNewDeckHandler}
          onSubmit={() => console.log('Form submit invoked!')}
          open={showAddDeckDialog}
        />
        <DeleteDialogForm
          entity={'Deck'}
          id={'12345'}
          name={"Some Deck's Name"}
          onOpenChange={deleteDeckHandler}
          onSubmit={() => console.log('delete dialog form submit invoked!')}
          open={showDeleteDeckDialog}
        />
        <AddNewDeckDialogForm
          onOpenChange={editDeckHandler}
          onSubmit={() => console.log('add dialog form submit invoked!')}
          open={showEditDeckDialog}
        />
      </FlexContainer>
    </Page>
  )
}
