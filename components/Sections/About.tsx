import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import PageSection from '../PageSection'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider';
import SvgIcon from '@mui/material/SvgIcon'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import CodeIcon from 'assets/web-code.svg'
import ToolsIcon from 'assets/computer-repair.svg'
import {MdCloudDownload} from 'react-icons/md'
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const About: React.FC = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const skillList = {
    languages: ["TypeScript", 'JavaScript', 'Python', 'SQL', 'Graphql'],
    frameworks: ["React", 'Next.js', 'Django', 'Express', 'Nest.js', 'Severless'],
    cloudServices: ['AWS', 'Firebase', 'Railway', 'Heroku', 'Vercel'],
    others: ['Docker', 'Visual Studio Code', 'Postgres', 'Mongo Db', 'Redis'],
  }

  return (
    <PageSection 
      title="about" 
      sx={{position: 'relative'}}
      disablePy
      disableContainer
      fitContent
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
              mb={2}
            >
              Hi i&apos;m Dayo. Nice to meet you.
              </Typography>
            <Typography color="white" align='justify' mb={2} fontSize={18}>
              I&apos;m A self taught Full-Stack Developer from Lagos, Nigeria, I&apos;m passionate about building web applications, solving problems and
              bringing ideas to life. I also love to learn about new technologies and enhancing my skills.<br/>
            </Typography>
            
            <Link href="/resume.pdf" download color="inherit" underline="none">
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
            </Link>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth='lg' 
      sx={{
        // minHeight:"calc(100% - 10rem)", 
        // overflow: 'hidden',
        top: '-10rem',
        position: 'relative',
        }}>
        <Paper sx={{
          width: "100%",
          margin: 'auto',
          py: 4,
        }}
        elevation={6}
        >
          <Box 
            display="flex" 
            justifyContent={'space-between'}  
            alignItems={isSmallScreen ? 'center' : "flex-start"} 
            minHeight="16rem" 
            flexDirection={isSmallScreen ? 'column' : 'row'}
          >
            <Stack width="50%" alignItems="center" py="1rem">
              <SvgIcon color="primary" component={CodeIcon} inheritViewBox sx={{ fontSize: 70 }}/>
              <Typography variant="h4" align="center" mb={2}>Languages And Skills</Typography>

              <Stack direction="row" spacing={8}>
                <Box>
                  <Typography color="primary" align='center' variant="h5">Languages</Typography>
                  <List>
                    {skillList.languages.map((skill) => (
                      <ListItem key={skill} disablePadding>
                        <ListItemText 
                          primaryTypographyProps={{align: 'center'}}
                        >
                          {skill}
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Box>
                
                <Box>
                  <Typography color="primary" variant="h5" align='center'>Frameworks</Typography>
                  <List>
                  {skillList.frameworks.map((skill) => (
                    <ListItem key={skill} disablePadding>
                      <ListItemText 
                        primaryTypographyProps={{align: 'center'}}
                      >
                        {skill}
                      </ListItemText>
                    </ListItem>
                    ))}
                  </List>
                </Box>
              </Stack>
            </Stack>
            
            <Divider orientation={isSmallScreen ? "horizontal" : "vertical"} flexItem />

            <Stack width="50%" alignItems="center" justifyContent="flex-start" py="1rem">
              <SvgIcon color="primary" component={ToolsIcon} inheritViewBox sx={{ fontSize: 70 }}/>
              <Typography variant="h4" mb={2} align="center">My Dev Tools</Typography>

              <Stack direction='row' spacing={8}>
              <Box>
                <Typography color="primary" variant="h5" align='center'>Services</Typography>
                <List>
                {skillList.cloudServices.map((skill) => (
                  <ListItem key={skill} disablePadding>
                    <ListItemText 
                      primaryTypographyProps={{align: 'center'}}
                    >
                      {skill}
                    </ListItemText>
                  </ListItem>
                  ))}
                </List>
              </Box>

              <Box>
                <Typography color="primary" variant="h5" align='center'>Others</Typography>
                <List>
                {skillList.others.map((skill) => (
                  <ListItem key={skill} disablePadding>
                    <ListItemText 
                      primaryTypographyProps={{align: 'center'}}
                    >
                      {skill}
                    </ListItemText>
                  </ListItem>
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
