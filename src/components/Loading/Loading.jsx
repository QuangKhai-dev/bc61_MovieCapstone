import React from 'react';
import loadingAnimation from './../../assets/animation/loadingAnimation.json';
import Lottie from 'lottie-react';
const Loading = () => {
  // 3
  // 5
  // 10
  return (
    <div
      className="h-screen w-full flex items-center justify-center fixed top-0 left-0 bg-gray-200 bg-opacity-30"
      style={{ zIndex: '99999' }}
    >
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default Loading;
