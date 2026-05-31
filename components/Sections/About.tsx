"use client"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import PageSection from '../PageSection'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import { MdCloudDownload } from 'react-icons/md'
import { alpha } from '@mui/material/styles'

type SkillCategory = {
  title: string;
  skills: string[];
  accent?: boolean;
};

const skillCategories: SkillCategory[] = [
  { title: "Languages", skills: ["TypeScript", "JavaScript", "Python", "Go"] },
  { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js", "Express", "Nest.js", "FastAPI", "Django", "GoFiber", "GraphQL"] },
  { title: "Databases", skills: ["PostgreSQL", "MongoDB", "Redis"] },
  { title: "Cloud & Infrastructure", skills: ["AWS", "GCP", "Vercel", "Supabase", "Firebase", "Docker", "Proxmox"] },
  {
    title: "Security", skills: [
      "OWASP Top 10",
      "Burp Suite",
      // "Threat Modelling",
      "Secure SDLC",
      "OAuth 2.0 / OIDC",
      "AWS IAM & KMS",
      // "SIEM (Wazuh)",
      "Vulnerability Assessment",
    ], accent: true
  },
];

const About: React.FC = () => {

  return (
    <PageSection
      title="about"
      sx={{ position: 'relative' }}
      disablePy
      disableContainer
      fitContent
    >
      <Box
        sx={{ width: '100%', bgcolor: 'primary.main', pt: '10rem', pb: '18rem' }}
      >
        <Container maxWidth='md'>
          <Stack sx={{ margin: 'auto', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
              variant="h2"
              color="platinium"
              align="center"
              sx={{ mb: 2 }}
            >
              Hi, I&apos;m Dayo
            </Typography>
            <Typography color="platinium" align='center' sx={{ mb: 2, fontSize: 18, maxWidth: '800px' }}>
              I&apos;m a Full-Stack Engineer based in Leeds, UK, with 5 years of production experience building web applications. I work primarily in TypeScript, Next.js, Node, Python, and Go. Comfortable across the stack, from API design and database modelling to implementation and deployment.            </Typography>
            <Typography color="platinium" align='center' sx={{ mb: 2, fontSize: 18, maxWidth: '800px' }}>
              I&apos;m currently pursuing an MSc in Cybersecurity at Leeds Beckett University, where I&apos;m focused on application security, cloud security, and secure software development. AWS Certified Developer. Open to AppSec, Security Engineering, and senior full-stack opportunities.
            </Typography>

            <Link href="/Adedayo_Adebanjo_Resume.pdf" download color="inherit" underline="none">
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
          top: '-10rem',
          position: 'relative',
        }}
      >
        <Paper sx={{ width: '100%', margin: 'auto', p: 4 }} elevation={6}>
          <Typography variant="h2" align="center" sx={{ mb: 1 }}>Skills &amp; Tools</Typography>
          <Typography color="text.secondary" align="center" sx={{ mb: 4 }}>
            What I work with day-to-day, and what I&apos;m learning next.
          </Typography>

          <Grid container spacing={3} columns={{ xs: 1, sm: 2, md: 3 }}>
            {skillCategories.map((category) => (
              <Grid size={1} key={category.title}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: category.accent ? 'primary.light' : 'divider',
                    bgcolor: category.accent
                      ? (theme) => alpha(theme.palette.primary.main, 0.06)
                      : 'transparent',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      borderColor: category.accent ? 'primary.main' : 'action.selected',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {category.title}
                    </Typography>
                    {category.accent && (
                      <Chip label="Learning" size="small" color="primary" variant="outlined" />
                    )}
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        variant="outlined"
                        color={category.accent ? 'primary' : 'default'}
                        sx={{ borderRadius: 1.5 }}
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

    </PageSection>
  )
}

export default About
