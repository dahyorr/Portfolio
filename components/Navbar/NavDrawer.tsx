import React, { PropsWithChildren } from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

interface NavDrawerProps{
  open: boolean;
  toggleDrawer: (value: boolean) => void;
}

const NavDrawer: React.FC<PropsWithChildren<NavDrawerProps>> = ({open, toggleDrawer, children}) => {
  return (
    <SwipeableDrawer
      anchor={'right'}
      open={open}
      onClose={() => toggleDrawer(false)}
      onOpen={() =>toggleDrawer(true)}
    >
      {children}
    </SwipeableDrawer>
  )
}

export default NavDrawer