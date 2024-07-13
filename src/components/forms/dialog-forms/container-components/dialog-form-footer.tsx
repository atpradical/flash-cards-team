import { Button, DialogFooter } from '@/components/ui/primitives'

type Props = {
  onCancel: () => void
  onSubmit: () => void
  title: string
}

export const DialogFormFooter = ({ onCancel, onSubmit, title }: Props) => {
  return (
    <DialogFooter flexContainerProps={{ jc: 'space-between' }}>
      <Button onClick={onCancel} variant={'secondary'}>
        Cancel
      </Button>
      <Button onClick={onSubmit}>{title}</Button>
    </DialogFooter>
  )
}
