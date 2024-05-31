import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './table.module.scss'

type ContainerProps = {
  label?: string
} & ComponentPropsWithoutRef<'table'>

export const Container = (props: ContainerProps) => {
  const { children, className, ...rest } = props
  const cn = clsx(s.table, className)

  return (
    <table className={cn} {...rest}>
      {children}
    </table>
  )
}

type HeaderProps = {} & ComponentPropsWithoutRef<'thead'>

export const Header = (props: HeaderProps) => {
  const { children, className, ...rest } = props
  const cn = clsx(className)

  return (
    <thead className={cn} {...rest}>
      {children}
    </thead>
  )
}

type RowProps = {} & ComponentPropsWithoutRef<'tr'>

export const Row = (props: RowProps) => {
  const { children, className, ...rest } = props
  const cn = clsx(className)

  return (
    <tr className={cn} {...rest}>
      {children}
    </tr>
  )
}

type HeaderCellProps = {} & ComponentPropsWithoutRef<'th'>

export const HeaderCell = (props: HeaderCellProps) => {
  const { children, className, ...rest } = props
  const cn = clsx(s.headerCell, className)

  return (
    <th className={cn} {...rest}>
      <Typography variant={'subtitle2'}>{children}</Typography>
    </th>
  )
}

type BodyProps = {} & ComponentPropsWithoutRef<'tbody'>

export const Body = (props: BodyProps) => {
  const { children, className, ...rest } = props
  const cn = clsx(s.tableCell, className)

  return (
    <tbody className={cn} {...rest}>
      {children}
    </tbody>
  )
}

type TableCellProps = {} & ComponentPropsWithoutRef<'td'>

export const TableCell = (props: TableCellProps) => {
  const { children, className, ...rest } = props
  const cn = clsx(s.tableCell, className)

  return (
    <td className={cn} {...rest}>
      <Typography variant={'body2'}>{children}</Typography>
    </td>
  )
}

export const Table = { Body, Container, Header, HeaderCell, Row, TableCell }
