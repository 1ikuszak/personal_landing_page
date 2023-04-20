'use client';

import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface PortfolioCardProps {
  tag_1: string | '';
  tag_2: string | '';
  tag_3: string | '';
  image: StaticImageData;
}

const PortfolioCard: FC<PortfolioCardProps> = ({
  tag_1,
  tag_2,
  tag_3,
  image,
}) => {
  return (
    <>
      <div className="flex items-center justify-center p-3 border border-black rounded-xl">
        <div className="flex flex-col gap-3">
          <Image
            src={image}
            alt="project img"
            className="transition duration-300 ease-in-out rounded-xl hover:scale-[1.03] hover:opacity-90"
          />
          <div className="flex justify-between gap-2">
            <div className="flex justify-center flex-1 border border-black rounded-full align-center">
              <p className="text-sm font-semibold">{tag_1}</p>
            </div>
            <div className="flex justify-center flex-1 border border-black rounded-full align-center">
              <p className="text-sm font-semibold">{tag_2}</p>
            </div>
            <div className="flex justify-center flex-1 border border-black rounded-full align-center">
              <p className="text-sm font-semibold">{tag_3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
