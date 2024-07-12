import dummyCover from '@/assets/webp/dummy-cover.webp'
import { Actions } from '@/components/ui/layout-components/actions'
import { TableBody, TableContainer, TableHeader, TableRow } from '@/components/ui/primitives'
import { Deck } from '@/services/decks/deck.types'
import { VARIANT } from '@/shared/enums'
import { convertToDDMMYYYY } from '@/shared/utils/convert-date-ddmmyyyy'

import { HeaderCell, PositionCell } from '../container-components'

type DecksListTableProps = {
  deckList: Deck[]
  onDelete: () => void
  onEdit: () => void
  onLearn: () => void
  onSort: () => void
}

export const DeckListTable = ({
  deckList,
  onDelete,
  onEdit,
  onLearn,
  onSort,
}: DecksListTableProps) => {
  const sortHandler = () => {
    onSort()
  }

  const TableContent = deckList.map(el => {
    const cover = el.cover ?? dummyCover
    const cardsCount = el.cardsCount.toString()
    const updated = convertToDDMMYYYY(el.updated)

    return (
      <TableRow key={el.id}>
        <PositionCell content={el.name} entity={'Deck'} image={cover} />
        <PositionCell content={cardsCount} />
        <PositionCell content={updated} />
        <PositionCell content={el.author.name} />
        <PositionCell>
          <Actions onDelete={onDelete} onEdit={onEdit} onLearn={onLearn} variant={VARIANT.ALL} />
        </PositionCell>
      </TableRow>
    )
  })

  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <HeaderCell content={'Name'} onClick={sortHandler} />
          <HeaderCell content={'Cards'} onClick={sortHandler} />
          <HeaderCell content={'Last Updated'} onClick={sortHandler} />
          <HeaderCell content={'Created by'} onClick={sortHandler} />
          <HeaderCell content={'Actions'} sortable={false} />
        </TableRow>
      </TableHeader>
      <TableBody>{TableContent}</TableBody>
    </TableContainer>
  )
}
