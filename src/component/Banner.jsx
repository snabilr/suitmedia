import React from 'react';
import { useRef, useState } from 'react';

const Banner = () => {
  const [bannerImage, setBannerImage] = useState();
  const [image, setImage] = useState('/sun.jpeg');

  const imageBannerRef = useRef();

  const handleUploadImage = (event) => {
    const imageFile = event.target.files[0];

    const imageUrl = URL.createObjectURL(imageFile);

    setImage(imageUrl);
  };

  return (
    <div
      id='banner'
      className='relative flex h-[500px] w-screen flex-col items-center justify-center overflow-hidden bg-red-400 text-black'
    >
      <a
        className='absolute inset-0 scale-50 cursor-pointer bg-cover bg-center'
        style={{
          backgroundImage: `url(${image})`,
          transform: 'translateY(0px)',
        }}
        onClick={() => imageBannerRef.current.click()}
      ></a>
      <input
        type='file'
        style={{ display: 'none' }}
        accept='image/jpg, image/png, image/jpeg'
        ref={imageBannerRef}
        onChange={handleUploadImage}
      />
      <div className='relative z-10 flex flex-col items-center justify-center p-16'>
        <h1 className='text-4xl'>Ideas</h1>
        <p className='text-lg'>Where all our great things begin</p>
      </div>
      <div
        className='absolute -bottom-20 left-0 right-0 h-[159px] bg-white'
        style={{ transform: 'skewY(-5deg)' }}
      ></div>
    </div>
  );
};

export default Banner;
