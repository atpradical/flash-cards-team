import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> = Omit<
  CheckboxProps,
  'id' | 'onChange' | 'value'
> &
  UseControllerProps<TFieldValues>

export const ControlledCheckbox = <TFieldValues extends FieldValues>(
  props: ControlledCheckboxProps<TFieldValues>
) => {
  const { control, defaultValue, name, rules, shouldUnregister, ...checkboxProps } = props

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...{
        checked: value,
        id: name,
        onChange,
        ...checkboxProps,
      }}
    />
  )
}
