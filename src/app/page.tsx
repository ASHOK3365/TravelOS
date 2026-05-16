import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DashboardPreview from '@/components/DashboardPreview';
import Destinations from '@/components/Destinations';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#F8FAFC]">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <Destinations />
      <CTASection />
      <Footer />
    </main>
  );
}
