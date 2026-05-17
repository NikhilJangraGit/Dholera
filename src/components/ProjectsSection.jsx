import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projectsData = [
    {
      title: 'DHOLERA PRIME PLOTS',
      type: 'Residential Plots',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Near Metro Station', '24x7 Security', 'Club House', 'Park Facing']
    },
    {
      title: 'DHOLERA PREMIUM PLOTS',
      type: 'Residential Plots',
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Main Road Access', 'Commercial Hub Nearby', 'Sports Arena', 'Smart Grid']
    },
    {
      title: 'DHOLERA GREEN PLOTS',
      type: 'Residential Plots',
      img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Eco-friendly Zone', 'Solar Powered', 'Lush Green Parks', 'Lake View']
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-green-700 uppercase tracking-widest">— Our Projects —</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase mt-2">Explore Opportunities</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
