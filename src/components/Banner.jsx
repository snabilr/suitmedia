'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Banner = () => {
  const [image, setImage] = useState('/sun.jpeg');
  const imageBannerRef = useRef();

  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

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
        className='absolute inset-0 cursor-pointer bg-cover bg-center'
        style={{
          backgroundImage: `url(${image})`,
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
      <motion.div
        className='relative z-10 flex flex-col items-center justify-center p-16'
        style={{ y }}
      >
        <h1 className='text-4xl'>Ideas</h1>
        <p className='text-lg'>Where all our great things begin</p>
      </motion.div>
      <div
        className='absolute -bottom-20 left-0 right-0 h-[159px] bg-white'
        style={{ transform: 'skewY(-5deg)' }}
      ></div>
    </div>
  );
};

export default Banner;
