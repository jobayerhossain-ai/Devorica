"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  Zap,
  Clock,
  ExternalLink
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const stats = [
  { 
    name: "Total Revenue", 
    value: "$124,592", 
    change: "+12.5%", 
    trend: "up", 
    icon: DollarSign,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  { 
    name: "Active Projects", 
    value: "42", 
    change: "+3.2%", 
    trend: "up", 
    icon: Briefcase,
    color: "from-blue-500/20 to-indigo-500/20"
  },
  { 
    name: "New Clients", 
    value: "18", 
    change: "-1.1%", 
    trend: "down", 
    icon: Users,
    color: "from-purple-500/20 to-pink-500/20"
  },
  { 
    name: "Avg. Velocity", 
    value: "94.2%", 
    change: "+4.8%", 
    trend: "up", 
    icon: Zap,
    color: "from-orange-500/20 to-amber-500/20"
  },
];

const recentProjects = [
  { id: 1, name: "Skyline Pro Mobile", client: "Aero Logistics", status: "In Progress", urgency: "High" },
  { id: 2, name: "Nexus CRM Revamp", client: "Nexus Corp", status: "Review", urgency: "Medium" },
  { id: 3, name: "Orbital ERP v2", client: "Orbital Systems", status: "Completed", urgency: "Low" },
];

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Ecosystem Overview</h2>
          <p className="text-gray-500">Real-time performance metrics and project velocity tracking.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-3xl bg-gradient-to-br ${stat.color} border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-black/40 rounded-2xl border border-white/10">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {stat.change}
                  {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-1">{stat.name}</p>
              <h3 className="text-2xl font-bold text-white tracking-tight">{stat.value}</h3>
              
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Active Performance</h3>
              <button className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-all">Details</button>
            </div>
            <div className="h-64 rounded-3xl bg-white/[0.02] border border-white/5 flex items-end p-8 gap-4">
                {[40, 70, 45, 90, 65, 80, 55, 95, 60, 30, 85, 75].map((height, i) => (
                    <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-purple-500/20 to-blue-500/40 rounded-t-lg group relative"
                    >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all">
                            {height}%
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Critical Updates</h3>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-white group-hover:text-purple-400 transition-all">{project.name}</h4>
                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-white transition-all" />
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-gray-500">{project.client}</span>
                    <span className={`px-2 py-1 rounded-full border ${
                        project.urgency === 'High' 
                        ? 'border-rose-500/20 text-rose-500 bg-rose-500/5' 
                        : 'border-white/10 text-gray-400'
                    }`}>
                        {project.urgency}
                    </span>
                  </div>
                </div>
              ))}
              <button className="w-full py-3 rounded-2xl border border-white/5 text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-all">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
