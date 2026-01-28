"use client"
import { GlobalStyles, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { isMobile } from 'react-device-detect';

type Props = {}

const BaseStyles = (props: Props) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <GlobalStyles
        styles={(isMediumScreen && isMobile) ? undefined : {
          '*': {
            scrollBehavior: 'smooth',
          },
          '*::-webkit-scrollbar': {
            width: '11px',
            borderRadius: '8px',
            backgroundColor: `transparent`,
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: `#999`,
            borderRadius: '6px',
            border: '3px solid white',
          },
          scrollSnapType: 'y mandatory',
          overflowY: 'scroll',
        }}
      />
    </>
  )
}

export default BaseStyles