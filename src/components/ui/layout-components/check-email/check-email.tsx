import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { CheckEmailIcon } from '@/assets/icons'
import { cn } from '@/components/ui/layout-components/check-email/check-email.styles'
import { Button, Card, Typography } from '@/components/ui/primitives'
import { useVerifyEmailMutation } from '@/services'
import { PATH } from '@/shared/enums'
import { codeVerifySchema } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type CheckEmailProps = {
  email: string
  forRecoveryPassword?: boolean
  name?: string
}

const VerifyEmailCodeSchema = z.object({
  code: codeVerifySchema,
})

export const CheckEmail = ({ email, forRecoveryPassword }: CheckEmailProps) => {
  const { control, handleSubmit } = useForm<{ code: string }>({
    mode: 'onSubmit',
    resolver: zodResolver(VerifyEmailCodeSchema),
  })

  const navigate = useNavigate()

  const [verifyEmail, { isSuccess }] = useVerifyEmailMutation()

  const formHandler = handleSubmit(data => {
    verifyEmail(data)
      .unwrap()
      .then(() => console.log('Verification was successly'))
      .catch(error => console.error('Verification failed', error.status))
  })

  if (isSuccess) {
    navigate(PATH.ROOT)
  }

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
        {!forRecoveryPassword && (
          <form className={cn.form} onSubmit={formHandler}>
            <ControlledTextField
              control={control}
              label={'Enter code'}
              name={'code'}
              placeholder={'Enter your code'}
            />
            <Button className={cn.confirm} fullWidth variant={'secondary'}>
              Confirm
            </Button>
          </form>
        )}
        <Button as={Link} className={cn.button} fullWidth to={PATH.SIGN_IN}>
          Back to Sign In
        </Button>
      </FlexContainer>
    </Card>
  )
}
