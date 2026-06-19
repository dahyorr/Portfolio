import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import PageSection from '../PageSection'
import ProjectShowcase from '../ProjectShowcase'
import { projectList } from 'projects/projectList'

const Portfolio: React.FC = () => {
    return (
        <PageSection title="projects" containerWidth="xl" fitContent disablePy>
            <Box sx={{
                width: '100%',
                height: '100%',
                pb: 12
            }}>
                <Typography variant="h3" sx={{
                    textAlign: "center",
                    mb: 2
                }}>My Recent Projects</Typography>
                <Typography variant="body1" align="center" sx={{ fontSize: '1.1rem', mb: 6 }}>Here are some of my recent projects</Typography>
                <Grid container spacing={4} wrap='wrap'>
                    {projectList.map(project => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.title}>
                            <ProjectShowcase project={project} />
                            <Stack sx={{ mt: 1.5, px: 0.5 }} spacing={1}>
                                <Typography variant="h4" sx={{ textAlign: "center" }}>
                                    {project.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    align="center"
                                    sx={{ lineHeight: 1.5 }}
                                >
                                    {project.shortDescription}
                                </Typography>
                                {project.techStack && project.techStack.length > 0 && (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, justifyContent: 'center', pt: 0.5 }}>
                                        {project.techStack.map(tag => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                size="small"
                                                variant="outlined"
                                                color="primary"
                                                sx={{ borderRadius: 1.5, fontSize: '0.7rem' }}
                                            />
                                        ))}
                                    </Box>
                                )}
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </PageSection>
    )
}

export default Portfolio
