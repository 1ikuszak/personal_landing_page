'use client';

import { FC } from 'react';
import { Icons } from './Icons';

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: FC<ValueCardProps> = ({ title, description }) => {
  return (
    <>
      <div className="flex flex-1 text-white max-h-[180px] min-h-[180px]">
        <div className="bg-white border border-black rounded-l-lg w-7"></div>
        <div className="p-1 bg-black">
          <Icons.gem />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 p-2 bg-black lg:p-6">
          <p className="text-xl font-semibold text-center lg:text-2xl">
            {title}
          </p>
          <p className="text-lg text-center">{description}</p>
        </div>
        <div className="flex flex-col justify-between p-2 bg-black rounded-r-lg">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default ValueCard;
