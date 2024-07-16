import { PaginationModel } from '@/services'
import { Nullable } from '@/shared/types/common'

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

export type DeckId = Pick<Deck, 'id'>

export type DecksListResponse = {
  items: Deck[]
  pagination: PaginationModel
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  favoritedBy?: string
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

export type GetDeckResponse = Omit<Deck, 'updated'>
export type UpdateDeckResponse = DeleteDeckResponse
export type UpdateDeckArgs = DeckId & Partial<CreateDeckArgs>
export type DeleteDeckResponse = Omit<Deck, 'author' | 'isFavorite'>

export type Me = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}
