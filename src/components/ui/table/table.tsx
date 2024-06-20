import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './table.module.scss'

type ContainerProps = {
  label?: string
} & ComponentPropsWithoutRef<'table'>

type ContainerPropsRef = ElementRef<'table'>

export const Container = forwardRef<ContainerPropsRef, ContainerProps>((props, ref) => {
  const { children, className, ...rest } = props
  const cn = clsx(s.table, className)

  return (
    <table className={cn} ref={ref} {...rest}>
      {children}
    </table>
  )
})

type HeaderProps = ComponentPropsWithoutRef<'thead'>
type HeaderPropsRef = ElementRef<'thead'>

export const Header = forwardRef<HeaderPropsRef, HeaderProps>((props, ref) => {
  const { children, className, ...rest } = props
  const cn = clsx(className)

  return (
    <thead className={cn} ref={ref} {...rest}>
      {children}
    </thead>
  )
})

type RowProps = ComponentPropsWithoutRef<'tr'>
type RowPropsRef = ElementRef<'tr'>

export const Row = forwardRef<RowPropsRef, RowProps>((props, ref) => {
  const { children, className, ...rest } = props
  const cn = clsx(className)

  return (
    <tr className={cn} ref={ref} {...rest}>
      {children}
    </tr>
  )
})

type HeaderCellProps = ComponentPropsWithoutRef<'th'>
type HeaderCellPropsRef = ElementRef<'th'>

export const HeaderCell = forwardRef<HeaderCellPropsRef, HeaderCellProps>((props, ref) => {
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

type BodyProps = ComponentPropsWithoutRef<'tbody'>
type BodyPropsRef = ElementRef<'tbody'>

export const Body = forwardRef<BodyPropsRef, BodyProps>((props, ref) => {
  const { children, className, ...rest } = props
  const cn = clsx(s.tableCell, className)

  return (
    <tbody className={cn} ref={ref} {...rest}>
      {children}
    </tbody>
  )
})

type TableCellProps = ComponentPropsWithoutRef<'td'>
type TableCellPropsRef = ElementRef<'td'>

export const TableCell = forwardRef<TableCellPropsRef, TableCellProps>((props, ref) => {
  const { children, className, ...rest } = props
  const cn = clsx(s.tableCell, className)

  return (
    <td className={cn} ref={ref} {...rest}>
      <Typography as={'span'}>{children}</Typography>
    </td>
  )
})

export const Table = { Body, Container, Header, HeaderCell, Row, TableCell }
