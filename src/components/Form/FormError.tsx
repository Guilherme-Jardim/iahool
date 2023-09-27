import { Typography } from '@mui/material'
import React from 'react'

export function FormError({ ...rest }) {
  return (
    <Typography
      sx={{
        color: '#f75a68',
      }}
      {...rest}
    ></Typography>
  )
}
