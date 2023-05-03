'use client';

import { FC } from 'react';

interface CardProps {
  image: React.ReactNode;
  title: string;
  description: string;
  bar1: string;
  bar2: string;
  color: string;
}

const Card: FC<CardProps> = ({
  title,
  image,
  bar1,
  bar2,
  color,
  description,
}) => {
  return (
    <div className="max-w-xs p-2 bg-light rounded-xl min-w-[320px] ">
      <div className="flex flex-col gap-2">
        <div
          className={`rounded-xl flex items-center justify-center p-6 border border-dark ${color}`}
        >
          {image}
        </div>
        <div className="flex flex-col gap-6 px-4 pt-4 pb-8 border rounded-md border-dark">
          <div>
            <p className="text-4xl font-semibold">{title}</p>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <div className="rounded-full bg-neutral-300">
                <div className="rounded-full w-[80%] bg-dark">
                  <p className="ml-4 text text-neutral-200">{bar1}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-full bg-neutral-300">
                <div className="rounded-full w-[90%] bg-dark">
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
