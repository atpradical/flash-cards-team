import type { Meta, StoryObj } from '@storybook/react'

import { mockTableData } from '@/components/ui/primitives/table/table.mock'

import {
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from './table'

const meta = {
  argTypes: {},
  component: TableContainer,
  tags: ['autodocs'],
  title: 'Primitives/Table',
} satisfies Meta<typeof TableContainer>

type Story = StoryObj<typeof meta>
export default meta

export const Table: Story = {
  args: {},
  render: () => {
    return (
      <TableContainer>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Cards</TableHeaderCell>
            <TableHeaderCell>Last Updated</TableHeaderCell>
            <TableHeaderCell>Created by</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockTableData.map(el => {
            return (
              <TableRow key={el.id}>
                <TableCell>{el.name}</TableCell>
                <TableCell>{el.cards}</TableCell>
                <TableCell>{el.createdBy}</TableCell>
                <TableCell>{el.lastUpdated}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </TableContainer>
    )
  },
}
