import { Link } from 'react-router-dom'

import { CheckEmailIcon } from '@/assets/icons'
import { Button, Card, Typography } from '@/components/ui/primitives'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './check-email.styles'

type CheckEmailProps = {
  email: string
}

export const CheckEmail = ({ email }: CheckEmailProps) => {
  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'}>
        <Typography as={'h1'} className={cn.title} variant={'h1'}>
          Check Email
        </Typography>
        <CheckEmailIcon className={cn.icon} />
        <Typography
          className={cn.reminder}
        >{`We've sent an Email with instructions to \n${email}`}</Typography>
        <Button as={Link} className={cn.button} fullWidth to={PATH.SIGN_IN}>
          Back to Sign In
        </Button>
      </FlexContainer>
    </Card>
  )
}
