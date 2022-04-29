import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const Custom404 = () => {
  return (
    <Box sx={{
      height: 'calc(100vh - 200px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Paper 
        sx={{
          textAlign:'center',
          px: 10,
          py: 10,
        }}
        >
        <Typography variant="h2">404</Typography>
        <Typography variant="h5">Whoops!</Typography>
        <Typography fontSize="18">How did you get here ?</Typography>
      </Paper>
    </Box>
  )
}

export default Custom404