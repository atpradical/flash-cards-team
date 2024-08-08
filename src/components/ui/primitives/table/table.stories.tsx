import type { Meta, StoryObj } from '@storybook/react'

import {
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/components/ui/primitives/table'

const mockTableData = [
  {
    cards: '33',
    createdBy: 'Alice Johnson',
    id: '1',
    lastUpdated: '01.01.2023',
    name: 'How tired I am of layout and CSS',
  },
  {
    cards: '41',
    createdBy: 'Bob Smith',
    id: '2',
    lastUpdated: '15.07.2022',
    name: 'JavaScript for dummies',
  },
  {
    cards: '52',
    createdBy: 'Diana Prince',
    id: '3',
    lastUpdated: '30.03.2021',
    name: 'Oh yes, these bugs again',
  },
  {
    cards: '27',
    createdBy: 'Charlie Brown',
    id: '4',
    lastUpdated: '10.12.2020',
    name: 'When you’re full-stack and sleep for 2 hours',
  },
]

const meta = {
  argTypes: {},
  component: TableContainer,
  tags: ['autodocs'],
  title: 'Primitives/Table',
} satisfies Meta<typeof TableContainer>

type Story = StoryObj<typeof meta>
export default meta

const mockData = () => {
  return mockTableData.map(el => (
    <TableRow key={el.id}>
      <TableCell>{el.name}</TableCell>
      <TableCell>{el.cards}</TableCell>
      <TableCell>{el.createdBy}</TableCell>
      <TableCell>{el.lastUpdated}</TableCell>
    </TableRow>
  ))
}

export const Table: Story = {
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
        <TableBody>{mockData()}</TableBody>
      </TableContainer>
    )
  },
}
