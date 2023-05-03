import { Button } from './ui/Button';

const LastChanceCard = () => {
  return (
    <div className="flex justify-center p-4 border rounded-lg border-dark lg:p-12 itmes-center">
      <div className="hidden lg:flex w-[3px] my-2 bg-dark rounded-full"></div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-1 mx-10 text-center">
          <p className="text-3xl lg:text-6xl">Gotowy na własną stronę</p>
          <p>
            Zarezerwuj darmową rozmowę, i wznieś wizerunek twojej marki na
            wyższy poziom
          </p>
        </div>
        <Button>zbuduj stronę</Button>
      </div>
    </div>
  );
};

export default LastChanceCard;
