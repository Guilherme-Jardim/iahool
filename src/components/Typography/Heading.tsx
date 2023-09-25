import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

interface HeadingProps extends TypographyProps {
  text: string;
}

export function Heading({ text, ...rest }: HeadingProps) {
  return (
    <Typography sx={{}} {...rest}>
      {text}
    </Typography>
  );
}
