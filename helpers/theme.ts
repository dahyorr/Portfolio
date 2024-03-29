import { createTheme } from '@mui/material/styles';
// import {grey} from '@mui/material/colors'
import { Josefin_Sans, La_Belle_Aurore } from 'next/font/google';


export const josefinSans = Josefin_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const laBelleAurore = La_Belle_Aurore({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

declare module '@mui/material/styles' {
    interface Palette {
        platinium: Palette['primary'];
        amaranth: Palette['primary'];
    }
    interface PaletteOptions {
        platinium: PaletteOptions['primary'];
        amaranth: PaletteOptions['primary'];
    }
    interface PaletteColor {
        darker?: string;
    }
}

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#4169e1',
            contrastText: "#ffffff"
        },
        secondary: {
            main: '#3c3c3c',
            contrastText: "#ffffff"
        },
        platinium: {
            main: '#E7E7E7',
        },
        amaranth: {
            main: '#db324d',
        },
        background: {
            default: '#F4F5FE',
            paper: '#FFFFFF',
        },
    },
    mixins: {
        toolbar: {
            minHeight: '70px',
        }
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
        MuiOutlinedInput: {
            styleOverrides: {
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
        fontFamily: josefinSans.style.fontFamily,
        h1: {
            fontWeight: 600,
            fontSize: '3rem',
            lineHeight: 1.5,
        },
        h2: {
            fontWeight: 600,
            fontSize: '2.25rem',
            lineHeight: 1.5,
        },
        h3: {
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: 1.5,
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.5,
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.125rem',
            lineHeight: 1.5,
        },
        h6: {
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body1: {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body2: {
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.75,
            letterSpacing: 0
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.75,
            letterSpacing: 0
        },
        // subtitle2lg: {
        //     fontWeight: 500,
        //     fontSize: '1rem',
        //     lineHeight: 1.75,
        //     letterSpacing: 0
        // },
        caption: {
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 1.6,
            letterSpacing: 0
        },
        overline: {
            fontWeight: 600,
            fontSize: '0.75rem',
            lineHeight: 2.46,
            letterSpacing: '1px',
            textTransform: 'uppercase'
        },
        button: {
            textTransform: "none"
        }
    }
});
