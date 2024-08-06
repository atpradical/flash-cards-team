import { ComponentPropsWithoutRef } from 'react'
import { ToastContainer } from 'react-toastify'

import s from './toast.module.scss'

type ToastProps = ComponentPropsWithoutRef<typeof ToastContainer>

export const Toast = (props: ToastProps) => {
  return (
    <ToastContainer
      closeOnClick
      draggable
      pauseOnHover
      position={'bottom-right'}
      theme={'dark'}
      toastClassName={s.toast}
      {...props}
    />
  )
}
