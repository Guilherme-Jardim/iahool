import React, { ReactNode } from 'react'
import { Box, BoxProps } from '@mui/material'

interface HeaderProps extends BoxProps {
  children: ReactNode
}

export function Header({ children, ...rest }: HeaderProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }} {...rest}>
      {children}
    </Box>
  )
}
