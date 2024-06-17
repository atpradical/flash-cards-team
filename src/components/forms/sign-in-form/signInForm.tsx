import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledCheckbox } from '@/shared/ui/form-components/controlled-checkbox'
import { DevTool } from '@hookform/devtools'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import s from './signInForm.module.scss'

export type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

type SignInFormProps = {
  onSubmit: (data: FormValues) => void
  defaultValues?: Partial<FormValues>
  errors?: Partial<{ [key in keyof FormValues]: string }>
}

export const SignInForm = (props: SignInFormProps) => {
  const { onSubmit } = props

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.boolean().default(false),
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  console.log('register', register('email'))
  console.log('register', register('password'))
  console.log('register', register('rememberMe'))
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <FlexContainer ai={'center'} jc={'center'}>
        <Card className={s.container}>
          <Typography as={'h1'} variant={'h1'}>
            Sign In
          </Typography>
          <TextField
            label={'Email'}
            {...register('email')}
            placeholder={'Enter your email'}
            type={'email'}
            variant={'text'}
            className={s.textField}
            error={!!errors}
            helperText={errors.email?.message}
          />
          <TextField
            label={'Password'}
            {...register('password')}
            placeholder={'Enter your password'}
            type={'password'}
            variant={'password'}
            error={!!errors}
            helperText={errors.password?.message}
          />
          <FlexContainer jc={'flex-start'}>
            <ControlledCheckbox
              control={control}
              label={'Remenber me'}
              name={'rememberMe'}
              className={s.checkbox}
            />
          </FlexContainer>
          <FlexContainer jc={'flex-end'}>
            <Button variant={'link'} className={s.button}>
              <Typography variant={'body2'}>Forgot Password?</Typography>
            </Button>
          </FlexContainer>
          <Button fullWidth variant={'primary'}>
            Sign In
          </Button>
          <Typography variant={'body2'} className={s.typography}>
            Don&apos;t have an account?
          </Typography>
          <Button variant={'link'} className={s.buttonSign}>
            Sign Up
          </Button>
        </Card>
      </FlexContainer>
    </form>
  )
}
