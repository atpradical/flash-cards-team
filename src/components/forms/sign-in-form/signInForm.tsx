import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import s from './signInForm.module.scss'

type SignInFormProps = {
  errors: boolean
}

export const SignInForm = (props: SignInFormProps) => {
  const { errors } = props

  return (
    <FlexContainer ai={'center'} jc={'center'}>
      <Card className={s.container}>
        <Typography as={'h1'} variant={'h1'}>
          Sign In
        </Typography>
        <TextField
          error={errors}
          label={'Email'}
          placeholder={'Enter your email'}
          type={'email'}
          variant={'text'}
          className={s.textField}
        />
        <TextField
          error={errors}
          label={'Password'}
          placeholder={'Enter your password'}
          type={'password'}
          variant={'password'}
        />
        <FlexContainer jc={'left'}>
          <Checkbox checked label={'Remenber me'} className={s.checkboxPosition} />
        </FlexContainer>
        <Button variant={'link'}>Forgot Password?</Button>
        <Button fullWidth variant={'primary'}>
          Sing In
        </Button>
        <Typography variant={'body2'}>Don&apos;t have an account?</Typography>
        <Button variant={'link'}>Sing Up</Button>
      </Card>
    </FlexContainer>
  )
}
