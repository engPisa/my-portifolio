import { experiences } from '@/data/Experiences';
import ExperienceCard from '@/components/ExperienceCard/ExperienceCard';

export default function ExperienceList() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-left mb-12">
        Minhas Experiências
      </h2>
      <div className="flex flex-col gap-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} experience={exp} />
        ))}
      </div>
    </section>
  );
}