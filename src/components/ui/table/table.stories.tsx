import type { Meta, StoryObj } from '@storybook/react'

import { Table } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'

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
  component: Table.Container,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table.Container>

type Story = StoryObj<typeof meta>

export const PlainTableExample: Story = {
  args: {},
  render: () => {
    return (
      <Table.Container>
        <Typography variant={'body2'}>Just plaint table</Typography>
        <Table.Container>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Cards</Table.HeaderCell>
              <Table.HeaderCell>Last Updated</Table.HeaderCell>
              <Table.HeaderCell>Created by</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {mockTableData.map(el => {
              return (
                <Table.Row key={el.id}>
                  <Table.TableCell>{el.name}</Table.TableCell>
                  <Table.TableCell>{el.cards}</Table.TableCell>
                  <Table.TableCell>{el.createdBy}</Table.TableCell>
                  <Table.TableCell>{el.lastUpdated}</Table.TableCell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table.Container>
      </Table.Container>
    )
  },
}

export default meta
