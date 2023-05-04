'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// components
import CalendlyButton from '@/components/calendlyButton';
import Card from '@/components/card';
import Container from '@/components/container';
import { Layout } from '@/components/dom/Layout';
import ContactUs from '@/components/form';
import { Icons } from '@/components/icons';
import PortfolioCard from '@/components/portfolioCard';
import ProcesBlock from '@/components/procesBlock';
import ProcesCard from '@/components/procesCard';
import { Button } from '@/components/ui/button';
import ValueCard from '@/components/valueCard';

//images
import crypto_hero from '@/public/crypto_hero.jpg';
import crypto_perks from '@/public/crypto_perks.jpg';
import fiver_browse from '@/public/fiver_browse.jpg';
import fiver_login from '@/public/fiver_login.png';
import outlanders_hero from '@/public/outlanders_hero.jpg';
import rock_paper_scissors from '@/public/rock_paper_scissors.jpg';

// 3d
const Blob = dynamic(
  () => import('@/components/canvas/Examples').then((mod) => mod.Blob),
  { ssr: false }
);
const View = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full gap-2 h-96">
        <Icons.loader2
          size={16}
          className="text-black lg:text-white animate-spin "
        />
        <p className="lg:text-white">processing...</p>
      </div>
    ),
  }
);
const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

