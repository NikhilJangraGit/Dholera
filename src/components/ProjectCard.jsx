import React from 'react';
import { CheckCircle, Eye } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">
      <div>
        <div className="relative overflow-hidden h-48 bg-gray-200">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{project.title}</h3>
          <span className="text-xs font-bold text-green-700 block mb-4">{project.type}</span>
          <ul className="space-y-2.5">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-xs font-bold text-gray-600">
                <CheckCircle size={14} className="text-green-600 flex-shrink-0" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-6 pt-0">
        <button className="w-full bg-[#093A1A] hover:bg-green-800 text-white font-black text-xs uppercase tracking-widest py-3 rounded-xl transition-all flex items-center justify-center gap-2">
          <Eye size={14} /> View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
