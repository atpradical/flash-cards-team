import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { TableFilterBar as TableFilterBarComponent } from '@/components/ui/layout-components'

const meta = {
  argTypes: {},
  component: TableFilterBarComponent,
  title: 'Layout Components',
} satisfies Meta<typeof TableFilterBarComponent>

export default meta
type Story = StoryObj<typeof meta>

export const TableFilterBar: Story = {
  args: {
    max: 100,
    min: 0,
    search: '',
  },
  render: args => (
    <MemoryRouter>
      <TableFilterBarComponent {...args} />
    </MemoryRouter>
  ),
}
