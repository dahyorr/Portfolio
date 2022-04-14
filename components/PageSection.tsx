import React, {useEffect, useRef} from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { BoxProps } from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useOnScreen, useSection } from 'hooks';

interface PageSectionProps extends BoxProps {
  title: string;
}

const PageSection: React.FC<PageSectionProps> = ({children, title, ...props}) => {
  const pageRef = useRef<HTMLElement>(null);
  const {setSection} = useSection()

  const isOnScreen = useOnScreen(pageRef)
  
  useEffect(() => {
    if(isOnScreen) {
      setSection(title)
    }
  }, [isOnScreen, title, setSection])

  return (
    <Box 
      minHeight={"100vh"} 
      height="100vh" 
      width="100%" 
      id={title}
      component="main" 
      sx={{scrollSnapAlign: 'start'}}
      ref={pageRef}
      py={10}
      {...props}
    >
      <Container maxWidth="xl" sx={{
        height:"100%",
      }}>
        {/* <Toolbar/> */}
        {children}
      </Container>
    </Box>
  )
}

export default PageSection