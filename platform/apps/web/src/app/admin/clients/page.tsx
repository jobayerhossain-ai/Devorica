"use client";

import { motion } from "framer-motion";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  Globe, 
  ShieldCheck, 
  ArrowUpRight 
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const clients = [
  { 
    id: 1, 
    name: "Aero Logistics", 
    contact: "Alice Spencer", 
    email: "alice@aero.logistics", 
    projects: 5, 
    spend: "$84,200", 
    status: "Active",
    tier: "Enterprise",
    color: "text-blue-400"
  },
  { 
    id: 2, 
    name: "Nexus Corp", 
    contact: "Robert Kim", 
    email: "robert@nexus.co", 
    projects: 12, 
    spend: "$156,000", 
    status: "Active",
    tier: "Strategic",
    color: "text-purple-400"
  },
  { 
    id: 3, 
    name: "Orbital Systems", 
    contact: "Sarah Vance", 
    email: "sarah@orbital.io", 
    projects: 2, 
    spend: "$42,500", 
    status: "On Hold",
    tier: "SMB",
    color: "text-amber-400"
  },
  { 
    id: 4, 
    name: "Aurora Tech", 
    contact: "John Doe", 
    email: "john@aurora.tech", 
    projects: 8, 
    spend: "$112,000", 
    status: "Active",
    tier: "Strategic",
    color: "text-emerald-400"
  },
];

export default function ClientsPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Partner Ecosystem</h2>
            <p className="text-gray-500">Managing global client relationships and portfolio growth.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-2xl hover:bg-gray-200 transition-all shadow-lg shadow-white/5">
            <Plus className="w-5 h-5" />
            Add Partner
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search by company, contact, or email..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 transition-all">
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-6 py-4 text-sm font-semibold text-gray-400">Client / Company</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-400">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-400">Tier</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-400">Projects</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-400">Total Spend</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-400"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {clients.map((client, index) => (
                <motion.tr
                  key={client.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-white/[0.01] transition-all group cursor-pointer"
                >
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-white/5 flex items-center justify-center text-sm font-bold text-white group-hover:scale-110 transition-all duration-500">
                        {client.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover:text-purple-400 transition-all">{client.name}</h4>
                        <p className="text-xs text-gray-500 font-medium">{client.contact}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className={`flex items-center gap-2 text-xs font-semibold ${
                      client.status === 'Active' ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        client.status === 'Active' ? 'bg-emerald-400' : 'bg-amber-400'
                      }`} />
                      {client.status}
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-xs font-bold text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                      {client.tier}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="text-sm font-bold text-white">{client.projects}</div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="text-sm font-bold text-white">{client.spend}</div>
                  </td>
                  <td className="px-6 py-6">
                    <button className="p-2 hover:bg-white/5 rounded-xl transition-all">
                      <MoreVertical className="w-5 h-5 text-gray-500" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
