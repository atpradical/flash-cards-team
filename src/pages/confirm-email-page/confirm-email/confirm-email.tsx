import { EmailOk } from '@/assets/icons'
import { Button, Card, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Link } from 'react-router-dom'
import { cn } from './confirm-email.styles'

type ConfirmEmailProps = {
  title: string
  description?: boolean
  buttonText: string
  icon?: boolean
  path: string
  verifyEmail?: () => void
}

export const ConfirmEmail = ({
  title,
  icon = true,
  description = true,
  buttonText,
  path,
  verifyEmail,
}: ConfirmEmailProps) => {
  return (
    <FlexContainer jc={'center'} gap={'20px'}>
      <Card className={cn.container}>
        <FlexContainer gap={'10px'} pd={'0 0 20px 0'} jc={'center'} fd={'column'}>
          <FlexContainer gap={'10px'} jc={'center'}>
            <Typography variant="h3">{title}</Typography>
            {icon && <EmailOk />}
          </FlexContainer>
          {description && (
            <Typography>
              The email confirmation link has expired. This may have happened because the link was
              used once or it expired due to security reasons
            </Typography>
          )}
        </FlexContainer>
        <Button as={Link} to={path} onClick={verifyEmail}>
          {buttonText}
        </Button>
      </Card>
    </FlexContainer>
  )
}
