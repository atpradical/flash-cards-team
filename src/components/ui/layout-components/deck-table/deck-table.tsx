import { ArrowUp } from '@/assets/icons'
import dummyCover from '@/assets/webp/dummy-cover.webp'
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
import { RATIO, VARIANT } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './deck-table.styles'

type DeckTableProps = {
  cards: Card[]
  onDelete: () => void
  onEdit: () => void
  onSort: () => void
}

export const DeckTable = ({ cards, onDelete, onEdit, onSort }: DeckTableProps) => {
  const sortHandler = () => {
    onSort()
  }

  const TableContent = cards.map(el => {
    const questionCover = el.questionImg ?? dummyCover
    const answerCover = el.answerImg ?? dummyCover

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
          {/*todo: определять variant для actions по типу владения карточки, сделать в во время интеграции RTKQuery*/}
          <Actions onDelete={onDelete} onEdit={onEdit} onLearn={() => {}} variant={VARIANT.ALL} />
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
    </TableContainer>
  )
}
