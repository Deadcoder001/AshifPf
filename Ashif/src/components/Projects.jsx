import React from 'react';

// --- Data for the projects ---
const projectData = [
    {
        title: 'Project One',
        description: 'A modern e-commerce platform built with React and Node.js.',
        imageUrl: 'https://via.placeholder.com/400x400/171717/FFFFFF?text=Project+One',
        liveUrl: '#',
        repoUrl: '#',
        tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
        title: 'Project Two',
        description: 'A data visualization dashboard created with Next.js and D3.js.',
        imageUrl: 'https://via.placeholder.com/400x400/171717/FFFFFF?text=Project+Two',
        liveUrl: '#',
        repoUrl: '#',
        tags: ['Next.js', 'D3.js', 'Tailwind CSS'],
    },
    {
        title: 'Project Three',
        description: 'A collaborative task management application using TypeScript.',
        imageUrl: 'https://via.placeholder.com/400x400/171717/FFFFFF?text=Project+Three',
        liveUrl: '#',
        repoUrl: '#',
        tags: ['TypeScript', 'Firebase', 'Figma'],
    },
    {
        title: 'Project Four',
        description: 'A portfolio website built with Next.js and Tailwind CSS.',
        imageUrl: 'https://via.placeholder.com/400x400/171717/FFFFFF?text=Project+Four',
        liveUrl: '#',
        repoUrl: '#',
        tags: ['Next.js', 'Tailwind CSS'],
    },
    {
        title: 'Project Five',
        description: 'A real-time chat app using Node.js and Socket.io.',
        imageUrl: 'https://via.placeholder.com/400x400/171717/FFFFFF?text=Project+Five',
        liveUrl: '#',
        repoUrl: '#',
        tags: ['Node.js', 'Socket.io'],
    },
    {
        title: 'Project Six',
        description: 'A blog platform powered by React and Express.',
        imageUrl: 'https://via.placeholder.com/400x400/171717/FFFFFF?text=Project+Six',
        liveUrl: '#',
        repoUrl: '#',
        tags: ['React', 'Express'],
    },
];

// --- Single Project Card Component ---
const ProjectCard = ({ project }) => (
    <div className="shadow-lg bg-white rounded-lg overflow-hidden w-full h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
        <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-1/2 object-cover"
        />
        <div className="p-4 flex-grow flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
                {project.title}
            </h3>
            <p className="text-gray-600 text-xs mb-2 flex-grow">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-gray-200 text-gray-800 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex items-center justify-start space-x-3 mt-auto pt-1">
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold text-xs transition-colors duration-300"
                >
                    Live Demo
                </a>
                <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 font-semibold text-xs transition-colors duration-300"
                >
                    View Code
                </a>
            </div>
        </div>
    </div>
);

// --- Main Projects Section Component ---
export default function Projects() {
    return (
        <section id="projects" className="w-full bg-gray-50 text-black py-20">
            <div className="px-2">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
                        My Projects
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
                    {projectData.map((project, index) => (
                        <div key={index} className="aspect-square">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}