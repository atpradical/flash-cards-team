import { ORDER } from '@/shared/enums'

export type Option = {
  defaultValue?: boolean
  disabled?: boolean
  id: string
  label: string
  value: string
}

export type User = {
  email: string
  name: string
  photo: {
    alt: string
    src: string
  }
}

export type Nullable<T> = T | null

export type SortCriteria = Nullable<{ id: string; order: ORDER }>
