import { Nullable } from '@/common/types'

export type PaginationModel = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type Card = {
  answer: string
  answerImg?: Nullable<string>
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

export type CardsListResponse = {
  items: Card[]
  pagination: PaginationModel
}

export type GetCardsArgs = {
  answer?: string
  currentPage?: number
  id: string
  itemsPerPage?: number
  orderBy?: string
  question?: string
}

export type CardsMinMaxResponse = {
  max: number
  min: number
}
