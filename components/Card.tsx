'use client';

import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface CardProps {
  image: StaticImageData;
  title: string;
  pill?: string;
  description: string;
  bar1: string;
  bar2: string;
}

const Card: FC<CardProps> = ({
  title,
  image,
  pill,
  bar1,
  bar2,
  description,
}) => {
  return (
    <div className="max-w-xs p-2 bg-white rounded-xl min-w-[320px] ">
      <div className="flex flex-col gap-2">
        <Image
          className="object-cover w-full rounded-md aspect-video"
          src={image}
          alt={`${image}`}
        />
        <div className="flex flex-col gap-6 px-4 pt-4 pb-8 border border-black rounded-md">
          <div>
            <p className="text-4xl font-semibold">{title}</p>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <div className="rounded-full bg-neutral-300">
                <div className="rounded-full w-[80%] bg-black">
                  <p className="ml-4 text text-neutral-200">{bar1}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-full bg-neutral-300">
                <div className="rounded-full w-[90%] bg-black">
                  <p className="ml-4 text text-neutral-200">{bar2}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;