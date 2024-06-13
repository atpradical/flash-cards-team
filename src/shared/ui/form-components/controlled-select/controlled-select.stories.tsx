import type { Meta, StoryObj } from '@storybook/react'

import { SelectItem } from '@/components/ui/select'
import { ControlledSelect } from '@/shared/ui/form-components/controlled-select/controlled-select'

const mockOptions: SelectItem[] = [
  { title: 'some option 1', value: 'option-1' },
  { title: 'some option 2', value: 'option-2' },
  { disabled: true, title: 'some option 3', value: 'option-3' },
  { disabled: true, title: 'some option 4', value: 'option-4' },
  { title: 'some option 5', value: 'option-5' },
]

const meta = {
  argTypes: {},
  component: ControlledSelect,
  tags: ['autodocs'],
  title: 'Forms/Components/ControlledSelect',
} satisfies Meta<typeof ControlledSelect>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledSelectWithLabel: Story = {
  render: () => <ControlledSelect />,
}
