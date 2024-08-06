import { Link } from 'react-router-dom'

import { Button, Card, Typography } from '@/components/ui/primitives'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

import s from './expired-link.module.scss'

export const ExpiredLink = () => {
  return (
    <Card className={s.container}>
      <FlexContainer fd={'column'} gap={'36px'}>
        <Typography as={'h1'} variant={'h1'}>
          Link Expired
        </Typography>
        <Typography className={s.reminder} gray variant={'body2'}>
          The link you use is not valid any more.
        </Typography>
        <Button as={Link} fullWidth to={PATH.SIGN_IN}>
          Go to Sign In
        </Button>
      </FlexContainer>
    </Card>
  )
}
