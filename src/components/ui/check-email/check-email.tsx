import CheckEmailIcon from '@/assets/components/svgIcons/CheckEmailIcon'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'

import s from './check-email.module.scss'

type CheckEmailProps = {
  email: string
}

export const CheckEmail = ({ email }: CheckEmailProps) => {
  return (
    <Card className={s.container}>
      <FlexContainer fd={'column'}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          Check Email
        </Typography>
        <CheckEmailIcon />
        <Typography
          className={s.reminder}
          variant={'body2'}
        >{`We've sent an Email with instructions to \n${email}`}</Typography>
        <Button as={'a'} className={s.button} fullWidth>
          Back to Sign In
        </Button>
      </FlexContainer>
    </Card>
  )
}
