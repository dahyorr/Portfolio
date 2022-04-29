import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const OfflinePage = () => {
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
        <Typography variant="h2">Offline</Typography>
        <Typography variant="h5">Whoops!</Typography>
        <Typography fontSize="18">Maybe someone pulled plug ?</Typography>
      </Paper>
    </Box>
  )
}

export default OfflinePage