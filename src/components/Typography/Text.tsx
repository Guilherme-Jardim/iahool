import { Typography, TypographyProps } from '@mui/material'
import React from 'react'

interface TextProps extends TypographyProps {
  text: string
}

export function Text({ text, ...rest }: TextProps) {
  return (
    <Typography
      sx={{
        marginTop: '0.2rem',
        color: 'gray',
      }}
      {...rest}
    >
      {text}
    </Typography>
  )
}
