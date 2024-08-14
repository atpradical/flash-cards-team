import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
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
import { Button } from '@/components/ui/primitives/button'
import { Checkbox } from '@/components/ui/primitives/checkbox'
import { store } from '@/services'
import { action } from '@storybook/addon-actions'

const descriptionMockText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'

const meta = {
  argTypes: {},
  component: DialogComponent,
  tags: ['autodocs'],
  title: 'Primitives/Dialog',
} satisfies Meta<typeof DialogComponent>

type Story = StoryObj<typeof meta>
export default meta

export const Dialog: Story = {
  args: {},
  render: () => {
    return (
      <MemoryRouter>
        <Provider store={store}>
          <DialogComponent>
            <DialogTrigger asChild>
              <Button>Dialog</Button>
            </DialogTrigger>
            <DialogContent style={{ maxWidth: '542px' }}>
              <DialogHeader>
                <Typography as={'h3'} variant={'h3'}>
                  Some Title
                </Typography>
                <DialogClose asChild>
                  <CloseOutline onClick={action('Button close invoked')} />
                </DialogClose>
              </DialogHeader>
              <DialogBody disabled={false}>
                <Typography variant={'body1'}>{descriptionMockText}</Typography>
                <TextField label={'Label'} placeholder={'Just a placeholder'} />
                <Button fullWidth onClick={action('Button checkbox checked')} variant={'secondary'}>
                  <ImageOutline style={{ height: '16px', width: '16px' }} />
                  Upload image
                </Button>
                <Checkbox label={'Private pack'} onClick={action('Button checkbox checked')} />
              </DialogBody>
              <DialogFooter flexContainerProps={{ jc: 'space-between' }}>
                <Button disabled onClick={action('Button cancel invoked')} variant={'secondary'}>
                  Cancel
                </Button>
                <Button onClick={action('Button submit invoked')}>Submit</Button>
              </DialogFooter>
            </DialogContent>
          </DialogComponent>
        </Provider>
      </MemoryRouter>
    )
  },
}
