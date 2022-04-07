import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { SxProps } from '@mui/system';
import { BoxProps } from '@mui/material/Box';

interface PageSectionProps extends BoxProps {
  title: string;
}

const PageSection: React.FC<PageSectionProps> = ({children, title, ...props}) => {
  return (
    <Box height="100vh" width="100%" id={title} {...props}>
      <Container maxWidth="xl">
        {children}
      </Container>
    </Box>
  )
}

export default PageSection