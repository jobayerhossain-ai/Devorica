"use client";

import { motion } from "framer-motion";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertCircle
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const projects = [
  { 
    id: 1, 
    name: "Skyline Pro Mobile", 
    client: "Aero Logistics", 
    status: "In Progress", 
    progress: 65, 
    dueDate: "2024-05-15",
    priority: "High",
    color: "bg-blue-500"
  },
  { 
    id: 2, 
    name: "Nexus CRM Revamp", 
    client: "Nexus Corp", 
    status: "Review", 
    progress: 90, 
    dueDate: "2024-04-20",
    priority: "Medium",
    color: "bg-purple-500"
  },
  { 
    id: 3, 
    name: "Orbital ERP v2", 
    client: "Orbital Systems", 
    status: "Completed", 
    progress: 100, 
    dueDate: "2024-03-10",
    priority: "Low",
    color: "bg-emerald-500"
  },
  { 
    id: 4, 
    name: "Aurora AI Audit", 
    client: "Aurora Tech", 
    status: "Planning", 
    progress: 15, 
    dueDate: "2024-06-30",
    priority: "High",
    color: "bg-orange-500"
  },
];

export default function ProjectsPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Project Velocity</h2>
            <p className="text-gray-500">Managing active ecosystem development and delivery pipelines.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-2xl hover:bg-gray-200 transition-all shadow-lg shadow-white/5">
            <Plus className="w-5 h-5" />
            New Initiative
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search projects by name, client, or tag..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all">
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-all">{project.name}</h3>
                  <p className="text-sm text-gray-500 font-medium">{project.client}</p>
                </div>
                <button className="p-2 hover:bg-white/5 rounded-xl transition-all">
                  <MoreVertical className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    Due: {project.dueDate}
                  </div>
                  <span className="text-white font-bold">{project.progress}%</span>
                </div>
                
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                    className={`h-full ${project.color} shadow-[0_0_15px_rgba(168,85,247,0.3)]`}
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' ? 'text-emerald-400 bg-emerald-400/10' :
                    project.status === 'Review' ? 'text-purple-400 bg-purple-400/10' :
                    'text-blue-400 bg-blue-400/10'
                  }`}>
                    {project.status === 'Completed' ? <CheckCircle2 className="w-3 h-3" /> :
                     project.status === 'Review' ? <AlertCircle className="w-3 h-3" /> :
                     <Clock className="w-3 h-3" />}
                    {project.status}
                  </div>
                  
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-gray-800 flex items-center justify-center text-[10px] font-bold text-white">
                        U{i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
