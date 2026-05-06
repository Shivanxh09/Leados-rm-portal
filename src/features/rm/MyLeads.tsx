import { MOCK_RM_DATA } from "../../mocks/rm.mock";
import { Search, Filter, Calendar, MessageSquare } from "lucide-react";

export const MyLeads = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-sans">
      
      {/* Search and Filter Bar - Requirement Section 10 */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-3 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search leads by name or phone..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <Filter size={14}/> Status
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <Calendar size={14}/> Date Range
          </button>
        </div>
      </div>

      {/* Leads Table - Requirement Section 10 */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="bg-slate-50 border-b border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              <tr>
                <th className="px-6 py-5">Lead Identity</th>
                <th className="px-6 py-5">Language</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Recommended Action</th>
                <th className="px-6 py-5 text-right font-black">AI Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_RM_DATA.myLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/50 transition-all cursor-pointer group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        lead.classification === 'hot' ? 'bg-red-500 animate-pulse' : 
                        lead.classification === 'warm' ? 'bg-orange-400' : 'bg-slate-300'
                      }`} />
                      <div>
                        <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{lead.name}</p>
                        <p className="text-xs text-slate-400 font-medium tracking-tight">ID: {lead.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-[11px] font-black text-slate-500 bg-slate-100 px-2 py-1 rounded-md uppercase tracking-tighter border border-slate-200/50">
                      {lead.preferredLanguage}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-sm ${
                      lead.classification === 'hot' ? 'bg-red-50 text-red-600 border-red-100' : 
                      lead.classification === 'warm' ? 'bg-orange-50 text-orange-600 border-orange-100' : 
                      'bg-slate-50 text-slate-400 border-slate-200'
                    }`}>
                      {lead.status.replace(/_/g, ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MessageSquare size={14} className="text-blue-400" />
                      <p className="text-xs font-semibold">
                        {lead.classification === 'hot' ? "Initiate RM Callback Immediate" : "Send WhatsApp Package"}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-black text-xl text-blue-600 tabular-nums">
                    {lead.latestScore}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination - Requirement Section 10 */}
        <div className="bg-slate-50/50 px-6 py-4 border-t border-slate-200 flex justify-between items-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing 3 of 50 Leads</p>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-black text-slate-400 uppercase disabled:opacity-50">Prev</button>
            <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-[10px] font-black uppercase shadow-lg shadow-blue-200">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
};