import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/primitives/text-field'

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
  disabled,
  name,
  rules,
  shouldUnregister,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const {
    field: { onBlur, onChange, ref, value, ...field },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <TextField
      {...rest}
      error={!!error}
      helperText={error?.message}
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
      value={value}
      {...field}
    />
  )
}
