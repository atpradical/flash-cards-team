import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { LinkExpired as LinkExpiredComponent } from '@/components/ui/layout-components/link-expired'
import { store } from '@/services'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: LinkExpiredComponent,
  title: 'Layout Components',
} satisfies Meta<typeof LinkExpiredComponent>

type Story = StoryObj<typeof meta>
export default meta

export const LinkExpired: Story = {
  render: () => {
    return (
      <MemoryRouter>
        <Provider store={store}>
          <LinkExpiredComponent />
        </Provider>
      </MemoryRouter>
    )
  },
}
