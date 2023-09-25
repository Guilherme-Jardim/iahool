import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';

interface PreviewProps extends BoxProps {
  children: ReactNode;
}

export function Preview({ children, ...rest }: PreviewProps) {
  return (
    <Box
      sx={{
        paddingRight: '0.5rem',
        overflow: 'hidden',
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
