import ContactCard from '@/components/ContactCard/ContactCard';
import ExperienceList from '@/components/ExperienceList/ExperienceList';
import HeroSection from '@/components/HeroSection/HeroSection';
import ProjectList from '@/components/ProjectList/ProjectList';
import SkillsCarousel from '@/components/SkillsCarousel/SkillsCarousel';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsCarousel />
      <ProjectList />
      <ExperienceList />
      <ContactCard />
    </>
  );
}
