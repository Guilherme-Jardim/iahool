import React from 'react'
import { Alert, Snackbar, AlertTitle } from '@mui/material'
import { ToastMessageProps } from './Toast.Interface'

export function Toast({
  type,
  message,
  vertical = 'top',
  horizontal = 'center',
  title,
  open,
  setOpen,
}: ToastMessageProps) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(!open)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert
        elevation={6}
        variant="outlined"
        onClose={handleClose}
        severity={type}
        sx={{ width: '100%' }}
      >
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  )
}
