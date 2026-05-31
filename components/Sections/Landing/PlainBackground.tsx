"use client"
import { Box } from '@mui/material';

type Props = {}

const PlainBackground = (props: Props) => {
  return (
    <Box
      id="landing-background"
      sx={{
        height: '100%',
        width: '100%',
        bgcolor: 'secondary.main',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: 'hidden'
      }}
    />
  );
}

export default PlainBackground