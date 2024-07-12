import { useState } from 'react'
import { generatePath } from 'react-router-dom'

import { ArrowUp } from '@/assets/icons'
import dummyCover from '@/assets/webp/dummy-cover.webp'
import { DeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { Actions } from '@/components/ui/layout-components/actions'
import { convertToDDMMYYYY } from '@/components/ui/layout-components/deck-list-table/utils/utils'
import {
  Button,
  Image,
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/components/ui/primitives'
import { Deck } from '@/services/decks/deck.types'
import { DIALOG_ACTION, DIALOG_ENTITY, PATH, RATIO, VARIANT } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './deck-list-table.styles'

type DecksListTableProps = {
  decks: Deck[]
  onSort: () => void
}

export const DeckListTable = ({ decks, onSort }: DecksListTableProps) => {
  const sortHandler = () => {
    onSort()
  }

  const [showEditDeckDialog, setShowEditDeckDialog] = useState(false)
  const [showDeleteDeckDialog, setShowDeleteDeckDialog] = useState(false)

  const [currentDeckId, setCurrentDeckId] = useState('')

  const TableContent = decks.map(el => {
    const cover = el.cover ?? dummyCover

    const openEditDeckHandler = (deckId: string) => {
      setCurrentDeckId(deckId)
      setShowEditDeckDialog(!showEditDeckDialog)
    }

    const openDeleteDeckHandler = (deckId: string) => {
      setCurrentDeckId(deckId)
      setShowDeleteDeckDialog(!showDeleteDeckDialog)
    }

    const learnDeckPath = generatePath(PATH.DECK, { deckId: el.id })

    return (
      <TableRow key={el.id}>
        <TableCell>
          <FlexContainer gap={'10px'}>
            <Image alt={el.name} ratio={RATIO.S} src={cover} variant={'s'} />
            {el.name}
          </FlexContainer>
        </TableCell>
        <TableCell>{el.cardsCount}</TableCell>
        <TableCell>{convertToDDMMYYYY(el.updated)}</TableCell>
        <TableCell>{el.author.name}</TableCell>
        <TableCell>
          {/*todo: определять variant для actions по типу владения карточки, сделать в во время интеграции RTKQuery*/}
          <Actions
            onDelete={() => openDeleteDeckHandler(el.id)}
            onEdit={() => openEditDeckHandler(el.id)}
            onLearn={learnDeckPath}
            variant={VARIANT.ALL}
          />
        </TableCell>
      </TableRow>
    )
  })

  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Cards</TableHeaderCell>
          <TableHeaderCell>
            <FlexContainer gap={'6px'}>
              Last Updated
              <Button className={cn.sort} onClick={sortHandler} variant={'icon'}>
                <ArrowUp />
              </Button>
            </FlexContainer>
          </TableHeaderCell>
          <TableHeaderCell>Created by</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>{TableContent}</TableBody>
      <DeckDialogForm
        action={DIALOG_ACTION.UPDATE}
        deckId={currentDeckId}
        onOpenChange={setShowEditDeckDialog}
        open={showEditDeckDialog}
      />
      <DeleteDialogForm
        entity={DIALOG_ENTITY.DECK}
        id={currentDeckId}
        name={'Name Deck'}
        onOpenChange={setShowDeleteDeckDialog}
        onSubmit={() => console.log('delete dialog form submit invoked!')}
        open={showDeleteDeckDialog}
      />
    </TableContainer>
  )
}
