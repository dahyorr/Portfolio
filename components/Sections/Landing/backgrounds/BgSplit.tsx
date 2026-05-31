"use client"
import { Box } from '@mui/material';

/**
 * Asymmetric split — dark navy on the left, a bold primary-blue wedge cuts in
 * from the right. A diagonal clip-path divides the two tones.
 */
const BgSplit = () => {
  return (
    <Box
      id="landing-background"
      sx={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: 'hidden',
        backgroundColor: '#0d1224',
        /* Diagonal wedge in primary blue */
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(65, 105, 225, 0.0) 55%, rgba(65, 105, 225, 0.55) 55%, rgba(30, 18, 96, 0.8) 100%)',
          pointerEvents: 'none',
        },
        /* Soft glow along the diagonal edge */
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, transparent 50%, rgba(65, 105, 225, 0.12) 50%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        },
      }}
    />
  );
}

export default BgSplit;
