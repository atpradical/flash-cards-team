import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../../../../components/ui/primitives/checkbox'

export type ControlledCheckboxProps<T extends FieldValues> = Omit<
  CheckboxProps,
  // exclude all props from UseController:
  | 'checked'
  | 'control'
  | 'defaultValue'
  | 'disabled'
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'onCheckedChange'
  | 'ref'
  | 'value'
> &
  UseControllerProps<T>

export const ControlledCheckbox = <T extends FieldValues>({
  // Extract all UseController's props to avoid it transfer to Checkbox component. Transfer them to useController instead.
  control,
  defaultValue, // not used, as must be transferred into Form directly
  disabled,
  name,
  rules, // not used because of validation schemes
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({ control, defaultValue, disabled, name, rules, shouldUnregister })

  return <Checkbox {...checkboxProps} checked={value} onCheckedChange={onChange} {...field} />
}
