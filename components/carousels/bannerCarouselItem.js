import Image from 'next/image';
import React from 'react';

const BannerCarouselItem = ({ bannerImg, alt }) => {
  return (
    <div className='rounded-md'>
      <Image
        className='h-[145px] md:h-[300px] lg:h-[349px] rounded-lg w-full object-cover'
        src={bannerImg}
        alt={alt}
        height={500}
        width={500}
      />
    </div>
  );
};

export default BannerCarouselItem;
