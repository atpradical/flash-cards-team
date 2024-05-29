import { ComponentPropsWithoutRef } from 'react'

import { Edit2Outline, PlayCircleOutline, TrashOutline } from '@/assets/components/svgIcons'
import { Table } from '@/components/ui/table/table'
import { Typography } from '@/components/ui/typography'

import s from './table.module.scss'

import { Button } from '../button'

type DeckListTableData = {
  cards: string
  createdBy: string
  id: string
  lastUpdated: string
  name: string
  owner: boolean
}

type DeckListTableProps = {
  data: DeckListTableData[]
  label: string
} & ComponentPropsWithoutRef<typeof Table.Container>

export const DeckListTable = (props: DeckListTableProps) => {
  const { data, label, ...rest } = props

  const tools = (
    <div className={s.tools}>
      <Button variant={'icon'}>
        <PlayCircleOutline style={{ height: '16px', width: '16px' }} />
      </Button>
      <Button variant={'icon'}>
        <TrashOutline style={{ height: '16px', width: '16px' }} />
      </Button>
      <Button variant={'icon'}>
        <Edit2Outline style={{ height: '16px', width: '16px' }} />
      </Button>
    </div>
  )

  return (
    <div>
      {label && <Typography variant={'body2'}>{label}</Typography>}
      <Table.Container {...rest}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Cards</Table.HeaderCell>
            <Table.HeaderCell>Last Updated</Table.HeaderCell>
            <Table.HeaderCell>Created by</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(el => {
            return (
              <Table.Row key={el.id}>
                <Table.TableCell>{el.name}</Table.TableCell>
                <Table.TableCell>{el.cards}</Table.TableCell>
                <Table.TableCell>{el.createdBy}</Table.TableCell>
                <Table.TableCell>{el.lastUpdated}</Table.TableCell>
                <Table.TableCell>{el.owner && tools}</Table.TableCell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Container>
    </div>
  )
}
