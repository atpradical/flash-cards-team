import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'

import s from './table.module.scss'

type ContainerProps = {
  label?: string
} & ComponentPropsWithoutRef<'table'>

export const Container = (props: ContainerProps) => {
  const { children, className, ...rest } = props

  return (
    <table className={`${s.table} ${className}`} {...rest}>
      {children}
    </table>
  )
}

type HeaderProps = {} & ComponentPropsWithoutRef<'thead'>

export const Header = (props: HeaderProps) => {
  const { children, className, ...rest } = props

  return (
    <thead className={className} {...rest}>
      {children}
    </thead>
  )
}

type RowProps = {} & ComponentPropsWithoutRef<'tr'>

export const Row = (props: RowProps) => {
  const { children, className, ...rest } = props

  return (
    <tr className={className} {...rest}>
      {children}
    </tr>
  )
}

type HeaderCellProps = {} & ComponentPropsWithoutRef<'th'>

export const HeaderCell = (props: HeaderCellProps) => {
  const { children, className, ...rest } = props

  return (
    <th className={`${s.headerCell} ${className}`} {...rest}>
      <Typography variant={'subtitle2'}>{children}</Typography>
    </th>
  )
}

type BodyProps = {} & ComponentPropsWithoutRef<'tbody'>

export const Body = (props: BodyProps) => {
  const { children, className, ...rest } = props

  return (
    <tbody className={`${s.tableCell} ${className}`} {...rest}>
      {children}
    </tbody>
  )
}

type TableCellProps = {} & ComponentPropsWithoutRef<'td'>

export const TableCell = (props: TableCellProps) => {
  const { children, className, ...rest } = props

  return (
    <td className={`${s.tableCell} ${className}`} {...rest}>
      <Typography variant={'body2'}>{children}</Typography>
    </td>
  )
}

export const Table = { Body, Container, Header, HeaderCell, Row, TableCell }

//todo: убрать марджины у Typography
