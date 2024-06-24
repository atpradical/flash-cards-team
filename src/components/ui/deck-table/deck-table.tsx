import { ArrowIosUp } from '@/assets/components/svgIcons'
import dummyAnswerCover from '@/assets/webp/dummy-answer-cover.webp'
import dummyQuestionCover from '@/assets/webp/dummy-question-cover.webp'
import { Actions } from '@/components/ui/actions'
import { Button } from '@/components/ui/button'
import { convertToDDMMYYYY } from '@/components/ui/deck-list-table/utils/utils'
import { VARIANT } from '@/shared/enums/enums'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Nullable } from '@/types/commonTypes'
import clsx from 'clsx'

import s from '../deck-list-table/deck-list-table.module.scss'

import { Grade } from '../grade'
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '../table'

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
  onSort: () => void
}

export const DeckTable = ({ cardList, onSort }: DeckTableProps) => {
  const cn = {
    cover: clsx(s.cover),
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
            {/*todo: заменить на AspectRatio по готовности компоненты или при рефакторинге при необходимости удалить класс со стилями*/}
            <img alt={el.question} className={cn.cover} src={questionCover} />
            {el.question}
          </FlexContainer>
        </TableCell>
        <TableCell>
          <FlexContainer gap={'10px'}>
            {/*todo: заменить на AspectRatio по готовности компоненты или при рефакторинге при необходимости удалить класс со стилями*/}
            <img alt={el.answer} className={cn.cover} src={answerCover} />
            {el.answer}
          </FlexContainer>
        </TableCell>
        <TableCell>{convertToDDMMYYYY(el.updated)}</TableCell>
        <TableCell>
          <Grade stars={3} />
        </TableCell>
        <TableCell>
          {/*todo: определять variant для actions по типу владения карточки, сделать в во время интеграции RTKQuery*/}
          <Actions onDelete={() => {}} onEdit={() => {}} onLearn={() => {}} variant={VARIANT.ALL} />
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
