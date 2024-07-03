import type { Meta } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { LogOut, PersonOutline } from '@/assets/components/svgIcons'
import EditOutline from '@/assets/components/svgIcons/EditOutline'
import MoreVerticalOutline from '@/assets/components/svgIcons/MoreVerticalOutline'
import PlayCircleOutline from '@/assets/components/svgIcons/PlayCircleOutline'
import TrashOutline from '@/assets/components/svgIcons/TrashOutline'
import { Avatar, Label, Typography } from '@/components/ui/primitives'
import {
  Arrow,
  Content,
  Item,
  Root,
  Separator,
  Trigger,
} from '@/components/ui/primitives/dropdown/dropdown'
import { mockUser } from '@/components/ui/primitives/dropdown/dropdown.mock'
import { FlexContainer } from '@/shared/ui/flex-container'

const meta = {
  component: Root,
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Root>

export default meta

export const DropdownWithUserAvatar = {
  render: () => {
    return (
      <Root>
        <Trigger style={{ cursor: 'pointer', display: 'flex' }}>
          <Avatar size={'s'} src={mockUser.photo.src} title={mockUser.photo.alt} />
        </Trigger>
        <Content style={{ minWidth: '218px' }}>
          <Arrow />
          <Label>
            <Avatar size={'s'} src={mockUser.photo.src} title={'Photo'} />
            <div>
              <Typography
                style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
                variant={'subtitle2'}
              >
                {mockUser.name}
              </Typography>
              <Typography gray variant={'caption'}>
                {mockUser.email}
              </Typography>
            </div>
          </Label>
          <Separator />
          <Item>
            <Typography
              style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
              variant={'caption'}
            >
              <PersonOutline style={{ width: '16px' }} />
              My Profile
            </Typography>
          </Item>
          <Separator />
          <Item>
            <Typography
              style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
              variant={'caption'}
            >
              <LogOut style={{ width: '16px' }} />
              Sign Out
            </Typography>
          </Item>
        </Content>
      </Root>
    )
  },
}

export const DropdownWithSettings = {
  render: () => {
    return (
      <Root>
        <Trigger asChild style={{ cursor: 'pointer', display: 'flex' }}>
          <MoreVerticalOutline />
        </Trigger>
        <Content>
          <Arrow />
          <Item>
            <Typography
              style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
              variant={'caption'}
            >
              <PlayCircleOutline style={{ width: '16px' }} />
              Learn
            </Typography>
          </Item>
          <Separator />
          <Item>
            <Typography
              style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
              variant={'caption'}
            >
              <EditOutline style={{ width: '16px' }} />
              Edit
            </Typography>
          </Item>
          <Separator />
          <Item>
            <Typography
              style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
              variant={'caption'}
            >
              <TrashOutline style={{ width: '16px' }} />
              Delete
            </Typography>
          </Item>
        </Content>
      </Root>
    )
  },
}

export const DropdownWithUserAvatarLeftBottomSided = {
  render: () => {
    return (
      <MemoryRouter>
        <FlexContainer jc={'end'} mt={'800px'}>
          <Root>
            <Trigger style={{ cursor: 'pointer', display: 'flex' }}>
              <Avatar size={'s'} src={mockUser.photo.src} title={mockUser.photo.alt} />
            </Trigger>
            <Content style={{ minWidth: '218px' }}>
              <Arrow />
              <Label>
                <Avatar size={'s'} src={mockUser.photo.src} title={'Photo'} />
                <div>
                  <Typography
                    style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
                    variant={'subtitle2'}
                  >
                    {mockUser.name}
                  </Typography>
                  <Typography gray variant={'caption'}>
                    {mockUser.email}
                  </Typography>
                </div>
              </Label>
              <Separator />
              <Item>
                <Typography
                  style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
                  variant={'caption'}
                >
                  <PersonOutline style={{ width: '16px' }} />
                  My Profile
                </Typography>
              </Item>
              <Separator />
              <Item>
                <Typography
                  style={{ alignItems: 'center', display: 'flex', gap: '6px' }}
                  variant={'caption'}
                >
                  <LogOut style={{ width: '16px' }} />
                  Sign Out
                </Typography>
              </Item>
            </Content>
          </Root>
        </FlexContainer>
      </MemoryRouter>
    )
  },
}
