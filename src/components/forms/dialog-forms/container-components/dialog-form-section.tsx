import { ChangeEvent } from 'react'
import { Control, FieldValues, UseControllerProps } from 'react-hook-form'

import { ImageOutline } from '@/assets/icons'
import dummyCover from '@/assets/webp/dummy-cover.webp'
import { Button, Image, Typography } from '@/components/ui/primitives'
import { DIALOG_ACTION, RATIO } from '@/shared/enums'
import { ControlledTextField } from '@/shared/ui/form-components/controlled-text-field'

import { cn } from '../dialog-forms.styles'
import { DialogImageDelete as Delete } from '../dialog-image-delete'

// todo: ask Andrey to recheck generic type
type Props<T extends FieldValues> = {
  control: Control<T>
  cover?: string
  label?: string
  name: string
  noSubtitle?: boolean
  placeholder: string
  uploadImageHandler: (e: ChangeEvent<HTMLButtonElement>) => void
} & { action: DIALOG_ACTION } & UseControllerProps<T>

export const DialogFormSection = <T extends FieldValues>({
  action,
  control,
  cover = dummyCover,
  label,
  name,
  noSubtitle = false,
  placeholder,
  uploadImageHandler,
}: Props<T>) => {
  const subtitle = name.charAt(0).toUpperCase() + name.slice(1)

  const deleteImageHandler = (flag: boolean) => {
    console.log(flag)
  }

  return (
    <>
      {!noSubtitle && <Typography variant={'subtitle1'}>{`${subtitle}:`}</Typography>}
      <ControlledTextField control={control} label={label} name={name} placeholder={placeholder} />
      <div className={cn.relative}>
        <Image alt={`${name} cover description`} ratio={RATIO.XL} src={cover} variant={'xl'} />
        {action === DIALOG_ACTION.UPDATE && <Delete onClick={deleteImageHandler} />}
      </div>
      <Button as={'button'} fullWidth onClick={uploadImageHandler} variant={'secondary'}>
        <ImageOutline className={cn.icon} />
        Upload image
      </Button>
    </>
  )
}
