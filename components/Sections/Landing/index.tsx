"use client"
import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import PageSection from '../../PageSection'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { BiMailSend } from 'react-icons/bi'
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import socialLinks from 'helpers/socials.json'
// import PlainBackground from './PlainBackground'
// import BgGradient from './backgrounds/BgGradient'
// import BgAnimated from './backgrounds/BgAnimated'
// import BgSplit from './backgrounds/BgSplit'
// import BgMesh from './PlainBackground'
import BgPattern from './backgrounds/BgPattern'
// import ParticleBackground from './ParticleBackground'

const TITLES = ['Full-Stack Web Engineer', 'Application and Cloud Security Engineer']

const Landing: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));
  const [titleIndex, setTitleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTitleIndex(i => (i + 1) % TITLES.length);
        setVisible(true);
      }, 400);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageSection
      title="home"
      viewportHeight
      sx={{
        bgcolor: 'transparent',
        position: 'relative',
      }}
    >
      {!isLargeScreen && (<Stack
        id="socials"
        spacing={1.5}
        sx={{
          position: 'absolute',
          height: 'fit-content',
          minHeight: 20,
          // bgcolor: 'primary.main',
          left: 0,
          top: '35%',
        }}
      >
        <IconButton
          component={Link}
          href={socialLinks.github}
          target="_blank"
          aria-label="Visit Dayo's GitHub profile"
        >
          <AiFillGithub color="white" />
        </IconButton>
        <IconButton
          component={Link}
          href={socialLinks.twitter}
          target="_blank"
          aria-label="Visit Dayo's Twitter profile"
        >
          <AiOutlineTwitter color="white" />
        </IconButton>

        <IconButton
          component={Link}
          href={socialLinks.linkedin}
          target="_blank"
          aria-label="Visit Dayo's LinkedIn profile"
        >
          <AiFillLinkedin color="white" />
        </IconButton>

        <IconButton
          component={Link}
          href={socialLinks.mailTo}
          target="_blank"
          aria-label="Send an email to Dayo"
        >
          <AiFillMail color="white" />
        </IconButton>
      </Stack>)}

      {/* <PlainBackground /> */}
      {/* <BgGradient /> */}
      {/* <BgAnimated /> */}
      {/* <BgSplit /> */}
      {/* <BgMesh /> */}
      <BgPattern />
      {/* <ParticleBackground /> */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          // bgcolor: 'red'
        }}
      >
        <Stack spacing={0}>
          <Typography
            color="platinium"
            sx={{ fontSize: '1.6rem', fontWeight: 700 }}
          >
            Hi, I&apos;m
          </Typography>
          <Typography
            color="primary"
            sx={{ fontSize: { xs: '4rem', sm: '5.5rem', md: '7.5rem' }, fontWeight: 700 }}
          >
            Dayo
          </Typography>
          <Typography
            color="platinium"
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.4rem' },
              fontWeight: 700,
              transition: 'opacity 0.4s ease',
              opacity: visible ? 1 : 0,
            }}
          >
            {TITLES[titleIndex]}
          </Typography>

          <Stack sx={{ flexDirection: 'row', mt: 4 }}>
            <Button
              component={NextLink}
              href="#contact"
              variant="contained"
              size="large"
              endIcon={<BiMailSend color="#fff" />}
              sx={{ py: 2, px: 4, color: 'platinium.main', mr: 2 }}
            >
              Contact Me
            </Button>

            <Button
              component={NextLink}
              href="#about"
              variant="outlined"
              size="large"
              sx={{
                color: 'platinium.main',
                py: 2,
                px: 4,
              }}
            >
              About me
            </Button>
          </Stack>
        </Stack>


      </Box>
    </PageSection>
  )
}

export default Landing
