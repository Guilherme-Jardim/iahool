import { Typography, TypographyProps } from '@mui/material'
import React from 'react'

interface HeadingProps extends TypographyProps {
  text: string
}

export function Heading({ text, ...rest }: HeadingProps) {
  return (
    <Typography sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }} {...rest}>
      {text}
    </Typography>
  )
}
