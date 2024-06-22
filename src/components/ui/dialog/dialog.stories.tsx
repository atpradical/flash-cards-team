import type { Meta, StoryObj } from '@storybook/react'

import { CloseOutline, ImageOutline } from '@/assets/components/svgIcons'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { action } from '@storybook/addon-actions'

import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from './dialog'

const descriptionMockText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa'

const meta = {
  argTypes: {},
  component: Dialog,
  tags: ['autodocs'],
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const DialogExample: Story = {
  args: {},
  render: () => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>open dialog</Button>
        </DialogTrigger>
        <DialogContent style={{ maxWidth: '542px' }}>
          <DialogHeader>
            <Typography as={'h3'} variant={'h3'}>
              Some Title
            </Typography>
            <DialogClose asChild>
              <CloseOutline onClick={action('button clicked!')} />
            </DialogClose>
          </DialogHeader>
          <DialogBody>
            <Typography variant={'body1'}>{descriptionMockText}</Typography>
            <TextField label={'Label'} placeholder={'Just a placeholder'} />
            <Button fullWidth onClick={action('button clicked!')} variant={'secondary'}>
              <ImageOutline />
              Upload image
            </Button>
            <Checkbox label={'Private pack'} onClick={action('checkbox checked!')} />
          </DialogBody>
          <DialogFooter flexContainerProps={{ jc: 'space-between' }}>
            <Button onClick={action('Cancel button clicked!')} variant={'secondary'}>
              Cancel
            </Button>
            <Button onClick={action('Submit button clicked!')}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}
