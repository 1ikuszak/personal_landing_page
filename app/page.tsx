import Card from '@/components/Card';
import Container from '@/components/Container';
import Form from '@/components/Form';
import Footer from '@/components/Fotter';
import { Icons } from '@/components/Icons';
import PortfolioCard from '@/components/PortfolioCard';
import ProcesCard from '@/components/ProcesCard';
import ValueCard from '@/components/ValueCard';
import { Button } from '@/components/ui/Button';
import { marketingConfig } from '@/config/marketing';
import hero from '@/public/hero.jpg';
import '@/styles/globals.css';
import ProcesBlock from '../components/ProcesBlock';

export default async function Home() {
  const icon_size = 30;
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
      <div className="mt-[120px] flex flex-col gap-[260px]">
        <Container>
          <section className="flex gap-[120px]">
            <div className="flex flex-col gap-7">
              <div>
                <p className="text-5xl font-semibold md:text-6xl lightspace-nowrap">
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
            <div className="items-center justify-center hidden lg:flex">
              {/* <Image
                  src={hero}
                  alt="hero"
                  className="object-cover w-full h-auto rounded-xl aspect-video"
                /> */}
              <Icons.logo size={320} />
            </div>
          </section>
        </Container>

        <section
          className="flex items-center justify-center h-auto py-12 bg-dark"
          id="firefly"
        >
          <Container>
            <div className="flex flex-col lg:flex-row py-12 flex gap-[80px] items-center">
              <div className="flex flex-col order-last gap-12 lg:order-first">
                <div className="text-light">
                  <p className="text-3xl font-bold">Satysfakcja klienta</p>
                  <p className="text-lg">
                    moim priorytetem jest zadowolenie klienta, <br /> dlatego
                    zawsze dążę do osiągnięcia <br /> jak najlepszych wyników.
                  </p>
                </div>
                <div className="text-light">
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
                  description="Zapewnię łatwą nawigację, szybkie ładowanie, aby zachęcić użytkowników ich do ponownego odwiedzenia"
                />
                <ValueCard
                  icon={<Icons.handshake size={icon_size} />}
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
          <section className="flex flex-col gap-0" id="portfolio">
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
          <section className="flex flex-col gap-12" id="process">
            <div className="text-center">
              <p className="mb-3 text-6xl font-semibold">Proces</p>
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
                  description="Tworzenie szkiców to sposób na zaplanowanie struktury i układu Twojej strony."
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

        {/* <Container>
          <section>
            <LastChanceCard />
          </section>
        </Container> */}

        <Container>
          <section
            className="flex flex-col items-center justify-center gap-10"
            id="contact"
          >
            <p className="text-6xl font-semibold">Zacznijmy współprace</p>
            <Form />
          </section>
        </Container>

        <section className="w-full bg-dark">
          <Container>
            <Footer items={marketingConfig.mainNav} />
          </Container>
        </section>
      </div>
    </>
  );
}
