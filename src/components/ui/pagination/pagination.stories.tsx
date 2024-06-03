import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from '@/components/ui/pagination/pagination'
import { action } from '@storybook/addon-actions'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationBase: Story = {
  args: {
    currentPage: 1,
    onPageChange: action('onPageChange invoked'),
    onPageSizeChange: action('onPageSizeChange invoked'),
    pageSize: 10,
    totalCount: 90,
  },

  render: () => {
    const [currentPage, setCurrentPage] = useState(PaginationBase.args.currentPage)
    const [pageSize, setPageSize] = useState(PaginationBase.args.pageSize)

    function pageSizeChangeHandler(value: string) {
      setPageSize(+value)
    }

    function pageChangeHandler(value: number) {
      setCurrentPage(value)
    }

    return (
      <Pagination
        currentPage={currentPage}
        onPageChange={pageChangeHandler}
        onPageSizeChange={pageSizeChangeHandler}
        pageSize={pageSize}
        totalCount={PaginationBase.args.totalCount}
      />
    )
  },
}
