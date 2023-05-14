import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import {ButtonBaseProps} from '@mui/material/ButtonBase';
import {styled} from '@mui/material/styles';
import {AiFillGithub, AiOutlineTwitter, AiFillMail} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import socialLinks from 'helpers/socials.json'
import { Link } from '@mui/material';

const StyledIconButton = styled(IconButton)<ButtonBaseProps>(({theme}) => ({
  border: '2px solid rgba(255, 255, 255, 0.3)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'white',
    color: theme.palette.primary.main,
  }
}))

const Footer = () => {
  return (
  <Box bgcolor="primary.main" py={6}>
    <Container maxWidth="md">
      <Stack spacing={2.5}>
        <Typography 
          fontFamily="La Belle Aurore" 
          align="center" 
          fontSize="65px"
          color="white"  
          lineHeight="2.5rem"
        >D</Typography>
        <Stack direction="row" alignItems='center' justifyContent={"center"} spacing={2}>
          <Link 
            component={StyledIconButton}
            href={socialLinks.github}
            aria-label="github"
            target="_blank"
            color="#fff"
          >
            <AiFillGithub />
          </Link>
          <Link 
            component={StyledIconButton}
            href={socialLinks.twitter}
            aria-label="twitter"
            target="_blank"
            color="#fff"
          >
            <AiOutlineTwitter />
          </Link>
          <Link 
            component={StyledIconButton}
            href={socialLinks.linkedin}
            aria-label="linkedin"
            target="_blank"
            color="#fff"
          >
            <FaLinkedinIn />
          </Link>
          <Link 
            component={StyledIconButton}
            href={socialLinks.mailTo}
            aria-label="mail"
            target="_blank"
            color="#fff"
          >
            <AiFillMail />
          </Link>
        </Stack>
        <Typography 
          color="#fff"
          align="center"
        >Dayo Adebanjo &copy; {new Date().getFullYear()}</Typography>
      </Stack>
    </Container>
  </Box>
  )
}

export default Footer