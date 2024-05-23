import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="text-4xl font-bold leading-[5rem] sm:leading-[7rem] capitalize">
      {children}
    </div>
  );
}

export default SectionHeading;
