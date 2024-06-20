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
      <FlexContainer fd={'column'} gap={'10px'}>
        <Typography as={'h1'} variant={'h1'}>
          Check Email
        </Typography>
        <CheckEmailIcon />
        <Typography>`We’ve sent an Email with instructions to ${email}`</Typography>
        <Button>Back to Sign In</Button>
      </FlexContainer>
    </Card>
  )
}
