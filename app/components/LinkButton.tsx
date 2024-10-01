import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  destination: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ destination, children }) => {
  return (
    <div className="flex justify-center px-4">
      <Link
        href={destination}
        className="text-center w-40 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        {children}
      </Link>
    </div>
  );
};

export default LinkButton;
