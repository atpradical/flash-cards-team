import { useForm } from 'react-hook-form'

import { cn } from '@/components/forms/self-rate-form/self-rate-form.styles'
import { Button, Typography } from '@/components/ui/primitives'
import { radioScheme } from '@/shared/schemes'
import { Option } from '@/shared/types/common'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledRadio } from '@/shared/ui/form-components/controlled-radio'
import { z } from 'zod'

const SelfRateScheme = z.object({ grade: radioScheme })

type SelfRateFormValues = z.infer<typeof SelfRateScheme>

type SelfRateFormProps = {
  cardId: string
  onNextQuestion: (cardId: string, grade: number) => void
}

const SelfRateOptions: Option[] = [
  { id: '1', label: 'Did not know', value: '1' },
  { id: '2', label: 'Forgot', value: '2' },
  { id: '3', label: 'A lot of thought', value: '3' },
  { id: '4', label: 'Confused', value: '4' },
  { id: '5', label: 'Knew the answer', value: '5' },
]

export const SelfRateForm = ({ cardId, onNextQuestion }: SelfRateFormProps) => {
  const { control, handleSubmit } = useForm<SelfRateFormValues>({
    defaultValues: { grade: '1' },
    mode: 'onSubmit',
  })

  const formHandler = handleSubmit(data => {
    onNextQuestion(cardId, Number(data.grade))
  })

  return (
    <form className={cn.form} onSubmit={formHandler}>
      <FlexContainer ai={'flex-start'} fd={'column'} gap={'12px'}>
        <Typography variant={'subtitle1'}>Rate yourself:</Typography>
        <ControlledRadio control={control} name={'grade'} options={SelfRateOptions} />
        <Button className={cn.button} fullWidth>
          Next Question
        </Button>
      </FlexContainer>
    </form>
  )
}
