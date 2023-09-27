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
    <Box component={component} {...rest}>
      {children}
    </Box>
  )
}
