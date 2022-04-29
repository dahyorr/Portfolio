import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import Test from 'projects/testProject/test.mdx'
import Gallery from './Gallery';

interface ShowcaseModalProps {
  handleClose: () => void;
  open: boolean;
}

const ShowcaseModal: React.FC<ShowcaseModalProps> = ({handleClose, open}) => {
  return (
    <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="xl"
        sx={{
          '& .MuiPaper-root': {
            bgcolor: 'secondary.main',
            color: 'white',
          }
        }}
        aria-labelledby="Project Preview"
        // aria-describedby=""
      >
        <Stack height="87.5vh" direction={'row'}>
          
        <Box height="100%" width="50%">
          <Gallery/>
        </Box>

          <Box height="100%" width="50%">
            <Test/>
          </Box>

        </Stack>
      </Dialog>
  )
}

export default ShowcaseModal