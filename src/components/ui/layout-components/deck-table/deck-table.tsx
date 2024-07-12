import { useState } from 'react'

import { ArrowUp } from '@/assets/icons'
import dummyCover from '@/assets/webp/dummy-cover.webp'
import { CardDialogForm, DeleteDialogForm } from '@/components/forms'
import { Actions } from '@/components/ui/layout-components/actions'
import { convertToDDMMYYYY } from '@/components/ui/layout-components/deck-list-table/utils/utils'
import {
  Button,
  Grade,
  Image,
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/components/ui/primitives'
import { Card } from '@/services/cards/cards.types'
import { DIALOG_ACTION, DIALOG_ENTITY, RATIO, VARIANT } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './deck-table.styles'

type DeckTableProps = {
  cards: Card[]
  onSort: () => void
}

export const DeckTable = ({ cards, onSort }: DeckTableProps) => {
  const [selectedCardId, setSelectedCardId] = useState('')
  const [showUpdateCardDialogForm, setShowUpdateCardDialogForm] = useState(false)
  const [showDeleteCardDialogForm, setShowDeleteCardDialogForm] = useState(false)

  const sortHandler = () => {
    onSort()
  }

  const TableContent = cards.map(el => {
    const questionCover = el.questionImg ?? dummyCover
    const answerCover = el.answerImg ?? dummyCover

    const onEditHandler = (cardId: string) => {
      setSelectedCardId(cardId)
      setShowUpdateCardDialogForm(true)
    }
    const onDeleteHandler = (cardId: string) => {
      setSelectedCardId(cardId)
      setShowDeleteCardDialogForm(true)
    }

    return (
      <TableRow key={el.id}>
        <TableCell>
          <FlexContainer gap={'10px'}>
            <Image alt={el.question} ratio={RATIO.S} src={questionCover} variant={'s'} />
            {el.question}
          </FlexContainer>
        </TableCell>
        <TableCell>
          <FlexContainer gap={'10px'}>
            <Image alt={el.answer} ratio={RATIO.S} src={answerCover} variant={'s'} />
            {el.answer}
          </FlexContainer>
        </TableCell>
        <TableCell>{convertToDDMMYYYY(el.updated)}</TableCell>
        <TableCell>
          <Grade stars={el.grade} />
        </TableCell>
        <TableCell>
          <Actions
            id={el.id}
            onDelete={() => onDeleteHandler(el.id)}
            onEdit={() => onEditHandler(el.id)}
            // todo: определять variant для actions по типу владения карточки, сделать в во время интеграции RTKQuery
            variant={VARIANT.ONLY_EDITS}
          />
        </TableCell>
      </TableRow>
    )
  })

  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Question</TableHeaderCell>
          <TableHeaderCell>Answer</TableHeaderCell>
          <TableHeaderCell>
            <FlexContainer gap={'6px'}>
              Last Updated
              <Button className={cn.sort} onClick={sortHandler} variant={'icon'}>
                <ArrowUp />
              </Button>
            </FlexContainer>
          </TableHeaderCell>
          <TableHeaderCell>Grade</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>{TableContent}</TableBody>
      <CardDialogForm
        action={DIALOG_ACTION.UPDATE}
        cardId={selectedCardId}
        onOpenChange={setShowUpdateCardDialogForm}
        open={showUpdateCardDialogForm}
      />
      <DeleteDialogForm
        entity={DIALOG_ENTITY.CARD}
        entityId={selectedCardId}
        name={'Some name'}
        onOpenChange={setShowDeleteCardDialogForm}
        onSubmit={() => console.log('onSubmit')}
        open={showDeleteCardDialogForm}
      />
    </TableContainer>
  )
}
