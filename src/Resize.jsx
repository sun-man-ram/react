import React, { useState, useEffect } from 'react';

const Resize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateScreenSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return (
    <div>
      <h2>Screen Width: {screenSize.width}px</h2>
      <h2>Screen Height: {screenSize.height}px</h2>
    </div>
  );
};

export default Resize;
