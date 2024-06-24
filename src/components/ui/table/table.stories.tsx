import type { Meta, StoryObj } from '@storybook/react'

import {
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/components/ui/table/table'

const mockTableData = [
  {
    cards: '33',
    createdBy: 'Alice Johnson',
    id: '1',
    lastUpdated: '01.01.2023',
    name: 'Как надоела верстка и CSS',
  },
  {
    cards: '41',
    createdBy: 'Bob Smith',
    id: '2',
    lastUpdated: '15.07.2022',
    name: 'JavaScript для чайников',
  },
  {
    cards: '52',
    createdBy: 'Diana Prince',
    id: '3',
    lastUpdated: '30.03.2021',
    name: 'О да, снова эти баги',
  },
  {
    cards: '27',
    createdBy: 'Charlie Brown',
    id: '4',
    lastUpdated: '10.12.2020',
    name: 'Когда ты фулл-стек и спишь 2 часа',
  },
  {
    cards: '11',
    createdBy: 'Antonio Banderas',
    id: '5',
    lastUpdated: '05.05.2019',
    name: 'Бывает же такой legacy код',
  },
]

const meta = {
  argTypes: {},
  component: TableContainer,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof TableContainer>

type Story = StoryObj<typeof meta>
export default meta

export const Example: Story = {
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
