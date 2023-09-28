import { Typography, TypographyProps } from '@mui/material'
import React from 'react'

type AuthErrorProps = TypographyProps

export function AuthError({ ...rest }: AuthErrorProps) {
  return (
    <Typography
      fontSize="sm"
      sx={{
        fontSize: '0.8rem',
        color: '#f75a68',
      }}
      {...rest}
    >
      Falha ao se conectar ao Google, verifique se você habilitou as permissões
      de acesso ao Google Calendar
    </Typography>
  )
}
