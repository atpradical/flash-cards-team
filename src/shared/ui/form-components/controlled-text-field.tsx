import { useController, UseControllerProps } from 'react-hook-form'
import { TextField, TextFieldProps } from '@/components/ui/text-field'

export type ControlledTextFieldProps = UseControllerProps<any> & Omit<TextFieldProps, 'variant'>

export const ControlledTextField = (props: ControlledTextFieldProps) => {
  const { name, rules, shouldUnregister, defaultValue, control, ...rest } = props

  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })

  return (
    <TextField
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      // ref={ref}
      error={!!error}
      helperText={error ? error.message : rest.helperText}
      {...rest}
    />
  )
}
