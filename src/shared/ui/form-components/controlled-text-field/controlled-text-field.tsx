import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/text-field'

export type ControlledTextFieldProps<T extends FieldValues> = Omit<
  TextFieldProps,
  | 'control'
  | 'defaultValue'
  | 'disabled'
  | 'error'
  | 'helperText'
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'ref'
  | 'value'
> &
  UseControllerProps<T>

export const ControlledTextField = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  disabled,
  shouldUnregister,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const {
    field: { onBlur, onChange, ref, value, ...field },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    disabled,
    shouldUnregister,
  })

  return (
    <TextField
      {...rest}
      value={value}
      onChange={onChange}
      error={!!error}
      onBlur={onBlur}
      helperText={error?.message}
      ref={ref}
      {...field}
    />
  )
}
