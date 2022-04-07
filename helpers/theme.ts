import { createTheme} from '@mui/material/styles';
// import {grey} from '@mui/material/colors'

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main:'#1B98E0'
        },
        secondary: {
            main: '#00BB27',
            contrastText: "#ffffff"
        },
        background: {
            default: '#ffffff',
            paper: '#FFFFFF',
        },
    },
    components: {
        MuiListItemButton: {
            defaultProps: {
                disableTouchRipple: true,
            },
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: "#3B8BEB"
                }
            }
        },
        MuiOutlinedInput:{
            styleOverrides:{
                root: {
                    background: 'white'
                    // '&.Mui-disabled': {
                    //     background: grey[100],
                    // }
                }
            }
        }
    },

    typography: {
        fontFamily: 'Roboto, Arial',
        h1: {
            fontWeight: 600,
            fontSize: '3rem',
            lineHeight: 1.5,
            fontFamily: 'Roboto, sans-serif',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2.25rem',
            lineHeight: 1.5,
            fontFamily: 'Roboto, sans-serif',
        },
        h3: {
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: 1.5,
            fontFamily: 'Roboto, sans-serif',
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.5,
            fontFamily: 'Roboto, sans-serif',
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.125rem',
            lineHeight: 1.5,
            fontFamily: 'Roboto, sans-serif',
        },
        h6: {
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: 1.5,
            fontFamily: 'Roboto, sans-serif',
        },
        body1: {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.5,
            fontFamily: 'Roboto, sans-serif',
        },
        body2: {
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: 1.6,
            fontFamily: 'Roboto, sans-serif',
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.75,
            fontFamily: 'Roboto, sans-serif',
            letterSpacing: 0
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.75,
            fontFamily: 'Roboto, sans-serif',
            letterSpacing: 0
        },
        // subtitle2lg: {
        //     fontWeight: 500,
        //     fontSize: '1rem',
        //     lineHeight: 1.75,
        //     fontFamily: 'Roboto, sans-serif',
        //     letterSpacing: 0
        // },
        caption: {
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 1.6,
            fontFamily: 'Roboto, sans-serif',
            letterSpacing: 0
        },
        overline: {
            fontWeight: 600,
            fontSize: '0.75rem',
            lineHeight: 2.46,
            fontFamily: 'Roboto, sans-serif',
            letterSpacing: '1px',
            textTransform: 'uppercase'
        },
        button: {
            textTransform: "none"
        }
    }
});
