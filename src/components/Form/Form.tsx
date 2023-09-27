import { Box, BoxProps } from '@mui/material'
import { ReactNode } from 'react'

interface FormPropss extends BoxProps {
  children: ReactNode
  component?: 'div' | 'form'
}

export function Form({ children, component = 'div', ...rest }: FormPropss) {
  return (
    <Box component={component} {...rest}>
      {children}
    </Box>
  )
}
