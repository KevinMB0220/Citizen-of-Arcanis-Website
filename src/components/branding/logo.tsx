import React from 'react';
import Image from 'next/image';
interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 150, height = 50 }) => {
  return (
    <Image
      src="/assets/Icones/BLANCO_PNG.png"  
      alt="Marketplace Logo"
      width={width}
      height={height}
      style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
    />
  );
};

export default Logo;
