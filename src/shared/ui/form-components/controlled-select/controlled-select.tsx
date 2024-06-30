import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Select, SelectProps } from '../../../../components/ui/primitives/select'

type ControlledSelectProps<T extends FieldValues> = Omit<
  SelectProps,
  | 'control'
  | 'defaultValue'
  | 'disabled'
  | 'name'
  | 'onBlur'
  | 'onValueChange'
  | 'ref'
  | 'rules'
  | 'shouldUnregister'
  | 'value'
> &
  UseControllerProps<T>

export const ControlledSelect = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...selectProps
}: ControlledSelectProps<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  return <Select {...selectProps} onValueChange={onChange} value={value} {...field} />
}
