import { ChangeEvent } from 'react'

import { ImageOutline } from '@/assets/icons'
import { Button, Image } from '@/components/ui/primitives'
import { DIALOG_ACTION, RATIO } from '@/shared/enums'
import { Nullable } from '@/shared/types/common'

import { cn } from '../dialog-forms.styles'
import { DialogImageDelete as Delete } from './dialog-image-delete'

type Props = {
  action: DIALOG_ACTION
  onDelete: () => void
  onUpload: (e: ChangeEvent<HTMLInputElement>) => void
  preview?: Nullable<string>
}

export const DialogFormUploadImage = ({ action, onDelete, onUpload, preview }: Props) => {
  let title = action === DIALOG_ACTION.UPDATE ? 'Change image' : 'Upload image'

  if (!preview) {
    title = 'Upload image'
  }

  return (
    <>
      {preview && (
        <div className={cn.relative}>
          <Image alt={`cover`} ratio={RATIO.XL} src={preview} variant={'xl'} />
          {action === DIALOG_ACTION.UPDATE && <Delete onClick={onDelete} />}
        </div>
      )}
      <Button as={'label'} fullWidth variant={'secondary'}>
        <input accept={'image/*'} hidden onChange={onUpload} type={'file'} />
        <ImageOutline className={cn.icon} />
        {title}
      </Button>
    </>
  )
}
