import React, { useState } from 'react';
import { useAuth } from '../../lib/AuthContext';
import { Search, Filter, Download, User, Check, X, Undo, Eye } from 'lucide-react';

const INITIAL_APPLICANTS = [
  { id: 301, name: 'Anita Thapa', jobApplied: 'Senior Science Teacher', experience: '5 Years', match: '98%', status: 'New' },
  { id: 302, name: 'Ramesh Sharma', jobApplied: 'Senior Science Teacher', experience: '8 Years', match: '92%', status: 'Reviewed' },
  { id: 303, name: 'Sita Gurung', jobApplied: 'Primary English Teacher', experience: '2 Years', match: '75%', status: 'Shortlisted' },
];

export const Applicants = () => {
  const { role } = useAuth();
  const [applicants, setApplicants] = useState(INITIAL_APPLICANTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApplicant, setSelectedApplicant] = useState<typeof INITIAL_APPLICANTS[0] | null>(null);

  if (role !== 'school') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-500">Only schools can view applicants.</p>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'New': return 'bg-red-100 text-red-800 border-red-200';
      case 'Reviewed': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Shortlisted': return 'bg-green-100 text-green-800 border-green-200';
      case 'Rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const updateStatus = (id: number, newStatus: string) => {
    setApplicants(applicants.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  const filteredApplicants = applicants.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    app.jobApplied.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Applicants</h2>
          <p className="text-gray-500 mt-1">Review and manage candidates who applied to your jobs.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="relative w-full max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search applicants by name or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-shadow"
            />
          </div>
          <div className="text-sm text-gray-500 hidden sm:block">
            {filteredApplicants.length} Candidates
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-200 text-sm text-gray-500">
                <th className="px-6 py-4 font-medium">Candidate</th>
                <th className="px-6 py-4 font-medium">Applied For</th>
                <th className="px-6 py-4 font-medium">Experience</th>
                <th className="px-6 py-4 font-medium">AI Match</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredApplicants.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No applicants found.
                  </td>
                </tr>
              ) : (
                filteredApplicants.map((applicant) => (
                  <tr key={applicant.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0 font-medium text-gray-600">
                          {applicant.name.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-900">{applicant.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{applicant.jobApplied}</td>
                    <td className="px-6 py-4 text-gray-600">{applicant.experience}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-green-50 text-green-700 border border-green-200">
                        {applicant.match}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(applicant.status)}`}>
                        {applicant.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 text-gray-400">
                        <button 
                          onClick={() => setSelectedApplicant(applicant)}
                          className="p-1.5 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors border border-transparent hover:border-blue-200" 
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {applicant.status !== 'Shortlisted' && (
                          <button 
                            onClick={() => updateStatus(applicant.id, 'Shortlisted')}
                            className="p-1.5 hover:text-green-600 hover:bg-green-50 rounded transition-colors border border-transparent hover:border-green-200" 
                            title="Shortlist"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        )}
                        {applicant.status !== 'Rejected' && (
                          <button 
                            onClick={() => updateStatus(applicant.id, 'Rejected')}
                            className="p-1.5 hover:text-red-600 hover:bg-red-50 rounded transition-colors border border-transparent hover:border-red-200" 
                            title="Reject"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                        {(applicant.status === 'Shortlisted' || applicant.status === 'Rejected') && (
                          <button 
                            onClick={() => updateStatus(applicant.id, 'Reviewed')}
                            className="p-1.5 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors border border-transparent hover:border-gray-200" 
                            title="Reset Status"
                          >
                            <Undo className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedApplicant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">Applicant Details</h3>
              <button 
                onClick={() => setSelectedApplicant(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center shrink-0 font-medium text-gray-600 text-xl">
                  {selectedApplicant.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{selectedApplicant.name}</h4>
                  <p className="text-gray-500">{selectedApplicant.jobApplied}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Experience</p>
                  <p className="font-medium text-gray-900">{selectedApplicant.experience}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">AI Match Score</p>
                  <span className="inline-flex items-center px-2 py-1 rounded text-sm font-bold bg-green-50 text-green-700 border border-green-200">
                    {selectedApplicant.match}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Current Status</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(selectedApplicant.status)}`}>
                    {selectedApplicant.status}
                  </span>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                {selectedApplicant.status !== 'Shortlisted' && (
                  <button 
                    onClick={() => {
                      updateStatus(selectedApplicant.id, 'Shortlisted');
                      setSelectedApplicant(null);
                    }}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex justify-center items-center gap-2"
                  >
                    <Check className="w-4 h-4" /> Shortlist
                  </button>
                )}
                {selectedApplicant.status !== 'Rejected' && (
                  <button 
                    onClick={() => {
                      updateStatus(selectedApplicant.id, 'Rejected');
                      setSelectedApplicant(null);
                    }}
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex justify-center items-center gap-2"
                  >
                    <X className="w-4 h-4" /> Reject
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
