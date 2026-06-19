"use client"
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Fade from '@mui/material/Fade'
import PageSection from '../PageSection'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { sendMessage } from 'api/sendMessage'
import { MessageRequestBody } from 'typings'
import { useState } from 'react'
import { FiSend, FiCheckCircle } from 'react-icons/fi'
import { Link } from '@mui/material'

const inputSx = {
    '& .MuiOutlinedInput-root': {
        borderRadius: 2,
        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
        },
        '&.Mui-focused': {
            boxShadow: (theme: { palette: { primary: { main: string } } }) =>
                `0 0 0 3px ${theme.palette.primary.main}22`,
        },
    },
}

const validationSchema = yup.object().shape({
    email: yup.string().email().required().label("Email"),
    name: yup.string().required().label("Name"),
    subject: yup.string().label("Subject"),
    message: yup.string().required().label("Message"),
})

const initialValues: MessageRequestBody = {
    email: '',
    name: '',
    subject: '',
    message: '',
}

const Contact: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const [succeeded, setSucceeded] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const onFormSubmit = (values: MessageRequestBody) => {
        setLoading(true)
        setError(null)
        sendMessage(values)
            .then(() => {
                setSucceeded(true)
                formik.resetForm()
            })
            .catch(err => {
                setError(err?.message ?? 'Something went wrong. Please try again.')
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const formik = useFormik<MessageRequestBody>({
        initialValues,
        validationSchema,
        onSubmit: onFormSubmit,
    })

    return (
        <PageSection title="contact" disablePy fitContent>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Paper
                    sx={{
                        width: '100%',
                        bgcolor: '#fff',
                        py: 10,
                        mb: 10,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                    elevation={6}
                >
                    <Typography variant="h3" color="primary" sx={{ mb: 2 }}>Get In Touch</Typography>
                    <Typography align="center" color="textPrimary" sx={{ mb: 4 }}>
                        The fastest way to reach me is email at{' '}
                        <Link href="mailto:hello@dayo.dev">hello@dayo.dev</Link>
                        , also on{' '}
                        <Link href="https://www.linkedin.com/in/dayo-adebanjo" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                        {' '}and{' '}
                        <Link href="https://github.com/dahyorr" target="_blank" rel="noopener noreferrer">GitHub</Link>
                        {' '}or use the form below:
                    </Typography>

                    <Container maxWidth="md">
                        {succeeded ? (
                            <Fade in>
                                <Stack
                                    spacing={2}
                                    sx={{
                                        alignItems: 'center',
                                        py: 6,
                                        px: 4,
                                        borderRadius: 3,
                                        border: '1px solid',
                                        borderColor: 'success.light',
                                        bgcolor: 'success.50',
                                    }}
                                >
                                    <Box sx={{ color: 'success.main', fontSize: 56, lineHeight: 1 }}>
                                        <FiCheckCircle />
                                    </Box>
                                    <Typography variant="h5" color="success.dark" sx={{ fontWeight: 600 }}>
                                        Message sent!
                                    </Typography>
                                    <Typography color="text.secondary" align="center">
                                        Thanks for reaching out — I&apos;ll get back to you as soon as possible.
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => setSucceeded(false)}
                                        sx={{ mt: 1 }}
                                    >
                                        Send another message
                                    </Button>
                                </Stack>
                            </Fade>
                        ) : (
                            <Box
                                component="form"
                                onSubmit={formik.handleSubmit}
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <Grid container spacing={2} sx={{ width: '100%' }}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            name="name"
                                            label="Name"
                                            type="text"
                                            variant="outlined"
                                            value={formik.values.name}
                                            error={Boolean(formik.errors.name)}
                                            helperText={formik.errors.name || ' '}
                                            fullWidth
                                            disabled={loading}
                                            onChange={formik.handleChange}
                                            sx={inputSx}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            name="email"
                                            label="Email"
                                            type="email"
                                            variant="outlined"
                                            value={formik.values.email}
                                            error={Boolean(formik.errors.email)}
                                            helperText={formik.errors.email || ' '}
                                            fullWidth
                                            disabled={loading}
                                            onChange={formik.handleChange}
                                            sx={inputSx}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            name="subject"
                                            label="Subject"
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            value={formik.values.subject}
                                            error={Boolean(formik.errors.subject)}
                                            helperText={formik.errors.subject || ' '}
                                            disabled={loading}
                                            onChange={formik.handleChange}
                                            sx={inputSx}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            multiline
                                            minRows={4}
                                            maxRows={6}
                                            name="message"
                                            label="Message"
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            value={formik.values.message}
                                            error={Boolean(formik.errors.message)}
                                            helperText={formik.errors.message || ' '}
                                            disabled={loading}
                                            onChange={formik.handleChange}
                                            sx={inputSx}
                                        />
                                    </Grid>
                                </Grid>

                                {error && (
                                    <Typography color="error" sx={{ mt: 1, mb: -1 }} align="center">
                                        {error}
                                    </Typography>
                                )}

                                <Button
                                    variant="contained"
                                    type="submit"
                                    size="large"
                                    sx={{
                                        mx: 'auto',
                                        mt: 4,
                                        py: 1.5,
                                        px: 5,
                                        borderRadius: 2,
                                        fontWeight: 600,
                                        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                                        '&:hover:not(:disabled)': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: 6,
                                        },
                                        '&:active': {
                                            transform: 'translateY(0)',
                                        },
                                    }}
                                    endIcon={!loading ? <FiSend /> : undefined}
                                    loading={loading}
                                    disabled={loading}
                                >
                                    {loading ? 'Sending…' : 'Send Message'}
                                </Button>
                            </Box>
                        )}
                    </Container>
                </Paper>
            </Box>
        </PageSection>
    )
}

export default Contact
