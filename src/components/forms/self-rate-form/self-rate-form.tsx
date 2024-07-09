import { useForm } from 'react-hook-form'

import { Option } from '@/common/types'
import { cn } from '@/components/forms/self-rate-form/self-rate-form.styles'
import { Button, Typography } from '@/components/ui/primitives'
import { radioScheme } from '@/shared/schemes'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledRadio } from '@/shared/ui/form-components/controlled-radio'
import { z } from 'zod'

const SelfRateScheme = z.object({ radio: radioScheme })

type SelfRateFormValues = z.infer<typeof SelfRateScheme>

type SelfRateFormProps = {
  onSubmit: (data: SelfRateFormValues) => void
}

export const SelfRateForm = ({ onSubmit }: SelfRateFormProps) => {
  const { control, handleSubmit } = useForm<SelfRateFormValues>({
    mode: 'onSubmit',
  })
  const formHandler = handleSubmit(data => onSubmit(data))

  const SelfRateOptions: Option[] = [
    { id: '1', label: 'Did not know', value: '1' },
    { id: '2', label: 'Forgot', value: '2' },
    { id: '3', label: 'A lot of thought', value: '3' },
    { id: '4', label: 'Confused', value: '4' },
    { id: '5', label: 'Knew the answer', value: '5' },
  ]

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
