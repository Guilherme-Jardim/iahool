import React, { ReactNode } from 'react'
import { Box, BoxProps } from '@mui/material'

interface ConnectBoxProps extends BoxProps {
  children: ReactNode
  component?: 'div' | 'main'
}

export function ConnectBox({
  children,
  component = 'div',
  ...rest
}: ConnectBoxProps) {
  return (
    <Box
      sx={{
        padding: '0.5rem',
        borderRadius: '5px',
        background: '#302e2e',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
      component={component}
      {...rest}
    >
      {children}
    </Box>
  )
}
