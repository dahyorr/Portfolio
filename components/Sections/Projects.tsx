import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import PageSection from '../PageSection'
import ProjectShowcase from '../ProjectShowcase'

const Portfolio: React.FC = () => {
    return (
        <PageSection title="projects" containerWidth="xl" >
            <Box width="100%" height="100%" >
                <Typography variant="h3" align="center" mb={4}>Some Of My Recent Works</Typography>
                <Grid container spacing={4} wrap='wrap'>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectShowcase/>
                        <Typography variant="h5" align="center" my={1}>Project Title</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectShowcase/>
                        <Typography variant="h5" align="center" my={1}>Project Title</Typography>
                    </Grid>  
                    
                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectShowcase/>
                        <Typography variant="h5" align="center" my={1}>Project Title</Typography>
                    </Grid>  
                    
                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectShowcase/>
                        <Typography variant="h5" align="center" my={1}>Project Title</Typography>
                    </Grid>  
                    
                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectShowcase/>
                        <Typography variant="h5" align="center" my={1}>Project Title</Typography>
                    </Grid>  
                    
                    <Grid item xs={12} sm={6} md={4}>
                        <ProjectShowcase/>
                        <Typography variant="h5" align="center" my={1}>Project Title</Typography>
                    </Grid>                   
                </Grid>
                
                <Box sx={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: 'center',
                    mt: 4
                }}>
                    <Button  size="large" variant="contained">View More</Button>
                </Box>
            </Box>
        </PageSection>
    )
}

export default Portfolio
