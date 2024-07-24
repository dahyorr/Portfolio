type ImageSize = 'small' | 'medium' | 'fullscreen' | 'thumbnail' | 'default'

export const generateImageUrl = (imageId: string, size: ImageSize = 'default') => {
  const imageSize = getSizeTransforms(size)
  return `https://res.cloudinary.com/dfwjnahii/image/upload/${imageSize}/${imageId}`
}

const getSizeTransforms = (size: ImageSize) => {
  switch(size){
    case 'small':
      return 'ar_16:9,w_640'
    case 'medium':
      return 'ar_16:9,w_1000'
    case 'fullscreen':
      return 'ar_16:9,w_1920'
    case 'thumbnail':
      return 'ar_16:9,w_250'
    case 'default':
      return 'ar_16:9,w_720'
  }
}