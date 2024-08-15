import { Button, DialogFooter } from '@/components/ui/primitives'

type Props = {
  className?: string
  disabled: boolean
  onCancel: () => void
  onSubmit: () => void
  title: string
}

export const DialogFormFooter = ({ className, disabled, onCancel, onSubmit, title }: Props) => {
  return (
    <DialogFooter className={className} flexContainerProps={{ jc: 'space-between' }}>
      <Button onClick={onCancel} type={'button'} variant={'secondary'}>
        Cancel
      </Button>
      <Button disabled={disabled} onClick={onSubmit}>
        {title}
      </Button>
    </DialogFooter>
  )
}
