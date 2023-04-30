'use client';
import { Icons } from './Icons';
import { Button } from './ui/Button';

const ProcesBlock = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-6">
        <Icons.send size={58} />
        <p>
          Podczas tworzenia Twojej strony będę w stałym kontakcie z Tobą, abyś
          zawsze wiedział, jak idą prace
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Icons.clock size={64} />
        <p>
          Postaram się jednak ograniczyć czas, który będziesz musiał poświęcić
          na kontakt ze mną, abyś mógł skupić się na swojej pracy
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Icons.target size={64} />
        <p>
          Moim celem jest, aby cały proces był dla Ciebie jak najmniej
          absorbujący, a efekt końcowy jak najbardziej satysfakcjonujący
        </p>
      </div>
      <div className="w-full text-right">
        <Button>zarezerwuj darmową rozmowę</Button>
      </div>
    </div>
  );
};

export default ProcesBlock;
