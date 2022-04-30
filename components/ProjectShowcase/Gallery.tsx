import React from 'react'
import Box from '@mui/material/Box';
// import Image from 'next/image'
// import dynamic from 'next/dynamic';
import ImageGallery from 'react-image-gallery';
import { generateImageUrl } from '@/helpers/cloudinary';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({images}) => {
  const imageItems = images.map(imageId => ({
    original: generateImageUrl(imageId, 'medium'),
    thumbnail: generateImageUrl(imageId, 'thumbnail'),
    fullscreen : generateImageUrl(imageId, 'fullscreen'),
  }))

  return (
    <Box height="100%" width='100%' display="flex" alignItems="center">
      <ImageGallery 
        items={imageItems}
        showNav={true}
        showPlayButton={false}
      />
    </Box>
  )
}

export default Gallery