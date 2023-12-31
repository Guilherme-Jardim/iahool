import React, { ReactNode } from 'react'
import { Box, BoxProps } from '@mui/material'

interface HeroProps extends BoxProps {
  children: ReactNode
}

export function Hero({ children, ...rest }: HeroProps) {
  return <Box {...rest}>{children}</Box>
}
