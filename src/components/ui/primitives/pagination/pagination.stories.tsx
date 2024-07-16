import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { Pagination as PaginationComponent } from './pagination'

const meta = {
  argTypes: {},
  component: PaginationComponent,
  title: 'Primitives Components/Pagination',
} satisfies Meta<typeof PaginationComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Pagination: Story = {
  args: {
    currentPage: 5,
    pageSize: 10,
    totalCount: 90,
  },

  render: args => {
    return (
      <MemoryRouter>
        <div style={{ width: 'fit-content' }}>
          <PaginationComponent {...args} />
        </div>
      </MemoryRouter>
    )
  },
}
