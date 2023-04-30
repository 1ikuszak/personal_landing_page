import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface PortfolioCardProps {
  link?: string;
  image: StaticImageData;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ image, link }) => {
  return (
    <>
      <div className="flex items-center justify-center p-2 border border-light rounded-xl">
        <div className="flex flex-col gap-3">
          <div className="overflow-hidden rounded-xl">
            {link ? (
              <a href={link}>
                <Image
                  src={image}
                  alt="project img"
                  className="w-full h-full transition duration-500 ease-in-out rounded-xl hover:scale-110 hover:opacity-90"
                />
              </a>
            ) : (
              <Image
                src={image}
                alt="project img"
                className="w-full h-full transition duration-500 ease-in-out rounded-xl hover:scale-110 hover:opacity-90"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
