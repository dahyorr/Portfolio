import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import Gallery from './Gallery';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import { IconButton } from '@mui/material';
import {AiOutlineClose} from 'react-icons/ai'

interface ShowcaseModalProps {
  handleClose: () => void;
  open: boolean;
  images: string[];
  description: JSX.Element;
}

const ShowcaseModal: React.FC<ShowcaseModalProps> = ({handleClose, open, images, description}) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('lg'));

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
            position: 'relative'
          }
        }}
        aria-labelledby="Project Preview"
        // aria-describedby=""
      >
        <IconButton 
          onClick={handleClose} 
          size="medium"
          sx={{
            position: 'absolute', 
            top: 4, 
            right: 4,
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.25)',
            zIndex: 1000,
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.35)',
            }
          }}>
          <AiOutlineClose/>
        </IconButton>

        <Stack height="95vh" direction={isMediumScreen ? 'column' :'row'}>
          
        <Box 
          height={isMediumScreen ? "60%" : "100%"} 
          width={isMediumScreen ? '100%' : "50%"}
          sx={{position: 'relative'}}
        >
          <Gallery images={images}/>
        </Box>

          <Box 
            height={isMediumScreen ? "40%" : "100%"} 
            width={isMediumScreen ? '100%' : "50%"}
            sx={{
              px: 4,
              py: 2,
              overflowY: 'auto',
            }}
          >
            {description}
          </Box>

        </Stack>
      </Dialog>
  )
}

export default ShowcaseModal