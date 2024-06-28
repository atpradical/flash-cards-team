import { Link } from 'react-router-dom'

import CheckEmailIcon from '@/assets/components/svgIcons/CheckEmailIcon'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './check-email.module.scss'

type CheckEmailProps = {
  email: string
}

export const CheckEmail = ({ email }: CheckEmailProps) => {
  const cn = {
    button: clsx(s.button),
    container: clsx(s.container),
    reminder: clsx(s.reminder),
    title: clsx(s.title),
  }

  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'}>
        <Typography as={'h1'} className={cn.title} variant={'h1'}>
          Check Email
        </Typography>
        <CheckEmailIcon />
        <Typography
          className={cn.reminder}
          variant={'body2'}
        >{`We've sent an Email with instructions to \n${email}`}</Typography>
        <Button as={Link} className={cn.button} fullWidth to={'/sign-in'}>
          Back to Sign In
        </Button>
      </FlexContainer>
    </Card>
  )
}
