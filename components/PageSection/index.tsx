import React, {useEffect, useRef} from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { BoxProps } from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useOnScreen, useSection } from 'hooks';
import {Breakpoint} from '@mui/material';

interface PageSectionProps extends BoxProps {
  title: string;
  disablePy?: boolean;
  disableContainer?: boolean;
  containerWidth?: Breakpoint | false;
  viewportHeight?: boolean; 
  fitContent?: boolean; 
}

const PageSection: React.FC<PageSectionProps> = ({
  children, 
  title, 
  disablePy, 
  disableContainer, 
  containerWidth, 
  viewportHeight, 
  sx, 
  fitContent,
  ...props
}) => {
  const pageRef = useRef<HTMLElement>(null);
  const {setSection} = useSection()

  const isOnScreen = useOnScreen(pageRef)
  
  useEffect(() => {
    if(isOnScreen) {
      setSection(title)
    }
  }, [isOnScreen, title, setSection])

  const renderChild = () => {
    const sharedProps = {
      sx: {
        height:"100%",
        minHeight: 0,
      }
    }
    if(!disableContainer) return (
      <Container {...sharedProps} maxWidth={containerWidth || "xl"}>{children}</Container>
    )
    else return (<Box {...sharedProps}>{children}</Box>)
  }

  return (
    <Box 
      minHeight={fitContent ? undefined : "100vh"} 
      height={viewportHeight ? "100vh": (fitContent ? "fit-content": undefined)} 
      width="100%" 
      id={title}
      component="main" 
      sx={{...sx}}
      ref={pageRef}
      py={disablePy ? 0 : 10}
      {...props}
    >
      {renderChild()}
    </Box>
  )
}

export default PageSection