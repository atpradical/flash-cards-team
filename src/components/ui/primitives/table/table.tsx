import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './table.module.scss'

import { Typography } from '../typography'

type TableContainerProps = {
  label?: string
} & ComponentPropsWithoutRef<'table'>

type TableContainerRef = ElementRef<'table'>

const TableContainer = forwardRef<TableContainerRef, TableContainerProps>((props, ref) => {
  const { children, className, ...rest } = props
  const cn = clsx(s.table, className)

  return (
    <table className={cn} ref={ref} {...rest}>
      {children}
    </table>
  )
})

type TableHeaderProps = ComponentPropsWithoutRef<'thead'>
type TableHeaderRef = ElementRef<'thead'>

const TableHeader = forwardRef<TableHeaderRef, TableHeaderProps>((props, ref) => {
  const { children, className, ...rest } = props
  const cn = clsx(className)

  return (
    <thead className={cn} ref={ref} {...rest}>
      {children}
    </thead>
  )
})

type TableRowProps = ComponentPropsWithoutRef<'tr'>
type TableRowRef = ElementRef<'tr'>

const TableRow = forwardRef<TableRowRef, TableRowProps>((props, ref) => {
  const { children, className, ...rest } = props
  const cn = clsx(className)

  return (
    <tr className={cn} ref={ref} {...rest}>
      {children}
    </tr>
  )
})

type TableHeaderCellProps = ComponentPropsWithoutRef<'th'>
type TableHeaderCellRef = ElementRef<'th'>

const TableHeaderCell = forwardRef<TableHeaderCellRef, TableHeaderCellProps>((props, ref) => {
  const { children, className, ...rest } = props
  const cn = clsx(s.headerCell, className)

  return (
    <th className={cn} ref={ref} {...rest}>
      <Typography as={'span'} variant={'subtitle2'}>
        {children}
      </Typography>
    </th>
  )
})

type TableBodyProps = ComponentPropsWithoutRef<'tbody'>
type TableBodyRef = ElementRef<'tbody'>

const TableBody = forwardRef<TableBodyRef, TableBodyProps>((props, ref) => {
  const { children, className, ...rest } = props
  const cn = clsx(s.tableCell, className)

  return (
    <tbody className={cn} ref={ref} {...rest}>
      {children}
    </tbody>
  )
})

type TableCellProps = ComponentPropsWithoutRef<'td'>
type TableCellRef = ElementRef<'td'>

const TableCell = forwardRef<TableCellRef, TableCellProps>((props, ref) => {
  const { children, className, ...rest } = props
  const cn = clsx(s.tableCell, className)

  return (
    <td className={cn} ref={ref} {...rest}>
      <Typography as={'span'}>{children}</Typography>
    </td>
  )
})

export { TableBody, TableCell, TableContainer, TableHeader, TableHeaderCell, TableRow }
