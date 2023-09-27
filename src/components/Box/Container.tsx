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
      component={component}
      sx={{
        maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
        height: '100vh',
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '5rem',
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}
