"use client"
import { Box } from '@mui/material';

/** Dark navy base with a repeating radial-dot grid in primary blue */
const BgPattern = () => {
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
        backgroundColor: '#0b0f1e',
        backgroundImage: 'radial-gradient(rgba(65, 105, 225, 0.22) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: [
            'radial-gradient(ellipse at 20% 60%, rgba(65, 105, 225, 0.18) 0px, transparent 55%)',
            'radial-gradient(ellipse at 80% 20%, rgba(90, 60, 210, 0.12) 0px, transparent 50%)',
          ].join(', '),
          pointerEvents: 'none',
        },
        /* Vignette — fades the dot grid toward the edges so text is readable */
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, #0b0f1e 90%)',
          pointerEvents: 'none',
        },
      }}
    />
  );
}

export default BgPattern;
