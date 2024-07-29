import { Link } from 'react-router-dom'

import { CheckEmailIcon } from '@/assets/icons'
import { Button, Card, Typography } from '@/components/ui/primitives'
import { PATH } from '@/shared/enums'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './confirm-email.styles'

export const ConfirmEmail = () => {
  return (
    <Card className={cn.container}>
      <FlexContainer fd={'column'} gap={'36px'}>
        <Typography as={'h1'} className={cn.title} variant={'h1'}>
          Email Confirmed
        </Typography>
        <CheckEmailIcon className={cn.icon} variant={'success'} />
        <Button as={Link} className={cn.button} fullWidth to={PATH.ROOT}>
          Back to application
        </Button>
      </FlexContainer>
    </Card>
  )
}
