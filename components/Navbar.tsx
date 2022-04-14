import React, {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {FaHamburger} from 'react-icons/fa'
import NextLink from 'next/link'
import NavDrawer from './NavDrawer'
import { List } from '@mui/material'
import { useSection } from 'hooks'

interface NavbarProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({scrollRef}) => {
  const [transparentBackground, setTransparentBackground] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const {section} = useSection();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const textColor = transparentBackground ? '#fff' : 'inherit'

  const links = [
    {title: 'Home', id: 'home', href: '#home'},
    {title: 'About', id: 'about', href: '#about'},
    {title: 'Portfolio', id: 'portfolio', href: '#portfolio'},
    {title: 'Contact', id: 'contact', href: '#contact'},
  ]

  useEffect(() => {
    const element = scrollRef.current;
    const onScroll = () => {
      if(element?.scrollTop && element.scrollTop > 10) {
        setTransparentBackground(false)
      }
      else{
        setTransparentBackground(true)
      }
    }

      element?.addEventListener('scroll', onScroll)
    return () => {element?.removeEventListener('scroll', onScroll)}
  })

  useEffect(() => {
    setOpenDrawer(false)
  }, [isMediumScreen])

  const linkMap = links.map(({id, title, href}) => (
    <NextLink href={href} key={id} passHref>
      <ListItemButton 
        selected={section === id}
        sx={{
          '&.Mui-selected': {
            backgroundColor: 'primary.main',
            color: '#fff',
          }
        }}
      >
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            color: !openDrawer ? textColor : 'inherit'
          }}
        />
      </ListItemButton>
    </NextLink>
  ))


  const drawerList = (
    <Box
      sx={{
        width: 250,
        mt: '2rem'
      }}
      onClick={() => setOpenDrawer(false)}
      onKeyDown={() => setOpenDrawer(false)}
    >
      <List sx={{py: 0}}>
        {linkMap}
      </List>
    </Box>
  )

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
              color: 'secondary.main',  
            }}>
              <Typography
                fontFamily={"Permanent Marker"}
                variant="h2"
                color={textColor}
              >
                Dayo
              </Typography>
              <Stack direction={'row'} spacing={4} alignItems="center">
                {
                  !isMediumScreen
                  ? linkMap
                  :<IconButton 
                    disableRipple
                    sx={{
                      color: textColor,
                    }}
                    onClick={() => setOpenDrawer(prev => !prev)}
                  >
                    <FaHamburger />
                  </IconButton>
                }
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <NavDrawer open={openDrawer} toggleDrawer={setOpenDrawer}>
        {drawerList}
      </NavDrawer>
    </>
  )
}

export default Navbar