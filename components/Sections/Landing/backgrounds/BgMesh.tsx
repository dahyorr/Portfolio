"use client"
import { Box } from '@mui/material';

/** Layered radial-gradient mesh + SVG fractal noise grain overlay */
const BgMesh = () => {
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
        backgroundImage: [
          'radial-gradient(ellipse at 15% 50%, rgba(65, 105, 225, 0.45) 0px, transparent 55%)',
          'radial-gradient(ellipse at 75% 15%, rgba(65, 105, 225, 0.3) 0px, transparent 50%)',
          'radial-gradient(ellipse at 85% 65%, rgba(90, 60, 210, 0.25) 0px, transparent 50%)',
          'radial-gradient(ellipse at 40% 85%, rgba(65, 105, 225, 0.2) 0px, transparent 45%)',
          'radial-gradient(ellipse at 5% 10%, rgba(219, 50, 77, 0.12) 0px, transparent 40%)',
        ].join(', '),
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.045,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        },
      }}
    />
  );
}

export default BgMesh;
