"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Experience } from '@/data/Experiences';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const subtitle = `${experience.company} — ${experience.sumary}`;

  return (
    <div 
      className="bg-background border border-border rounded-xl p-5 w-full cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
      onClick={toggleExpand}
    >
      <div className="flex justify-between items-start gap-4 mb-2">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-accent">
            {experience.role}
          </h3>
          {!isExpanded && (
            <p className="text-sm text-foreground/80 mt-1">
              {subtitle}
            </p>
          )}
        </div>
        <div className="text-right">
          <p className="text-xs bg-muted text-muted-foreground py-1 px-3 rounded-full whitespace-nowrap font-sans">
            {experience.period}
          </p>
        </div>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex items-start gap-4 pt-4 border-t border-border">
          <div className="relative w-14 h-14 bg-muted border border-border rounded-lg flex-shrink-0">
            <Image
              src={experience.logoUrl}
              alt={`Logo da ${experience.company}`}
              layout="fill"
              objectFit="contain"
              className="p-1"
            />
          </div>
          <div className="flex-grow">
            <p className="text-base font-semibold text-foreground font-sans">
              {experience.company}
            </p>
            <p className="text-foreground/80 text-sm mt-2 font-sans">
              {experience.description}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span key={skill} className="text-xs bg-muted text-muted-foreground py-1 px-3 rounded-md font-sans">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}