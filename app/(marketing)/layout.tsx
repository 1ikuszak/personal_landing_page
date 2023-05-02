import Container from '@/components/Container';
import Footer from '@/components/Fotter';
import Navbar from '@/components/Navbar';
import { marketingConfig } from '@/config/marketing';
import '@/styles/globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen" id="hero">
      <Navbar items={marketingConfig.mainNav} />
      <main>{children}</main>
      <div className="w-full bg-dark mt-[200px] lg:mt-[240px]" id="footer">
        <Container>
          <Footer items={marketingConfig.mainNav} />
        </Container>
      </div>
    </div>
  );
}