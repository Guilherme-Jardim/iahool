import React, { ReactNode } from 'react'
import { Box, BoxProps } from '@mui/material'

interface PreviewProps extends BoxProps {
  children: ReactNode
}

export function Preview({ children, ...rest }: PreviewProps) {
  return <Box {...rest}>{children}</Box>
}
