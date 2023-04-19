import Card from '@/components/Card';
import Container from '@/components/Container';
import { Button } from '@/components/ui/Button';
import hero from '@/public/hero.jpg';
import Image from 'next/image';
export default async function Home() {
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
            <div className="flex flex-col lg:flex-row flex gap-[80px]">
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
      </div>
    </>
  );
}
