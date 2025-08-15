import { experiences } from '@/data/Experiences';
import ExperienceCard from '@/components/ExperienceCard/ExperienceCard';

export default function ExperienceList() {
  return (
    <section className="container mx-auto px-6 md:px-12 py-4 sm:py-8">
      <h2 className="text-3xl font-serif text-accent text-left mb-12">
        Minhas Experiências
      </h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} experience={exp} />
        ))}
      </div>
    </section>
  );
}