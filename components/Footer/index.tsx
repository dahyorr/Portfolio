"use client"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { ButtonBaseProps } from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import { AiFillGithub, AiOutlineTwitter, AiFillMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import socialLinks from 'helpers/socials.json'
import { Link } from '@mui/material';
import { laBelleAurore } from '@/helpers/theme';
// import { forwardRef } from 'react';

const StyledIconButton = styled(IconButton)<ButtonBaseProps>(({ theme }) => ({
  border: '2px solid rgba(255, 255, 255, 0.3)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'white',
    color: theme.palette.primary.main,
  }
}))

const Footer = () => {
  return (
    <Box sx={{ py: 6, bgcolor: 'primary.main', color: 'platinium.main' }}>
      <Container maxWidth="md">
        <Stack spacing={2.5}>
          <Typography
            align="center"
            color="platinium"
            sx={{ fontFamily: laBelleAurore.style.fontFamily, fontSize: '65px', lineHeight: '2.5rem' }}
          >D</Typography>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <Link
              component={StyledIconButton as any}
              href={socialLinks.github}
              aria-label="github"
              target="_blank"
              color="platinium"
            >
              <AiFillGithub />
            </Link>
            <Link
              component={StyledIconButton as any}
              href={socialLinks.twitter}
              aria-label="twitter"
              target="_blank"
              color="platinium"
            >
              <AiOutlineTwitter />
            </Link>
            <Link
              component={StyledIconButton as any}
              href={socialLinks.linkedin}
              aria-label="linkedin"
              target="_blank"
              color="platinium"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              component={StyledIconButton as any}
              href={socialLinks.mailTo}
              aria-label="mail"
              target="_blank"
              color="platinium"
            >
              <AiFillMail />
            </Link>
          </Stack>
          <Typography
            color="platinium"
            align="center"
          >Dayo Adebanjo &copy; {new Date().getFullYear()}</Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer