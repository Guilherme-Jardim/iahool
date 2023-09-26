import React, { ReactNode } from 'react'
import { Box, BoxProps } from '@mui/material'

interface ContainerProps extends BoxProps {
  children: ReactNode
}

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <Box
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
