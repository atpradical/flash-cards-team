import { ArrowIosUp } from '@/assets/components/svgIcons'
import dummyAnswerCover from '@/assets/webp/dummy-answer-cover.webp'
import dummyQuestionCover from '@/assets/webp/dummy-question-cover.webp'
import { Nullable } from '@/common/types/commonTypes'
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
import { RATIO, VARIANT } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from '../deck-list-table/deck-list-table.module.scss'

// todo: move type CardData to correct service folder after RTKQuery integration
export type CardData = {
  answer: string
  answerImg: Nullable<string>
  answerVideo?: Nullable<string>
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg?: Nullable<string>
  questionVideo?: Nullable<string>
  shots: number
  updated: string
  userId: string
}

type DeckTableProps = {
  cardList: CardData[]
  onDelete: () => void
  onEdit: () => void
  onSort: () => void
}

export const DeckTable = ({ cardList, onDelete, onEdit, onSort }: DeckTableProps) => {
  const cn = {
    sort: clsx(s.sort),
    sortIcon: clsx(s.sortIcon),
  }

  const sortHandler = () => {
    onSort()
  }

  const TableContent = cardList.map(el => {
    const questionCover = el.questionImg ?? dummyQuestionCover
    const answerCover = el.answerImg ?? dummyAnswerCover

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
          <Grade stars={3} />
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
                <ArrowIosUp className={cn.sortIcon} />
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
