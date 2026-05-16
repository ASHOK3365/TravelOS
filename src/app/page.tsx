import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AIDemo from '@/components/AIDemo';
import Destinations from '@/components/Destinations';
import DashboardPreview from '@/components/DashboardPreview';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <AIDemo />
      <Destinations />
      <DashboardPreview />
      <Testimonials />
      <Footer />
    </main>
  );
}
