import { Typography, TypographyProps } from '@mui/material'
import React from 'react'
interface HeadingProps extends TypographyProps<typeof Typography> {
  text: string
  component?: 'span' | 'strong' | 'p' | 'strong'
}

export function Heading({ text, component = 'p', ...rest }: HeadingProps) {
  return (
    <Typography
      component={component}
      sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
      {...rest}
    >
      {text}
    </Typography>
  )
}
