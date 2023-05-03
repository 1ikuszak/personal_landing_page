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
      <div className="flex flex-1 text-light max-h-[180px] min-h-[180px] bg-dark rounded-lg">
        <div className="p-1 lg:p-2">{icon}</div>
        <div className="flex flex-col items-start justify-center gap-2 px-2 py-1 bg-dark lg:p-6">
          <p className="text-xl font-semibold text-left lg:text-2xl">{title}</p>
          <p>{description}</p>
        </div>
        <div className="flex flex-col justify-between p-2 m-0 items-between">
          <div className="w-1 h-1 rounded-full bg-light"></div>
          <div className="w-[4px] lg:w-[6px] bg-light rounded-full h-1/2"></div>
          <div className="w-1 h-1 rounded-full bg-light"></div>
        </div>
      </div>
    </>
  );
};

export default ValueCard;
