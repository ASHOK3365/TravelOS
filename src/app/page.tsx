import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AIDemo from '@/components/AIDemo';
import DashboardPreview from '@/components/DashboardPreview';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="w-full relative min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <AIDemo />
      <DashboardPreview />
      <Testimonials />
      <Footer />
    </main>
  );
}
