import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { CloseOutline, ImageOutline } from '@/assets/icons'
import {
  DialogBody,
  DialogClose,
  Dialog as DialogComponent,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  TextField,
  Typography,
} from '@/components/ui/primitives'
import { action } from '@storybook/addon-actions'

import { Button } from '../button'
import { Checkbox } from '../checkbox'

const descriptionMockText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'

const meta = {
  argTypes: {},
  component: DialogComponent,
  tags: ['autodocs'],
  title: 'Primitives/Dialog',
} satisfies Meta<typeof DialogComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Dialog: Story = {
  args: {},
  render: () => {
    return (
      <MemoryRouter>
        <DialogComponent>
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
                <ImageOutline style={{ height: '16px', width: '16px' }} />
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
        </DialogComponent>
      </MemoryRouter>
    )
  },
}
