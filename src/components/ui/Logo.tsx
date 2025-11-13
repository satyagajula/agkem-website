import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", width = 40, height = 40 }) => {
  return (
    <Image
      src="/images/Agkem_logoNoBG.png"
      alt="AG KEM Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Logo;
