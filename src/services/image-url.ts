import placeholderImage from '../assets/no-image-placeholder-6f3882e0.webp'

const getCroppedImage = (uRL : string) => {
    if(!uRL) return placeholderImage;
    const target = 'media/';
    const index = uRL.indexOf(target) + target.length
    return uRL.slice(0,index)+ 'crop/600/400/' +uRL.slice(index)
}

export default getCroppedImage;


