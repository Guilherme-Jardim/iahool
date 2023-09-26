import React from 'react'

export interface ToastMessageProps {
  message: string
  type: 'error' | 'info' | 'success' | 'warning'
  title: string
  vertical?: 'top' | 'bottom'
  horizontal?: 'left' | 'right' | 'center'
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
