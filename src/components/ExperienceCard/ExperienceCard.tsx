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
      className="bg-[#fdfaf6] border border-[#e6dcd5] rounded-xl p-6 w-full cursor-pointer transition-all duration-300 hover:shadow-md"
      onClick={toggleExpand}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-[#574a45]">
            {experience.role}
          </h3>
          {!isExpanded && (
            <p className="text-sm text-gray-500 mt-1">
              {subtitle}
            </p>
          )}
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500 whitespace-nowrap">
            {experience.period}
          </p>
        </div>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
          <div className="relative w-14 h-14 bg-gray-100 rounded-lg flex-shrink-0">
            <Image
              src={experience.logoUrl}
              alt={`Logo da ${experience.company}`}
              layout="fill"
              objectFit="contain"
              className="p-1"
            />
          </div>
          <div className="flex-grow">
            <p className="text-base font-semibold text-[#3b352e]">
              {experience.company}
            </p>
            <p className="text-gray-600 text-sm mt-2">
              {experience.description}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span key={skill} className="bg-[#e6dcd5] text-[#6c5f5b] text-xs font-semibold px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}