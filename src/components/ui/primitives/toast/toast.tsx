import { ComponentPropsWithoutRef } from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import s from './toast.module.scss'

type ToastProps = ComponentPropsWithoutRef<typeof ToastContainer>

export const Toast = (props: ToastProps) => {
  return (
    <ToastContainer
      className={s.toast}
      draggable
      position={'bottom-right'}
      theme={'dark'}
      {...props}
    />
  )
}
