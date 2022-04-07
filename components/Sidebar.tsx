import React, {useState} from 'react'
import Drawer from '@mui/material/Drawer'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { IconButton } from '@mui/material';
import {FaTimes} from 'react-icons/fa';

interface SidebarProps{
  setMobileOpen: (newState: boolean) => void;
  mobileOpen: boolean;
  swipeable?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({mobileOpen, setMobileOpen, swipeable} ) => {
  const drawerWidth = swipeable ? '100%' : 130
  const onClose = () => setMobileOpen(false)
  const onOpen = () => setMobileOpen(true)
  
  const style = {
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: { 
        width: drawerWidth, 
        // bgcolor: 'black.main',
        boxSizing: 'border-box', 
        // padding: '0 25px 0 50px',
    },
  }

  const drawer = (
    <Stack>

    </Stack>
  );

  return (

      swipeable
      ?(<SwipeableDrawer
          anchor='left'
          open={mobileOpen}
          onClose={onClose}
          onOpen={onOpen}
          sx={{...style}}
        >
          <Box>
            <IconButton onClick={onClose}>
              <FaTimes/>
            </IconButton>
            {drawer}
          </Box>

        </SwipeableDrawer>
      )
      :(<Drawer
          variant="permanent"
          sx={{...style}}
        >
          <Box>
            {drawer}
          </Box>
        </Drawer>
      )
  )
}

export default Sidebar