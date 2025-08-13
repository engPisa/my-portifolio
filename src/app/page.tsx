import ContactCard from '@/components/ContactCard/ContactCard';
import ExperienceList from '@/components/ExperienceList/ExperienceList';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectList from '@/components/ProjectList/ProjectList';
import SkillsCarousel from '@/components/SkillsCarousel/SkillsCarousel';

export default function Home() {
  return (
    <div className="bg-[#fdfaf6] text-[#3b352e] min-h-screen font-serif">
      <div className="container mx-auto px-6 md:px-12 py-8">
        <Header/>
        <HeroSection/>
        <div className="py-16">
          <SkillsCarousel />
        </div>
        <div>
          <ProjectList />
        </div>
        <div className="py-16">
          <ExperienceList />
        </div>
        <div>
          <ContactCard />
        </div>
      </div>
    </div>
  );
}
