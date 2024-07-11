import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
import { DIALOG_ACTION, DIALOG_ENTITY, RATIO, VARIANT } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './deck-list-table.styles'

type DecksListTableProps = {
  deckList: Deck[]
  onSort: () => void
}

export const DeckListTable = ({ deckList, onSort }: DecksListTableProps) => {
  const sortHandler = () => {
    onSort()
  }

  const [showEditDeckDialog, setShowEditDeckDialog] = useState(false)
  const [showDeleteDeckDialog, setShowDeleteDeckDialog] = useState(false)

  const [currentDeckId, setCurrentDeckId] = useState<string>('')
  const [nameDeck, setNameDeck] = useState<string>('')

  const navigate = useNavigate()

  const TableContent = deckList.map(el => {
    const cover = el.cover ?? dummyCover

    const openEditDeckHandler = (id: string) => {
      setCurrentDeckId(id)
      setShowEditDeckDialog(!showEditDeckDialog)
    }

    const openDeleteDeckHandler = (id: string) => {
      setNameDeck(el.name)
      setCurrentDeckId(id)
      setShowDeleteDeckDialog(!showDeleteDeckDialog)
    }

    const learnDeckHandler = (id: string) => {
      setCurrentDeckId(id)
      navigate(`/deck/${id}`)
    }

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
            onLearn={() => learnDeckHandler(el.id)}
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

      <DeleteDialogForm
        entity={DIALOG_ENTITY.DECK}
        id={currentDeckId}
        name={nameDeck}
        onOpenChange={setShowDeleteDeckDialog}
        onSubmit={() => console.log('delete dialog form submit invoked!')}
        open={showDeleteDeckDialog}
      />

      <DeckDialogForm
        action={DIALOG_ACTION.UPDATE}
        deckId={currentDeckId}
        onOpenChange={setShowEditDeckDialog}
        open={showEditDeckDialog}
      />
    </TableContainer>
  )
}
