import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets/icons'
import { AddNewCardDialogForm } from '@/components/forms'
import { Button, Typography } from '@/components/ui/primitives'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

import { cn } from './empty-deck-page.styles'

type EmptyDeckPageProps = {
  title?: string
}

export const EmptyDeckPage = ({ title = 'Name Deck' }: EmptyDeckPageProps) => {
  const [showCreateNewCardDialogForm, setShowCreateNewCardDialogForm] = useState(false)

  const createCardHandler = () => {
    setShowCreateNewCardDialogForm(!showCreateNewCardDialogForm)
  }

  return (
    <Page>
      <FlexContainer
        ai={'flex-start'}
        fd={'column'}
        gap={'34px'}
        jc={'space-between'}
        pd={'0 20px'}
      >
        <Button as={Link} className={cn.goBack} to={PATH.DECK_LIST} variant={'link'}>
          <ArrowBackOutline className={cn.icon} />
          Back to Decks List
        </Button>

        <Typography as={'h1'} variant={'h1'}>
          {title}
        </Typography>
        <FlexContainer fd={'column'} gap={'30px'} jc={'center'}>
          <Typography gray variant={'body1'}>
            This pack is empty. Click add new card to fill this pack
          </Typography>
          {/* todo: add check if current Deck Author is me then show Button*/}
          <Button onClick={createCardHandler}>Add New Card</Button>
        </FlexContainer>
      </FlexContainer>
      <AddNewCardDialogForm
        deckId={'cly7c2vqa0drxpb015rp9sbi7'}
        onOpenChange={createCardHandler}
        onSubmit={createCardHandler}
        open={showCreateNewCardDialogForm}
      />
    </Page>
  )
}
