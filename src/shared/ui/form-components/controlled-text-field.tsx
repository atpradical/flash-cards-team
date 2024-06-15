import { useController, UseControllerProps, FieldValues } from 'react-hook-form'
import { TextField, TextFieldProps } from '@/components/ui/text-field'

export type ControlledTextFieldProps<T extends FieldValues> = Omit<
  TextFieldProps,
  | 'control'
  | 'defaultValue'
  | 'disabled'
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'ref'
  | 'value'
  | 'error'
  | 'helperText'
> &
  UseControllerProps<T>

// дженерик для обеспечения гибкости или протипизировать под input?(ComponentPropsWithoutRef<'input'>)?
export const ControlledTextField = <T extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  // helperText, ?? надо не надо?
  ...rest
}: ControlledTextFieldProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref, ...field },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
    shouldUnregister,
  })

  return (
    <TextField
      {...rest}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      ref={ref}
      error={!!error}
      // helperText={error ? error.message : helperText}
      {...field}
    />
  )
}