export default function Home() {
  const icon_size = 30;

  // portfolio
  const PortfolioCards = [];
  const PortfolioLinks = ['https://1ikuszak.github.io/Rock-Paper-Scissors/'];
  const PortfolioImages = [
    rock_paper_scissors,
    outlanders_hero,
    fiver_browse,
    fiver_login,
    // fiver_register,
    crypto_hero,
    crypto_perks,
    // engines_main,
    // snow_fox,
  ];
  for (let index = 0; index < PortfolioImages.length; index++) {
    PortfolioCards.push(
      <PortfolioCard
        link={PortfolioLinks.length > index ? PortfolioLinks[index] : undefined}
        image={PortfolioImages[index]}
        key={index}
      />
    );
  }

  return (
    <div
      className="mt-[40px] lg:mt-[140px] flex flex-col gap-[200px] lg:gap-[240px]"
      id="root"
    >
      <Container>
        <div className="flex flex-col flex-wrap items-center justify-center w-full mx-auto md:flex-row">
          <div className="mix-blend-luminosity z-10 flex flex-col gap-6 items-start justify-center w-full text-center md:w-[50%] md:text-left">
            <p className="text-6xl font-semibold text-left md:text-6xl">
              Strony, które opowiadają historię i przynoszą
              <span className="text-blue-500"> rezultaty</span>
            </p>
            <p className="text-xl text-left break-words lg:text-base text-neutral-400">
              Projektuję strony internetowe, które nie tylko wyglądają
              atrakcyjnie, ale przede wszystkim są skutecznymi narzędziami
              biznesowymi, zwiększającymi sprzedaż i lojalność klientów.
            </p>
            <div className="flex flex-col w-full gap-2 lg:gap-3 sm:flex-row">
              <CalendlyButton>zarezerwuj darmową rozmowę</CalendlyButton>
              <Button variant="subtle" href="firefly">
                dowiedz się więcej
              </Button>
            </div>
          </div>

          <div className="absolute z-[-1] w-full text-center rounded-lg md:relative lg:bg-dark md:w-[50%]">
            <Layout>
              <View className="flex flex-col items-center justify-center w-full h-96">
                <Suspense fallback={null}>
                  <Blob scale={1} position={[0, 0, 0]} />
                  <Common />
                </Suspense>
              </View>
            </Layout>
          </div>
        </div>
      </Container>
      {/* jumbo */}

      <section
        className="flex items-center justify-center h-auto py-6 bg-dark"
        id="firefly"
        style={{
          background: '#1E1E1E',
          opacity: 1,
          backgroundImage:
            'linear-gradient(#3b82f6 2px, transparent 2px), linear-gradient(to right, #3b82f6 2px, #1E1E1E 2px)',
          backgroundSize: '32px 32px',
        }}
      >
        <Container>
          <div className="flex flex-col lg:flex-row justify-center py-12 flex gap-[60px] items-center">
            <div className="flex flex-col order-last gap-12 p-4 rounded-xl bg-dark lg:order-first">
              <div className="text-light">
                <p className="mb-1 text-3xl font-bold">Satysfakcja klienta</p>
                <p className="text-lg leading-tight ">
                  moim priorytetem jest zadowolenie klienta, <br /> dlatego
                  zawsze dążę do osiągnięcia <br /> jak najlepszych wyników.
                </p>
              </div>
              <div className="text-light">
                <p className="mb-1 text-3xl font-bold">
                  Indywidualne podejście
                </p>
                <p className="text-lg leading-tight ">
                  projektuję i piszę treści pod konkretne potrzeby <br /> i cele
                  Twojego biznesu.
                </p>
              </div>
              <div className="flex flex-col gap-2 lg:gap-3 lg:flex-row">
                <CalendlyButton>zarezerwuj termin</CalendlyButton>
                <Button variant="subtle" href="values">
                  jak mogę ci pomóc
                </Button>
              </div>
            </div>

            <div className="hidden w-[1px] bg-light rounded-full h-f lg:flex"></div>

            <div className="flex flex-col items-center justify-center order-first gap-12 lg:order-last lg:flex-row">
              <Card
                title="Design"
                description="skupiamy się nie tylko na wyglądzie strony, ale również na tym, jak działa oraz jak zdobyć zaufanie klientów"
                bar1="KREATYWNOŚĆ"
                bar2="FUNKCJONALNOŚĆ"
                color="bg-light"
                image={<Icons.paintbrush size={100} />}
              />
              <Card
                title="CopyWriting"
                description="Moje usługi Copywritingu pomagają przekształcić odwiedzających Twoją stronę w lojalnych klientów"
                bar1="PRZEKAZ"
                bar2="SKUTECZNOŚĆ"
                color="bg-light"
                image={<Icons.clipboard size={100} />}
              />
            </div>
          </div>
        </Container>
      </section>

      <Container id="values">
        <section className="flex flex-col items-center justify-center gap-12">
          <p className="text-5xl font-semibold">Jak mogę Ci pomóc</p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 lg:flex-row">
              <ValueCard
                title="Większe zasięgi i widoczności online"
                description="Zopytmalizuję SEO, aby Twoja strona internetowa była bardziej widoczna w wynikach wyszukiwania"
                icon={<Icons.sun size={icon_size} />}
              />
              <ValueCard
                title="Zwiększona sprzedaż"
                description="Stworzę stronę, która zachęci klientów do podjęcia pożądanej akcji, takiej jak zakup lub zapisanie się na listę mailingową"
                icon={<Icons.coins size={icon_size} />}
              />
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <ValueCard
                title="Lepsze doświadczenia użytkowników"
                icon={<Icons.user size={icon_size} />}
                description="Zapewnię łatwą nawigację, szybkie ładowanie, aby zachęcić użytkowników do ponownego odwiedzenia strony"
              />
              <ValueCard
                icon={<Icons.handshake size={icon_size} />}
                title="Zbuduję zaufanie Twoich klientów"
                description="Wykorzystam certyfikaty bezpieczeństwa i recenzje, aby zbudować zaufanie wśród klientów"
              />
            </div>
          </div>
          <Button variant="subtle" href="portfolio">
            portfolio
          </Button>
        </section>
      </Container>

      <Container>
        <section className="flex flex-col gap-0" id="portfolio">
          <div className="text-center">
            <p className="mb-3 text-5xl font-semibold">
              Projekty, które zbudowałem
            </p>
            <p>
              to tylko niektóre z projektów, zarezerwuj rozmowę <br /> i zajmij
              miejsce dla siebie
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {PortfolioCards}
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <Button variant="subtle" href="process">
              przebieg procesu
            </Button>
          </div>
        </section>
      </Container>

      <Container>
        <section className="flex flex-col gap-12" id="process">
          <div className="text-center">
            <p className="mb-3 text-5xl font-semibold">Proces</p>
          </div>
          <div className="lg:flex lg:gap-[164px]">
            <div className="mb-12 lg:mb-0 lg:w-1/2">
              <div className="sticky top-[16%]">
                <ProcesBlock />
              </div>
            </div>
            <div className="flex flex-col gap-12 lg:w-1/2">
              <ProcesCard
                title="Rozmowa wstępna"
                description="to nasze pierwsze spotkanie, w trakcie którego omawiamy Twoją wizję strony i upewniamy się, że wszyscy mamy jasno określone cele."
                pill="1-5"
              />
              <ProcesCard
                title="Tworzenie szkiców"
                description="Tworzenie szkiców to sposób na zaplanowanie najlepszej struktury i układu Twojej strony."
                pill="2-5"
              />
              <ProcesCard
                title="Projektowanie"
                description="Projektowanie to klucz do stworzenia funkcjonalnej i atrakcyjnej strony. Razem stworzymy styl odpowiadający Twojej marce i celom."
                pill="3-5"
              />
              <ProcesCard
                title="Tworzenie"
                description="Tworzenie to proces faktycznego budowania Twojej strony. To moment, w którym wszystkie plany i projekty są wdrażane i przekształcane w gotowy produkt."
                pill="4-5"
              />
              <ProcesCard
                title="Oddanie projektu"
                description="Oddanie projektu to moment, w którym otrzymujesz gotową stronę internetową i wszystkie potrzebne materiały. To początek prawdziwej magii"
                pill="5-5"
              />
            </div>
          </div>
        </section>
      </Container>

      <Container>
        <section
          className="flex flex-col items-center justify-center gap-10"
          id="contact"
        >
          <p className="text-5xl font-semibold text-center">
            Zacznijmy współprace
          </p>
          <ContactUs />
        </section>
      </Container>
    </div>
  );
}
