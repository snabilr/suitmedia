import React from 'react';

const Banner = () => {
  return (
    <div className='relative flex h-[500px] w-screen flex-col items-center justify-center overflow-hidden bg-red-400 text-black'>
      <div
        className='absolute inset-0 scale-50 bg-cover bg-center'
        style={{
          backgroundImage: "url('/sun.jpeg')", // Adjust the path if your image is in a subfolder within public
          transform: 'translateY(0px)',
        }}
      ></div>
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
