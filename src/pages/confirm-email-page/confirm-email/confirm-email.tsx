import { Link } from 'react-router-dom'

import { EmailOk } from '@/assets/icons'
import { Button, Card, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './confirm-email.styles'

type ConfirmEmailProps = {
  buttonText: string
  description?: boolean
  icon?: boolean
  path: string
  title: string
}

export const ConfirmEmail = ({
  buttonText,
  description = true,
  icon = true,
  path,
  title,
}: ConfirmEmailProps) => {
  return (
    <FlexContainer gap={'20px'} jc={'center'}>
      <Card className={cn.container}>
        <FlexContainer fd={'column'} gap={'10px'} jc={'center'} pd={'0 0 20px 0'}>
          <FlexContainer gap={'10px'} jc={'center'}>
            <Typography variant={'h3'}>{title}</Typography>
            {icon && <EmailOk />}
          </FlexContainer>
          {description && (
            <Typography>
              The email confirmation link has expired. This may have happened because the link was
              used once or it expired due to security reasons
            </Typography>
          )}
        </FlexContainer>
        <Button as={Link} to={path}>
          {buttonText}
        </Button>
      </Card>
    </FlexContainer>
  )
}
