import React from 'react'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip';
import { BsCodeSlash } from 'react-icons/bs'
import { RiSlideshow3Fill } from 'react-icons/ri'
import { useDisclosure } from 'hooks'
import ShowcaseModal from './ShowcaseModal'
import { Project } from 'typings'
import { generateImageUrl } from 'helpers/cloudinary'

interface ProjectShowcaseProps {
  project: Project;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <ShowcaseModal open={isOpen} handleClose={onClose} images={project.images} description={project.description} />
      <Box
        sx={{
          bgcolor: 'rgba(0,0,0,0.7)',
          boxShadow: 6,
          transition: 'transform 1s cubic-bezier(0.2, 1, 0.3, 1)',
          aspectRatio: '16 / 9',
          borderRadius: 1.5,
          overflow: 'hidden',
          position: 'relative',
          '&:hover': {
            transform: 'scale(1.025)',
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            display: 'block',
            background: 'inherit',
            opacity: 0.9,
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transform: 'scale(2) translateX(-75%) translateY(-75%) rotate(-28deg)',
            transition: 'transform 1s cubic-bezier(0.2, 1, 0.3, 1)',
          },
          '&:hover:after': {
            transform: 'scale(2) translateX(0) translateY(0) rotate(-45deg)',
          },
          '&:hover .img-container': {
            transform: 'scale(1.2)',
          },
          '&:hover .showcase-content': {
            opacity: 1,
            transform: 'translateY(0)',
          },

        }}>
        <Box
          className="img-container"
          sx={{
            transform: 'translateZ(0)',
            display: 'block',
            height: '100%',
            width: '100%',
            transition: 'transform 750ms cubic-bezier(0.2, 1, 0.3, 1)',
            '&:before': {
              content: '""',
              display: 'block',
              paddingTop: '75%',
              overflow: 'hidden',
            },
            img: {
              position: 'relative',
              top: 0,
              left: 0,
              width: '100%',
              height: 'auto',
              lineHeight: 0,
            }
          }}>
          <Image
            fill
            quality={100}
            src={generateImageUrl(project.images[0], 'small')}
            alt={project.title}
            priority
          />
        </Box>
        <Stack className="showcase-content" sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          opacity: 0,
          textAlign: 'center',
          zIndex: 1,
          px: 2,
          color: '#fff',
          transform: 'translateY(-100%)',
          transition: 'opacity 500ms cubic-bezier(0.2, 1, 0.3, 1), transform 500ms cubic-bezier(0.2, 1, 0.3, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}>
          <Typography>{project.shortDescription}</Typography>
          <Stack spacing={2} alignItems="center" direction='row'>

            <Tooltip title="View Demo">
              <Link href={project.liveUrl} target="_blank" color="#fff">
                <IconButton aria-label="View Demo" color="inherit" size='large'>
                  <RiSlideshow3Fill fontSize="25" />
                </IconButton>
              </Link>
            </Tooltip>


            {project.githubRepo && (<Tooltip title="View Code">
              <Link href={project.githubRepo} target="_blank" color="#fff">
                <IconButton aria-label="View Code" color="inherit" size='large'>
                  <BsCodeSlash fontSize="25" />
                </IconButton>
              </Link>
            </Tooltip>)}

          </Stack>
          <Button variant="contained" color="secondary" size="small" onClick={onOpen}>View Details</Button>
        </Stack>
      </Box>
    </>
  )
}

export default ProjectShowcase