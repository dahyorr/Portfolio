import { useCallback, useEffect, useState } from 'react'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import PageSection from '../PageSection'
import particlesOptions from '../../helpers/particles'
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
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"
import { Container, ISourceOptions } from '@tsparticles/engine';

const Landing: React.FC = () => {
  const [init, setInit] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <PageSection
      title="home"
      bgcolor="transparent"
      viewportHeight
      sx={{
        position: 'relative',
        '& #landing-background': {
          height: '100%',
          width: '100%',
          bgcolor: 'secondary.main',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          overflow: 'hidden'
        }
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
          aria-label="github"
        >
          <AiFillGithub color="white" />
        </IconButton>
        <IconButton
          component={Link}
          href={socialLinks.twitter}
          target="_blank"
          aria-label="twitter"
        >
          <AiOutlineTwitter color="white" />
        </IconButton>

        <IconButton
          component={Link}
          href={socialLinks.linkedin}
          target="_blank"
          aria-label="linkedin"
        >
          <AiFillLinkedin color="white" />
        </IconButton>

        <IconButton
          component={Link}
          href={socialLinks.mailTo}
          target="_blank"
          aria-label="mail"
        >
          <AiFillMail color="white" />
        </IconButton>
      </Stack>)}

      {init && (<Particles
        id="landing-background"
        options={particlesOptions as ISourceOptions}
      />)}
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
            color="white"
            fontSize="1.6rem"
            fontWeight={700}
          >
            Hi, I&apos;m
          </Typography>
          <Typography
            color="primary"
            // variant="h1"
            fontSize="7.5rem"
            fontWeight={700}
          >
            Dayo
          </Typography>
          <Typography
            color="white"
            fontSize="3.4rem"
            fontWeight={700}
          >
            Full-Stack Web Developer
          </Typography>

          <Stack sx={{ flexDirection: 'row', mt: 4 }}>
            <NextLink href="#contact" passHref>
              <Button
                variant="contained"
                size="large"
                endIcon={<BiMailSend color="#fff" />}
                sx={{ py: 2, px: 4, color: 'white', mr: 2 }}
              >
                Contact Me
              </Button>
            </NextLink>

            <NextLink href="#about" passHref>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: 'white',
                  py: 2,
                  px: 4,
                }}
              >
                About me
              </Button>
            </NextLink>
          </Stack>
        </Stack>


      </Box>
    </PageSection>
  )
}

export default Landing
