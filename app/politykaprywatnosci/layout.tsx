import Container from '@/components/Container';
import Footer from '@/components/Fotter';
import '@/styles/globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function PrivacyLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen" id="hero">
      <main>{children}</main>
      <div className="w-full mt-[100px] bg-dark" id="footer">
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
}
