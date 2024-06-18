import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledCheckbox } from '@/shared/ui/form-components/controlled-checkbox'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './signInForm.module.scss'

type SignInFormProps = {
  onSubmit: (data: FormValues) => void
  // defaultValues?: Partial<FormValues>
  // errors?: Partial<{ [key in keyof FormValues]: string }>
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(25),
  rememberMe: z.boolean().default(false).optional(),
})

type FormValues = z.infer<typeof loginSchema>

export const SignInForm = (props: SignInFormProps) => {
  const { onSubmit } = props

  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <FlexContainer ai={'center'} jc={'center'}>
        <Card className={s.container}>
          <Typography as={'h1'} variant={'h1'}>
            Sign In
          </Typography>
          <ControlledTextField
            className={s.textField}
            control={control}
            label={'Email'}
            name={'email'}
            placeholder={'Enter your email'}
            type={'email'}
            variant={'text'}
          />
          <ControlledTextField
            control={control}
            label={'Password'}
            name={'password'}
            placeholder={'Enter your password'}
            type={'password'}
            variant={'password'}
          />
          <FlexContainer jc={'flex-start'}>
            <ControlledCheckbox
              className={s.checkbox}
              control={control}
              label={'Remenber me'}
              name={'rememberMe'}
            />
          </FlexContainer>
          <FlexContainer jc={'flex-end'}>
            <Button className={s.button} variant={'link'}>
              <Typography variant={'body2'}>Forgot Password?</Typography>
            </Button>
          </FlexContainer>
          <Button fullWidth variant={'primary'}>
            Sign In
          </Button>
          <Typography className={s.typography} variant={'body2'}>
            Don&apos;t have an account?
          </Typography>
          <Button className={s.buttonSign} variant={'link'}>
            Sign Up
          </Button>
        </Card>
      </FlexContainer>
    </form>
  )
}
