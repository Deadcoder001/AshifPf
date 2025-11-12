import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function About({ scrollContainerRef }) {
  return (
    <section id="about" className="w-full min-h-screen bg-white text-black p-8 sm:p-16 md:p-24 flex items-center justify-center">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center font-pixel"></h2>
        <ScrollReveal
          scrollContainerRef={scrollContainerRef}
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          containerClassName="my-12"
          textClassName="font-sans"
        >
          I am a passionate Full-Stack Developer and Creative Coder with a knack for building beautiful, functional, and user-centric web applications. With a strong foundation in both frontend and backend technologies, I enjoy bringing ideas to life, from the initial UI/UX concept to the final deployment. My goal is to create seamless digital experiences that are both engaging and efficient.
        </ScrollReveal>
      </div>
    </section>
  );
}