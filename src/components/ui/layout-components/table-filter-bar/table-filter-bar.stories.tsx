import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { TableFilterBar as TableFilterBarComponent } from '@/components/ui/layout-components'
import { action } from '@storybook/addon-actions'

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
    onClearFilters: action('onClearFilters invoked'),
    onSliderChange: action('onSliderChange invoked'),
    onSliderCommit: action('onSliderCommit invoked'),
    search: '',
    sliderRange: [25, 75],
  },
  render: args => (
    <MemoryRouter>
      <TableFilterBarComponent {...args} />
    </MemoryRouter>
  ),
}
