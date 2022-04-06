import React from 'react'
import Box from '@mui/material/Box'

interface PageSectionProps{
  title: string;
}

const PageSection: React.FC<PageSectionProps> = ({children, title}) => {
  return (
    <Box height="100vh" width="100%" id={title}>
      {children}
    </Box>
  )
}

export default PageSection