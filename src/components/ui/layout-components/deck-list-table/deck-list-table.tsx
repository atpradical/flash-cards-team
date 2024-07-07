import { ArrowIosUp } from '@/assets/components/svgIcons'
import dummyCover from '@/assets/webp/dummy-deck-cover.webp'
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
import { RATIO, VARIANT } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './deck-list-table.module.scss'

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
  const cn = {
    sort: clsx(s.sort),
    sortIcon: clsx(s.sortIcon),
  }

  const sortHandler = () => {
    onSort()
  }

  const TableContent = deckList.map(el => {
    const cover = el.cover ?? dummyCover

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
          <Actions onDelete={onDelete} onEdit={onEdit} onLearn={onLearn} variant={VARIANT.ALL} />
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
                <ArrowIosUp className={cn.sortIcon} />
              </Button>
            </FlexContainer>
          </TableHeaderCell>
          <TableHeaderCell>Created by</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>{TableContent}</TableBody>
    </TableContainer>
  )
}
