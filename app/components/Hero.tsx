import React from "react";

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className="p-5 text-center bg-gray-800">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default Hero;
