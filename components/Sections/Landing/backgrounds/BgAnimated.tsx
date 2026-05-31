"use client"
import { Box } from '@mui/material';

/** Slow-shifting animated gradient — colours drift across the background on a 14s loop */
const BgAnimated = () => {
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
        background: 'linear-gradient(270deg, #050810, #0d1224, #1e1260, #3554b0, #1a2040, #050810)',
        backgroundSize: '500% 500%',
        animation: 'gradientDrift 14s ease infinite',
        '@keyframes gradientDrift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.035,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        },
      }}
    />
  );
}

export default BgAnimated;
