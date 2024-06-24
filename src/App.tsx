import { useState } from 'react'

import { AddNewCardDialogForm, AddNewDeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Header } from '@/shared/ui/header'
import { Layout } from '@/shared/ui/layout'
import { Page } from '@/shared/ui/page'

import { Button } from './components/ui/button'

export function App() {
  // just mockedFunction, will be deleted later.
  const foo = (value: any) => {
    /* eslint-disable no-console */
    // temp. todo: enable @eslint rule back
    console.log(value)
  }

  const [openDeckDialog, setOpenDeckDialog] = useState(false)
  const [openCardDialog, setOpenCardDialog] = useState(false)
  const [openDeleteCardDialog, setOpenDeleteCardDialog] = useState(false)

  return (
    <Layout>
      <CardsHeader isAuthorized />
      <Page>
        <FlexContainer gap={'10px'} jc={'center'}>
          <Button onClick={() => setOpenDeckDialog(true)}>Add New Deck</Button>
          <AddNewDeckDialogForm
            onOpenChange={() => setOpenDeckDialog(false)}
            onSubmit={foo}
            open={openDeckDialog}
          />
          <Button onClick={() => setOpenCardDialog(true)}>Add New Card</Button>
          <AddNewCardDialogForm
            onOpenChange={() => setOpenCardDialog(false)}
            onSubmit={foo}
            open={openCardDialog}
          />
          <Button onClick={() => setOpenDeleteCardDialog(true)}>Delete Card</Button>
          <DeleteDialogForm
            entity={'Deck'}
            id={'12345'}
            name={'Some Name'}
            onOpenChange={() => setOpenDeleteCardDialog(false)}
            onSubmit={foo}
            open={openDeleteCardDialog}
          />
        </FlexContainer>
      </Page>
    </Layout>
  )
}
