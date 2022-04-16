import Box from '@mui/material/Box'
import PageSection from '../PageSection'

const About: React.FC = () => {
  return (
    <PageSection 
      title="about" 
      sx={{position: 'relative'}}
    >
      <Box 
        id="pre-about"
        sx={{
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        
      </Box>

      <Box width="100%" height="100%" >
        About
      </Box>
    </PageSection>
  )
}

export default About
