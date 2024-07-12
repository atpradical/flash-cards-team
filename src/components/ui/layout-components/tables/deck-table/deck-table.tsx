import dummyCover from '@/assets/webp/dummy-cover.webp'
import { Actions } from '@/components/ui/layout-components/actions'
import { Grade, TableBody, TableContainer, TableHeader, TableRow } from '@/components/ui/primitives'
import { Card } from '@/services/cards/cards.types'
import { VARIANT } from '@/shared/enums'
import { convertToDDMMYYYY } from '@/shared/utils/convert-date-ddmmyyyy'

import { HeaderCell, PositionCell } from '../container-components'

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
    const updated = convertToDDMMYYYY(el.updated)

    return (
      <TableRow key={el.id}>
        <PositionCell content={el.question} entity={'Question'} image={questionCover} />
        <PositionCell content={el.answer} entity={'Answer'} image={answerCover} />
        <PositionCell content={updated} />
        <PositionCell>
          <Grade stars={el.grade} />
        </PositionCell>
        <PositionCell>
          {/*todo: определять variant для actions по типу владения карточки, сделать в во время интеграции RTKQuery*/}
          <Actions onDelete={onDelete} onEdit={onEdit} onLearn={() => {}} variant={VARIANT.ALL} />
        </PositionCell>
      </TableRow>
    )
  })

  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <HeaderCell content={'Question'} onClick={sortHandler} />
          <HeaderCell content={'Answer'} onClick={sortHandler} />
          <HeaderCell content={'Last Updated'} onClick={sortHandler} />
          <HeaderCell content={'Grade'} onClick={sortHandler} />
          <HeaderCell content={'Actions'} sortable={false} />
        </TableRow>
      </TableHeader>
      <TableBody>{TableContent}</TableBody>
    </TableContainer>
  )
}
