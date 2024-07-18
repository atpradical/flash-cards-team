import { useForm } from 'react-hook-form'

import { cn } from '@/components/forms/self-rate-form/self-rate-form.styles'
import { Button, Typography } from '@/components/ui/primitives'
import { Grade } from '@/services'
import { radioScheme } from '@/shared/schemes'
import { Option } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledRadio } from '@/shared/ui/form-components/controlled-radio'
import { z } from 'zod'

const SelfRateScheme = z.object({ grade: radioScheme })

type SelfRateFormValues = z.infer<typeof SelfRateScheme>

type SelfRateFormProps = {
  onSubmit: (data: Grade) => void
}

export const SelfRateForm = ({ onSubmit }: SelfRateFormProps) => {
  const { control, handleSubmit } = useForm<SelfRateFormValues>({
    defaultValues: { grade: '1' },
    mode: 'onSubmit',
  })

  const SelfRateOptions: Option[] = [
    { id: '1', label: 'Did not know', value: '1' },
    { id: '2', label: 'Forgot', value: '2' },
    { id: '3', label: 'A lot of thought', value: '3' },
    { id: '4', label: 'Confused', value: '4' },
    { id: '5', label: 'Knew the answer', value: '5' },
  ]

  return (
    <form className={cn.form} onSubmit={handleSubmit(onSubmit)}>
      <FlexContainer ai={'flex-start'} fd={'column'} gap={'12px'}>
        <Typography variant={'subtitle1'}>Rate yourself:</Typography>
        <ControlledRadio control={control} name={'grade'} options={SelfRateOptions} />
        <Button className={cn.button} fullWidth type={'submit'}>
          Next Question
        </Button>
      </FlexContainer>
    </form>
  )
}
