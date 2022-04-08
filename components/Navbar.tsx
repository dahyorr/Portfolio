import React, {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';

const Navbar = () => {
  const [transparentBackground, setTransparentBackground] = useState(true);
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
        setTransparentBackground(false)
      }
      else{
        setTransparentBackground(true)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {window.removeEventListener('scroll', onScroll)}
  })

  const links = [
    {title: 'Home', href: '#home'},
    {title: 'About', href: '#about'},
    {title: 'Portfolio', href: '#portfolio'},
    {title: 'Contact', href: '#contact'},
  ]

  const textColor = transparentBackground ? '#fff' : 'secondary.main'

  return (
    <>
      <AppBar
        color={transparentBackground ? "transparent" : "inherit"}
        sx={{
          boxShadow: transparentBackground ? 0 : 4,
          // bgcolor: transparentBackground ? "transparent" : "background.default"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}>
              <Typography
                fontFamily={"Permanent Marker"}
                variant="h2"
                color={textColor}
              >
                Dayo
              </Typography>
              <Stack direction={'row'} spacing={4}>
                {
                  !isMediumScreen && links.map((link) => (
                    <Button key={link.href}
                      sx={{
                        color: textColor,
                        fontWeight: 500,
                        fontSize: 18,
                      }}
                      disableRipple
                    >
                      {link.title}
                    </Button>
                  ))
                }
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Navbar