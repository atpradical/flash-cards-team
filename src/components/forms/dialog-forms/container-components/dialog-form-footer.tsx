import { Button, DialogFooter } from '@/components/ui/primitives'

type Props = {
  cancelFormHandler: () => void
  formHandler: () => void
  title: string
}

export const DialogFormFooter = ({ cancelFormHandler, formHandler, title }: Props) => {
  return (
    <DialogFooter flexContainerProps={{ jc: 'space-between' }}>
      <Button onClick={cancelFormHandler} variant={'secondary'}>
        Cancel
      </Button>
      <Button onClick={formHandler}>{title}</Button>
    </DialogFooter>
  )
}
