// ----------- Radio data example -----------
import { Option } from '@/shared/types/common'

export const mockRadio: Option[] = [
  { id: '1', label: 'Default', value: '1' },
  { id: '2', label: 'Comfortable', value: '2' },
  { id: '3', label: 'Luxury', value: '3' },
  { id: '4', label: 'Ultra wealth', value: '4' },
]
export const mockRadio2: Option[] = [
  { disabled: true, id: '1', label: 'Default', value: '1' },
  { defaultValue: true, id: '2', label: 'Comfortable', value: '2' },
  { disabled: true, id: '3', label: 'Luxury', value: '3' },
  { id: '4', label: 'Ultra wealth', value: '4' },
]
export const mockRadio3: Option[] = [
  { id: '1', label: 'Default', value: '1' },
  { id: '2', label: 'Comfortable', value: '2' },
  { defaultValue: true, id: '3', label: 'Luxury', value: '3' },
  { id: '4', label: 'Ultra wealth', value: '4' },
]
