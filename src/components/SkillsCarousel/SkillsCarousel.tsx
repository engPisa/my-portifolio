"use client";

import React, { useEffect, useRef } from 'react';
import { skills } from '@/data/Skills'; 
import styles from '@/components/SkillsCarousel/SkillsCarousel.module.css'; 

export default function SkillsCarousel() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const slider = sliderRef.current;
    if (!track || !slider) return;

    const originalItems = Array.from(track.children);
    originalItems.forEach((item) => {
      track.appendChild(item.cloneNode(true));
    });

    let offset = 0;
    let animationFrameId: number; 
    const normalSpeed = 0.9;
    const slowSpeed = 0.25;
    let currentSpeed = normalSpeed;
    let targetSpeed = normalSpeed;

    const handleMouseEnter = () => { targetSpeed = slowSpeed; };
    const handleMouseLeave = () => { targetSpeed = normalSpeed; };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    function animate() {
      const trackWidth = track ? track.scrollWidth / 2 : 0; 
      currentSpeed += (targetSpeed - currentSpeed) * 0.1;
      offset += currentSpeed;

      if (offset >= trackWidth) {
        offset -= trackWidth;
      }
      if (track) {
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };

  }, []);

  return (
    <section className='container mx-auto px-6 md:px-12 py-4 sm:py-8 text-left'>
      <div ref={sliderRef} className={styles.slider}>
        <div ref={trackRef} className={`${styles.slideTrack} flex items-center gap-10`}>
          {skills.map((skill) => (
            <a 
              key={skill.name} 
              href={skill.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={skill.name}>
              <img 
                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                alt={skill.name}
                className='h-12'  
              />    
            </a>
          ))}
        </div>
      </div>
  </section>
  );
}