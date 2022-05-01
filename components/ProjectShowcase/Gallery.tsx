import React from 'react'
import Box from '@mui/material/Box';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageGallery from 'react-image-gallery';
import { generateImageUrl } from '@/helpers/cloudinary';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({images}) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const imageItems = images.map(imageId => ({
    original: generateImageUrl(imageId, 'medium'),
    thumbnail: generateImageUrl(imageId, 'thumbnail'),
    fullscreen : generateImageUrl(imageId, 'fullscreen'),
  }))

  return (
    <Box 
      height="100%" 
      width='100%' 
      display="flex" 
      alignItems="center"
    >
      <ImageGallery 
        items={imageItems}
        showNav={!isMediumScreen}
        showPlayButton={false}
      />
    </Box>
  )
}

export default Gallery