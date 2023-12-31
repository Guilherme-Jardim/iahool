import React, { ReactNode } from 'react'
import { Box, BoxProps } from '@mui/material'

interface ContainerProps extends BoxProps {
  children: ReactNode
  component?: 'div' | 'main'
}

export function Container({
  children,
  component = 'div',
  ...rest
}: ContainerProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '30rem',
        margin: '7rem auto auto auto',
      }}
      component={component}
      {...rest}
    >
      {children}
    </Box>
  )
}
