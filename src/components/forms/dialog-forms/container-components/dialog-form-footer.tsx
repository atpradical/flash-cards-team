import { Button, DialogFooter } from '@/components/ui/primitives'

type Props = {
  disabled: boolean
  onCancel: () => void
  onSubmit: () => void
  title: string
}

export const DialogFormFooter = ({ disabled, onCancel, onSubmit, title }: Props) => {
  return (
    <DialogFooter flexContainerProps={{ jc: 'space-between' }}>
      <Button disabled={disabled} onClick={onCancel} variant={'secondary'}>
        Cancel
      </Button>
      <Button disabled={disabled} onClick={onSubmit}>
        {title}
      </Button>
    </DialogFooter>
  )
}
