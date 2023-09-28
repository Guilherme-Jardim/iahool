import React, { ReactNode } from 'react'
import { Box, BoxProps } from '@mui/material'

interface ConnectItemProps extends BoxProps {
  children: ReactNode
  component?: 'div'
}

export function ConnectItem({
  children,
  component = 'div',
  ...rest
}: ConnectItemProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #757575',
        padding: '1rem 1.5rem',
        borderRadius: 'md',
        marginBottom: '0.5rem',
      }}
      component={component}
      {...rest}
    >
      {children}
    </Box>
  )
}
