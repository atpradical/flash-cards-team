import { useState } from 'react'
import { Link } from 'react-router-dom'

import EditOutline from '@/assets/components/svgIcons/EditOutline'
import MoreVerticalOutline from '@/assets/components/svgIcons/MoreVerticalOutline'
import PlayCircleOutline from '@/assets/components/svgIcons/PlayCircleOutline'
import TrashOutline from '@/assets/components/svgIcons/TrashOutline'
import { AddNewDeckDialogForm, DeleteDialogForm } from '@/components/forms'
import { Dropdown } from '@/components/ui/dropdown/dropdown'
import { DropdownItem } from '@/components/ui/dropdown/dropdownItem/dropdownItem'
import { DropdownSeparator } from '@/components/ui/dropdown/dropdownSeparator/dropdownSeparator'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './dropdownSettings.module.scss'

export const DropdownSettings = () => {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  // const [searchParams, setSearchParams] = useSearchParams()
  // const idFromSearchParams = searchParams.get('id')

  const openEditModal = () => {
    setIsEditOpen(true)
  }

  const closeEditModal = () => {
    setIsEditOpen(false)
  }

  const handleEditFormSubmit = (data: any) => {
    console.log(data)
    //todo: logic for FormSubmit
    closeEditModal()
  }

  const openDeleteModal = () => {
    setIsDeleteOpen(true)
  }

  const closeDeleteModal = () => {
    setIsDeleteOpen(false)
    // setSearchParams()
    // // idFromSearchParams = null
  }

  const handleDeleteFormSubmit = (data: any) => {
    console.log(data)
    //todo: logic for FormSubmit
    closeDeleteModal()
  }

  const cn = {
    icon: clsx(s.icon),
    link: clsx(s.link),
    settingsItem: clsx(s.settingsItem),
    triggerIcon: clsx(s.triggerIcon),
  }

  return (
    <Dropdown trigger={<MoreVerticalOutline className={cn.triggerIcon} />}>
      <DropdownItem asChild>
        <Typography className={cn.settingsItem} variant={'caption'}>
          <Link className={cn.link} to={'/card-page'}>
            <PlayCircleOutline className={cn.icon} />
            Learn
          </Link>
        </Typography>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild>
        <Typography className={cn.settingsItem} onClick={openEditModal} variant={'caption'}>
          <EditOutline className={cn.icon} />
          Edit
        </Typography>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild>
        <Typography className={cn.settingsItem} onClick={openDeleteModal} variant={'caption'}>
          <TrashOutline className={cn.icon} />
          Delete
        </Typography>
      </DropdownItem>

      {isEditOpen && (
        <AddNewDeckDialogForm
          onOpenChange={closeEditModal}
          onSubmit={handleEditFormSubmit}
          open={isEditOpen}
        />
      )}

      {isDeleteOpen && (
        <DeleteDialogForm
          entity={'Deck'}
          id={'15'}
          name={'Will be name here'}
          onOpenChange={closeDeleteModal}
          onSubmit={handleDeleteFormSubmit}
          open={isDeleteOpen}
        />
      )}
    </Dropdown>
  )
}
