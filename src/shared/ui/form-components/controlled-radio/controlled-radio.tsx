import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Radio, RadioProps } from '../../../../components/ui/primitives/radio'

type ControlledRadioProps<T extends FieldValues> = Omit<
  RadioProps,
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

export const ControlledRadio = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  rules,
  shouldUnregister,
  ...radioProps
}: ControlledRadioProps<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  return <Radio {...radioProps} onValueChange={onChange} value={value} {...field} />
}
