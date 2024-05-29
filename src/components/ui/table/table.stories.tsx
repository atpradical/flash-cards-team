import type { Meta, StoryObj } from '@storybook/react'

import { DeckListTable } from '@/components/ui/table/DeckListTableExample'

const mockTableData = [
  {
    cards: '33',
    createdBy: 'Alice Johnson',
    id: '1',
    lastUpdated: '01.01.2023',
    name: 'Как надоела верстка и CSS',
    owner: true,
  },
  {
    cards: '41',
    createdBy: 'Bob Smith',
    id: '2',
    lastUpdated: '15.07.2022',
    name: 'JavaScript для чайников',
    owner: false,
  },
  {
    cards: '52',
    createdBy: 'Diana Prince',
    id: '3',
    lastUpdated: '30.03.2021',
    name: 'О да, снова эти баги',
    owner: false,
  },
  {
    cards: '27',
    createdBy: 'Charlie Brown',
    id: '4',
    lastUpdated: '10.12.2020',
    name: 'Когда ты фулл-стек и спишь 2 часа',
    owner: true,
  },
  {
    cards: '11',
    createdBy: 'Antonio Banderas',
    id: '5',
    lastUpdated: '05.05.2019',
    name: 'Бывает же такой legacy код',
    owner: false,
  },
]

const meta = {
  argTypes: {},
  component: DeckListTable,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof DeckListTable>

type Story = StoryObj<typeof meta>

export const PrimaryTable: Story = {
  args: {
    data: mockTableData,
    label: 'Deck List',
  },
  render: () => {
    return <DeckListTable data={PrimaryTable.args.data} label={PrimaryTable.args.label} />
  },
}

export default meta

//todo: сделать базовый пример таблицы из макета (components) для сторибука.
//todo: закончить пример Deck List для сторибука.
//todo: разложить компоненты по файлам и папкам.
