import React from 'react'
import Box from '@mui/material/Box';
import Image from 'next/image'
import dynamic from 'next/dynamic';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


const Gallery = () => {
  return (
    <Box height="100%" width='100%' display="flex" alignItems="center">
      <ImageGallery 
        items={images}
        showNav={true}
        showPlayButton={false}
      />
    </Box>
  )
}

export default Gallery