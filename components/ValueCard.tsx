'use client';

import { FC } from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ValueCard: FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <>
      <div className="flex flex-1 text-light max-h-[180px] min-h-[180px]">
        <div className="w-8 border rounded-l-lg bg-light border-dark"></div>
        <div className="p-2 bg-dark">{icon}</div>
        <div className="flex flex-col items-start justify-center gap-2 p-2 bg-dark lg:p-6">
          <p className="text-xl font-semibold text-center lg:text-2xl">
            {title}
          </p>
          <p className="text-lg">{description}</p>
        </div>
        <div className="flex flex-col justify-between p-2 rounded-r-lg bg-dark">
          <div className="w-3 h-3 rounded-full bg-light"></div>
          <div className="w-3 h-3 rounded-full bg-light"></div>
        </div>
      </div>
    </>
  );
};

export default ValueCard;
