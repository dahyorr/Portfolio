"use client"
import React, { PropsWithChildren } from 'react'
import { CssVarsProvider } from '@mui/material/styles';
import { theme } from "@/helpers/theme";
import SectionContextProvider from 'context/SectionContext';
import { SnackbarProvider } from 'notistack';

type Props = {}

const Providers = ({ children }: PropsWithChildren<Props>) => {

  return (
    <>
      <CssVarsProvider theme={theme} defaultColorScheme="light">
        <SectionContextProvider>

          {/* <Preloader /> */}
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            {children}
          </SnackbarProvider>
        </SectionContextProvider>
      </CssVarsProvider>
    </>
  )
}

export default Providers