import {useCallback} from 'react'
import NextLink  from 'next/link'
import Box,{BoxProps} from '@mui/material/Box'
import PageSection from '../PageSection'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ISourceOptions } from 'tsparticles-engine';
import type { Engine } from "tsparticles-engine";
import particlesOptions from '../../helpers/particles.json'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
// import { styled } from '@mui/system';
import {BiMailSend} from 'react-icons/bi'
import {AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
// const SolidBox = styled(Box)<BoxProps>(({theme}) => ({
//   backgroundColor: theme.palette.primary.main
// }))

const Landing: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const particlesInit = useCallback(async (engine: Engine) => {
    loadFull(engine);
  }, []);

    return (
        <PageSection 
            title="home" 
            bgcolor="transparent"
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
              href="https://www.github.com/dahyorr" 
              target="_blank"
              aria-label="github"
            >
              <AiFillGithub color="white"/>
            </IconButton>
            <IconButton 
              component={Link} 
              href="https://twitter.com/dah_yor" 
              target="_blank"
              aria-label="twitter"
            >
              <AiOutlineTwitter color="white"/>
            </IconButton>

            <IconButton 
              component={Link} 
              href="https://www.linkedin.com/in/dayo-adebanjo-4a5381126/" 
              target="_blank"
              aria-label="linkedin"
            >
              <AiFillLinkedin color="white"/>
            </IconButton>

            <IconButton 
              component={Link} 
              href="mailto:hello@dayo.dev" 
              target="_blank"
              aria-label="mail"
            >
              <AiFillMail color="white"/>
            </IconButton>
          </Stack>)}

            <Particles 
                id="landing-background" 
                options={particlesOptions as ISourceOptions}
                init={particlesInit}
                width="100%"
                height="100%"
            />
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

                <Stack sx={{flexDirection: 'row',  mt: 4 }}>
                  <NextLink href="#contact" passHref>
                    <Button 
                      variant="contained" 
                      size="large"
                      endIcon={<BiMailSend color="#fff"/>}
                      sx={{py: 2, px: 4, color: 'white', mr: 2}}
                    >
                      Contact Me
                    </Button>
                  </NextLink>

                  <NextLink href="#about" passHref>
                    <Button 
                      variant="outlined" 
                      size="large"
                      sx={{
                        color: 'white'
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
