const getCroppedImage = (uRL : string) => {
    const target = 'media/';
    const index = uRL.indexOf(target) + target.length
    return uRL.slice(0,index)+ 'crop/600/400/' +uRL.slice(index)
}

export default getCroppedImage;


