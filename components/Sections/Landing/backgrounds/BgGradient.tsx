"use client"
import { Box } from '@mui/material';

/** Multi-stop diagonal linear gradient, deep navy → midnight blue → indigo */
const BgGradient = () => {
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
        background: 'linear-gradient(135deg, #050810 0%, #0d1224 25%, #152044 55%, #1e1260 80%, #0a0e1a 100%)',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: [
            'radial-gradient(ellipse at 0% 100%, rgba(219, 50, 77, 0.08) 0px, transparent 45%)',
            'radial-gradient(ellipse at 100% 0%, rgba(65, 105, 225, 0.12) 0px, transparent 50%)',
          ].join(', '),
          pointerEvents: 'none',
        },
      }}
    />
  );
}

export default BgGradient;
