import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProgramsSection from '@/components/ProgramsSection';
import CoursesSection from '@/components/CoursesSection';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main>
      {/* Sticky Navigation — transparent hero header, solid on scroll */}
      <Navbar />

      {/* Hero Section — RAMPeX headlines + CTA */}
      <Hero />

      {/* Milestones / Stats Section */}
      <StatsSection />

      {/* About Us — Full verbatim content */}
      <AboutSection />

      {/* Clientele Benefits / Why Choose Us */}
      <BenefitsSection />

      {/* What We Do / Center of Excellence Programs */}
      <ProgramsSection />

      {/* All Courses Offered — paginated grid */}
      <CoursesSection />

      {/* Institutional Collaborators — infinite marquee */}
      <PartnersSection />

      {/* Footer — contact + links */}
      <Footer />
    </main>
  );
};

export default Index;
