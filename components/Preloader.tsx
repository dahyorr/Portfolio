import Box from '@mui/material/Box'

const Preloader = () => {

  return (<Box
    sx={{
      width: '100vw',
      height: '100vh',
      bgcolor: 'primary.main',
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      left: 0,
      zIndex: 100000,
      overflowY: 'hidden',
      overflowX: 'hidden',
      '.lds-circle': {
        display: 'inline-block',
        transform: 'translateZ(1px)',
      },
      '.lds-circle > div': {
        display: 'inline-block',
        width: '64px',
        height: '64px',
        margin: '8px',
        borderRadius: '50%',
        background: '#fff',
        animation: 'lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite'
      },
      '@keyframes lds-circle': {
        '0%, 100%': {
          animationTimingFunction: 'cubic-bezier(0.5, 0, 1, 0.5)'
        },
        '0%': {
          transform: 'rotateY(0deg)'
        },
        '50%': {
          transform:' rotateY(1800deg)',
          animationTimingFunction: 'cubic-bezier(0, 0.5, 0.5, 1)'
        },
        '100%': {
          transform: 'rotateY(3600deg)'
        }
      }
    }}
  >
    <div className="lds-circle"><div></div></div>
  </Box>)
}

export default Preloader