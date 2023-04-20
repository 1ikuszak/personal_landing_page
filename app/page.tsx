import Card from '@/components/Card';
import Container from '@/components/Container';
import PortfolioCard from '@/components/PortfolioCard';
import ValueCard from '@/components/ValueCard';
import { Button } from '@/components/ui/Button';
import hero from '@/public/hero.jpg';
import Image from 'next/image';
import ProcesBlock from '../components/ProcesBlock';

export default async function Home() {
  const PortfolioCards = [];

  for (let index = 0; index < 9; index++) {
    PortfolioCards.push(
      <PortfolioCard
        tag_1={`tag-1-${index}`}
        tag_2={`tag-2-${index}`}
        tag_3={`tag-3-${index}`}
        image={hero}
        key={index}
      />
    );
  }
  return (
    <>
      <div className="my-12 flex flex-col gap-[120px]">
        <Container>
          <section className="flex justify-center align-center">
            <div className="flex gap-[120px]">
              <div className="flex flex-col gap-7">
                <div>
                  <p className="text-5xl font-semibold md:text-6xl whitespace-nowrap">
                    Strony, które <br />
                    opowiadają historię <br /> i przynoszą
                    <span className="text-blue-500"> rezultaty</span>
                  </p>
                </div>
                <div>
                  <p className="text-neutral-400">
                    Projektuję strony internetowe, które nie tylko wyglądają{' '}
                    <br />
                    atrakcyjnie, ale przede wszystkim są skutecznymi narzędziami{' '}
                    <br />
                    biznesowymi, zwiększającymi sprzedaż i lojalność klientów.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="default">zarezerwuj rozmowę</Button>
                  <Button variant="subtle">dowiedz się więcej</Button>
                </div>
              </div>
              <div className="hidden lg:flex">
                <Image
                  src={hero}
                  alt="hero"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </section>
        </Container>

        <section className="flex items-center justify-center h-auto py-12 bg-black">
          <Container>
            <div className="flex flex-col lg:flex-row flex gap-[80px] items-center">
              <div className="flex flex-col order-last gap-10 lg:order-first">
                <div className="text-white">
                  <p className="text-3xl font-bold">Satysfakcja klienta</p>
                  <p className="text-lg">
                    moim priorytetem jest zadowolenie klienta, <br /> dlatego
                    zawsze dążę do osiągnięcia <br /> jak najlepszych wyników.
                  </p>
                </div>
                <div className="text-white">
                  <p className="text-3xl font-bold">Indywidualne podejście</p>
                  <p className="text-lg">
                    projektuję i piszę treści pod konkretne potrzeby <br /> i
                    cele Twojego biznesu.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="default">zarezerwuj rozmowę</Button>
                  <Button variant="subtle">jak mogę ci pomóc</Button>
                </div>
              </div>

              <div className="hidden w-[1px] bg-white rounded-full h-f lg:flex"></div>

              <div className="flex flex-col items-center justify-center order-first gap-10 lg:order-last lg:flex-row">
                <Card
                  title="Design"
                  description="skupiamy się nie tylko na wyglądzie strony, ale również na tym, jak działa oraz jak zdobyć zaufanie klientów"
                  pill="BALANS"
                  bar1="KREATYWNOŚĆ"
                  bar2="FUNKCJONALNOŚĆ"
                  image={hero}
                />
                <Card
                  title="CopyWriting"
                  description="Moje usługi Copywritingu pomagają przekształcić odwiedzających Twoją stronę w lojalnych klientów"
                  pill="BALANS"
                  bar1="PRZEKAZ"
                  bar2="SKUTECZNOŚĆ"
                  image={hero}
                />
              </div>
            </div>
          </Container>
        </section>

        <Container>
          <section className="flex flex-col items-center justify-center gap-10">
            <p className="text-5xl font-semibold">Jak mogę Ci pomóc</p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 lg:flex-row">
                <ValueCard
                  title="Większe zasięgi i widoczności online"
                  description="Zopytmalizuję SEO, aby Twoja strona internetowa była bardziej widoczna w wynikach wyszukiwania"
                />
                <ValueCard
                  title="Zwiększona sprzedaż"
                  description="Stworzę stronę, która zachęci klientów do podjęcia pożądanej akcji, takiej jak zakup lub zapisanie się na listę mailingową"
                />
              </div>
              <div className="flex flex-col gap-6 lg:flex-row">
                <ValueCard
                  title="Przyjemne doświadczenia użytkowników"
                  description="Zapewnię łatwą nawigację, szybkie ładowanie i pozytywne wrażenia użytkowników, aby zachęcić ich do ponownego odwiedzenia"
                />
                <ValueCard
                  title="Zbuduję zaufanie Twoich klientów"
                  description="Wykorzystam certyfikaty bezpieczeństwa i recenzje klientów, aby zbudować zaufanie "
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="default">zarezerwuj rozmowę</Button>
              <Button variant="subtle">portfolio</Button>
            </div>
          </section>
        </Container>

        <Container>
          <section className="flex flex-col gap-0">
            <div className="text-center">
              <p className="mb-3 text-6xl font-semibold">
                Projekty, które zbudowałem
              </p>
              <p>
                to tylko niektóre z projektów, zarezerwuj rozmowę <br /> i
                zajmij miejsce dla siebie
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {PortfolioCards}
            </div>
            <div className="flex justify-center gap-3 mt-10">
              <Button variant="default">zarezerwuj rozmowę</Button>
              <Button variant="subtle">przebieg procesu</Button>
            </div>
          </section>
        </Container>

        <Container>
          <section className="flex flex-col gap-6">
            <div className="text-center">
              <p className="mb-3 text-6xl font-semibold">Proces</p>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <ProcesBlock />
              </div>
              <div className="w-1/2"></div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}
