import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledRadio } from '@/shared/ui/form-components/controlled-radio'
import { Option } from '@/types'
import clsx from 'clsx'
import { z } from 'zod'

import s from './self-rate-form.module.scss'

const SelfRateScheme = z.object({ radio: z.string() })

type SelfRateFormValues = z.infer<typeof SelfRateScheme>

type SelfRateFormProps = {
  onSubmit: (value: SelfRateFormValues) => void
}

export const SelfRateForm = ({ onSubmit }: SelfRateFormProps) => {
  const { control, handleSubmit } = useForm<SelfRateFormValues>({
    mode: 'onSubmit',
  })
  const formHandler = handleSubmit(value => {
    onSubmit(value)
  })
  const SelfRateOptions: Option[] = [
    { id: '1', label: 'Did not know', value: '1' },
    { id: '2', label: 'Forgot', value: '2' },
    { id: '3', label: 'A lot of thought', value: '3' },
    { id: '4', label: 'Сonfused', value: '4' },
    { id: '5', label: 'Knew the answer', value: '5' },
  ]
  const cn = {
    button: clsx(s.button),
    form: clsx(s.form),
  }

  return (
    <form className={cn.form} onSubmit={formHandler}>
      <FlexContainer ai={'flex-start'} fd={'column'} gap={'12px'}>
        <Typography variant={'subtitle1'}>Rate yourself:</Typography>
        <ControlledRadio control={control} name={'radio'} options={SelfRateOptions} />
        <Button className={cn.button} fullWidth>
          Next Question
        </Button>
      </FlexContainer>
    </form>
  )
}
