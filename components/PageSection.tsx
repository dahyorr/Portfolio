import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { BoxProps } from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

interface PageSectionProps extends BoxProps {
  title: string;
}

const PageSection: React.FC<PageSectionProps> = ({children, title, ...props}) => {
  return (
    <Box minHeight={"100vh"} height="100vh" width="100%" id={title} {...props}>
      <Container maxWidth="xl" sx={{
        height:"100%"
      }}>
        <Toolbar/>
        {children}
      </Container>
    </Box>
  )
}

export default PageSection