'use client';

import { FC } from 'react';

interface ProcesCardProps {
  title: string;
  description: string;
  pill: string;
}

const ProcesCard: FC<ProcesCardProps> = ({ title, description, pill }) => {
  return (
    <>
      <div className="flex flex-1">
        <div className="flex flex-col items-center justify-center p-2 bg-dark rounded-l-lg w-62">
          <div className="w-[6px] bg-light rounded-full h-1/2"></div>
        </div>
        <div className="flex border border-dark rounded-r-lg">
          <div className="flex flex-col items-start justify-center gap-2 p-4">
            <div>
              <p className="text-xl font-semibold lg:text-2xl">{title}</p>
              <span className="px-4 text-xs font-semibold border border-dark rounded-full">
                {pill}
              </span>
            </div>
            <p>{description}</p>
          </div>
          <div className="p-2 rounded-r-lg">
            <div className="w-3 h-3 bg-dark rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcesCard;
