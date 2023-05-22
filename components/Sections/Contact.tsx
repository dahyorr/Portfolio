import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
// import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import LoadingButton from '@mui/lab/LoadingButton'
import Paper from '@mui/material/Paper'
import PageSection from '../PageSection'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { sendMessage } from 'api/sendMessage'
import { MessageRequestBody } from 'typings'
import { useState } from 'react'
import { useSnackbar } from 'notistack'
import { FiSend } from 'react-icons/fi'

const Contact: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const { enqueueSnackbar } = useSnackbar()

    const validationSchema = yup.object().shape({
        email: yup.string().email().required().label("Email"),
        name: yup.string().required().label("Name"),
        subject: yup.string().label("Subject"),
        message: yup.string().required().label("Message"),
    })

    const initialValues = {
        email: '',
        name: '',
        subject: '',
        message: ''
    }

    const onFormSubmit = (values: MessageRequestBody) => {
        setLoading(true)
        sendMessage(values)
            .then(() => {
                enqueueSnackbar("Message sent successfully", {
                    variant: 'success',
                })
                // formik.resetForm()
            })
            .catch(err => {
                console.log(err)
                enqueueSnackbar(err.message, {
                    variant: 'error'
                })
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
            <Box width="100%" height="100%" >
                <Paper
                    sx={{
                        width: '100%',
                        bgcolor: '#fff',
                        // bgcolor: '#f4f5fe',
                        color: '#fff',
                        py: 10,
                        mb: 10,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                    elevation={6}
                >
                    <Typography variant="h3" color="primary" mb={2}>Get In Touch</Typography>
                    <Container
                        maxWidth="md"
                        component="form"
                        onSubmit={formik.handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name='name'
                                    label='Name'
                                    type="text"
                                    variant="filled"
                                    value={formik.values.name}
                                    error={Boolean(formik.errors.name)}
                                    helperText={formik.errors.name || ' '}
                                    fullWidth
                                    onChange={formik.handleChange}
                                // color="white"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name='email'
                                    label='Email'
                                    type="email"
                                    variant="filled"
                                    error={Boolean(formik.errors.email)}
                                    helperText={formik.errors.email || ' '}
                                    fullWidth
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name='subject'
                                    label='Subject'
                                    type="text"
                                    variant="filled"
                                    fullWidth
                                    error={Boolean(formik.errors.subject)}
                                    helperText={formik.errors.subject || ' '}
                                    value={formik.values.subject}
                                    onChange={formik.handleChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    multiline
                                    minRows={3}
                                    maxRows={4}
                                    name='message'
                                    label='Message'
                                    type="text"
                                    variant="filled"
                                    fullWidth
                                    error={Boolean(formik.errors.message)}
                                    helperText={formik.errors.message || ' '}
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                        </Grid>

                        <LoadingButton
                            variant="outlined"
                            type="submit"
                            size="large"
                            sx={{
                                mx: 'auto',
                                mt: 4,

                            }}
                            endIcon={<FiSend />}
                            loading={loading}
                        >Send Message</LoadingButton>
                    </Container>
                </Paper>
            </Box>
        </PageSection>
    )
}

export default Contact
