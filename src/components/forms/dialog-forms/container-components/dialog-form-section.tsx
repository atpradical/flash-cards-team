import { ChangeEvent } from 'react'
import { Control, FieldValues, UseControllerProps } from 'react-hook-form'

import { ImageOutline } from '@/assets/icons'
import dummyCover from '@/assets/webp/dummy-cover.webp'
import { Button, Image, TextFieldProps, Typography } from '@/components/ui/primitives'
import { RATIO } from '@/shared/enums'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'

import { cn } from '../dialog-forms.styles'

type Props<T extends FieldValues> = {
  control: Control<T>
  cover?: string
  label?: string
  name: string
  noSubtitle?: boolean
  placeholder: string
  uploadImageHandler: (e: ChangeEvent<HTMLButtonElement>) => void
} & Omit<
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

export const DialogFormSection = <T extends FieldValues>({
  control,
  cover = dummyCover,
  label,
  name,
  noSubtitle = false,
  placeholder,
  uploadImageHandler,
}: Props<T>) => {
  const subtitle = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <>
      {!noSubtitle && <Typography variant={'subtitle1'}>{`${subtitle}:`}</Typography>}
      <ControlledTextField control={control} label={label} name={name} placeholder={placeholder} />
      <Image alt={`${name} cover description`} ratio={RATIO.XL} src={cover} variant={'xl'} />
      <Button as={'button'} fullWidth onClick={uploadImageHandler} variant={'secondary'}>
        <ImageOutline className={cn.icon} />
        Upload image
      </Button>
    </>
  )
}
