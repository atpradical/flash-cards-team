import { Nullable } from '@/common/types'

import { PaginationModel } from '../cards/cards.types'

export type Author = {
  id: string
  name: string
}

export type Deck = {
  author: Author
  cardsCount: number
  cover: Nullable<string>
  created: string
  id: string
  isFavorite: boolean
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type DecksListResponse = {
  items: Deck[]
  pagination: PaginationModel
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string // todo: recheck type for 'orderBy?: string' property during sort table task
}

export type CreateDeckResponse = Deck

export type CreateDeckArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}

export type DeckResponse = Omit<Deck, 'updated'>
