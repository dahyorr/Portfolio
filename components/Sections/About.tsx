import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import PageSection from '../PageSection'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider';
import SvgIcon from '@mui/material/SvgIcon'
import List from '@mui/material/List'
import Link from '@mui/material/Link'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import CodeIcon from 'assets/web-code.svg'
import ToolsIcon from 'assets/computer-repair.svg'
import {MdCloudDownload} from 'react-icons/md'
import NextLink from 'next/link'

const About: React.FC = () => {

  const skillList = {
    languages: ["TypeScript", 'JavaScript', 'Python', 'SQL', 'Graphql'],
    frameworks: ["React", 'Next.js', 'Django', 'Express', 'Next.js', 'Severless'],
    cloudServices: ['AWS', 'Firebase', 'Railway', 'Heroku', 'Vercel'],
    others: ['Docker', 'Visual Studio Code', 'Postgres', 'Mongo Db', 'Redis'],
  }

  return (
    <PageSection 
      title="about" 
      sx={{position: 'relative'}}
      disablePy
      disableContainer
    >
      <Box 
        width="100%" 
        bgcolor='primary.main'
        pt="10rem"
        pb="18rem"
      >
        <Container maxWidth='md'>
          <Stack  margin="auto" justifyContent={'center'} alignItems="center">
            <Typography 
              variant="h2"
              color="white"
              align="center"
            >
              Hi im Dayo. Nice to meet you.
              </Typography>
            <Typography color="white" align='justify' mb={2}>
              i&apos;m A Full-Stack Developer from Lagos, Nigeria,
              ... fill in more content
            </Typography>
            <a href="/resume.pdf" download>
              <Button 
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  py: 1.5,
                  px: 4
                }}
                startIcon={<MdCloudDownload />}
              >Download My Resume</Button>
            </a>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth='lg'>
        <Paper sx={{
          width: "100%",
          margin: 'auto',
          position: 'relative',
          top: '-8rem',
          py: 4,
        }}>
          <Box display="flex" justifyContent={'space-between'} minHeight="16rem">
            <Stack width="50%" alignItems="center" py="1rem">
              <SvgIcon color="primary" component={CodeIcon} inheritViewBox sx={{ fontSize: 70 }}/>
              <Typography variant="h4" mb={2}>Languages And Skills</Typography>

              <Stack direction="row" spacing={8}>
                <Box>
                  <Typography color="primary" align='center' variant="h5">Languages</Typography>
                  <List>
                    {skillList.languages.map((skill) => (
                      <ListItemText 
                        key={skill}
                        primaryTypographyProps={{align: 'center'}}
                      >
                        {skill}
                      </ListItemText>
                    ))}
                  </List>
                </Box>
                
                <Box>
                  <Typography color="primary" variant="h5" align='center'>Frameworks</Typography>
                  {skillList.frameworks.map((skill) => (
                      <ListItemText 
                        key={skill}
                        primaryTypographyProps={{align: 'center'}}
                      >
                        {skill}
                      </ListItemText>
                    ))}
                </Box>
              </Stack>
            </Stack>
            
            <Divider orientation="vertical" flexItem />

            <Stack width="50%" alignItems="center" py="1rem">
              <SvgIcon color="primary" component={ToolsIcon} inheritViewBox sx={{ fontSize: 70 }}/>
              <Typography variant="h4" mb={2}>My Dev Tools</Typography>

              <Stack direction='row' spacing={8}>
              <Box>
                <Typography color="primary" variant="h5" align='center'>Cloud Services</Typography>
                <List>
                {skillList.cloudServices.map((skill) => (
                    <ListItemText 
                      key={skill}
                      primaryTypographyProps={{align: 'center'}}
                    >
                      {skill}
                    </ListItemText>
                  ))}
                </List>
              </Box>

              <Box>
                <Typography color="primary" variant="h5" align='center'>Others</Typography>
                <List>
                {skillList.others.map((skill) => (
                    <ListItemText 
                      key={skill}
                      primaryTypographyProps={{align: 'center'}}
                    >
                      {skill}
                    </ListItemText>
                  ))}
                </List>
              </Box>
              </Stack>

            </Stack>
          </Box>
        </Paper>  
      </Container>

    </PageSection>
  )
}

export default About
