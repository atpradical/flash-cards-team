import { ReactNode } from 'react'

import {
  ArrowBack,
  ArrowBackOutline,
  ArrowForward,
  ArrowUp,
  CloseOutline,
  EditOutline,
  EyeOffOutline,
  EyeOutline,
  Funnel,
  Heart,
  HeartOutline,
  ImageOutline,
  LogOut,
  MenuOutline,
  MoreVerticalOutline,
  PersonOutline,
  PlayCircleOutline,
  SearchOutline,
  SettingsOutline,
  Star,
  StarOutline,
  TrashOutline,
} from '@/assets/icons'

import { cn } from './iconography.styles'

export type Icon = {
  component: ReactNode
  name: string
}

export const iconList: Icon[] = [
  { component: <PersonOutline className={cn.icon} />, name: 'person outline' },
  { component: <LogOut className={cn.icon} />, name: 'log out' },
  { component: <ArrowBackOutline className={cn.icon} />, name: 'arrow back outline' },
  { component: <ArrowBack className={cn.icon} />, name: 'arrow back' },
  { component: <ArrowForward className={cn.icon} />, name: 'arrow forward' },
  { component: <ArrowUp className={cn.icon} />, name: 'arrow up' },
  { component: <CloseOutline className={cn.icon} />, name: 'close outline' },
  { component: <MenuOutline className={cn.icon} />, name: 'menu outline' },
  { component: <SearchOutline className={cn.icon} />, name: 'search outline' },
  { component: <EyeOutline className={cn.icon} />, name: 'eye outline' },
  { component: <EyeOffOutline className={cn.icon} />, name: 'eye off outline' },
  { component: <Funnel className={cn.icon} />, name: 'funnel' },
  { component: <ImageOutline className={cn.icon} />, name: 'image outline' },
  { component: <StarOutline className={cn.star} />, name: 'star   outline' },
  { component: <Star className={cn.star} />, name: 'star' },
  { component: <PlayCircleOutline className={cn.icon} />, name: 'play circle outline' },
  { component: <EditOutline className={cn.icon} />, name: 'edit outline' },
  { component: <TrashOutline className={cn.icon} />, name: 'trash outline' },
  { component: <SettingsOutline className={cn.icon} />, name: 'settings outline' },
  { component: <MoreVerticalOutline />, name: 'more vertical outline' },
  { component: <HeartOutline className={cn.heart} />, name: 'heart outline' },
  { component: <Heart className={cn.heart} />, name: 'heart' },
]
