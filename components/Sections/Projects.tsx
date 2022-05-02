import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import PageSection from '../PageSection'
import ProjectShowcase from '../ProjectShowcase'
import {projectList} from 'projects/projectList'

const Portfolio: React.FC = () => {
    return (
        <PageSection title="projects" containerWidth="xl" fitContent disablePy>
            <Box width="100%" height="100%" pb={12} >
                <Typography variant="h3" align="center" mb={2}>My Recent Projects</Typography>
                <Typography variant="body1" fontSize={'1.1rem'} align="center" mb={2}>Here are some of my recent projects</Typography>
                <Grid container spacing={4} wrap='wrap'>
                    {projectList.map(project => (
                    <Grid item xs={12} sm={6} md={4} key={project.title}>
                        <ProjectShowcase project={project}/>
                        <Typography variant="h5" align="center" my={1}>{project.title}</Typography>
                    </Grid>
                    ))}
                </Grid>
                
                <Box sx={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: 'center',
                    mt: 4
                }}>
                    {/* <Button size="large" variant="contained">View More</Button> */}
                </Box>
            </Box>
        </PageSection>
    )
}

export default Portfolio
