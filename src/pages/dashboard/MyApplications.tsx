import React, { useState } from 'react';
import { useAuth } from '../../lib/AuthContext';
import { Building, MapPin, Clock, FileText, XCircle, X } from 'lucide-react';

const INITIAL_APPLICATIONS = [
  { id: 1, jobTitle: 'Senior Mathematics Teacher', school: 'Everest Academy', location: 'Kathmandu', appliedDate: '2023-10-24', status: 'Under Review' },
  { id: 2, jobTitle: 'Physics Teacher', school: 'Kathmandu International School', location: 'Lalitpur', appliedDate: '2023-10-15', status: 'Interviewing' },
  { id: 3, jobTitle: 'Primary Science Teacher', school: 'Valley Public School', location: 'Bhaktapur', appliedDate: '2023-09-30', status: 'Rejected' },
];

export const MyApplications = () => {
  const { role } = useAuth();
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  const [selectedApp, setSelectedApp] = useState<typeof INITIAL_APPLICATIONS[0] | null>(null);

  if (role !== 'teacher') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-500">Only teachers can view their applications.</p>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Under Review': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Interviewing': return 'bg-red-100 text-red-800 border-red-200';
      case 'Rejected': return 'bg-red-100 text-red-800 border-red-200';
      case 'Accepted': return 'bg-green-100 text-green-800 border-green-200';
      case 'Withdrawn': return 'bg-gray-100 text-gray-600 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleWithdraw = (id: number) => {
    if (window.confirm('Are you sure you want to withdraw this application?')) {
      setApplications(applications.map(app => 
        app.id === id ? { ...app, status: 'Withdrawn' } : app
      ));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">My Applications</h2>
        <p className="text-gray-500 mt-1">Track the status of jobs you have applied for.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {applications.length === 0 ? (
          <div className="p-8 text-center text-gray-500">You haven't applied to any jobs yet.</div>
        ) : (
          <div className="divide-y divide-gray-200">
            {applications.map(app => (
              <div key={app.id} className={`p-6 transition-colors ${app.status === 'Withdrawn' ? 'opacity-60 bg-gray-50' : 'hover:bg-gray-50'}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200 shrink-0">
                      <Building className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{app.jobTitle}</h3>
                      <p className="text-gray-600 font-medium">{app.school}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {app.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Applied: {app.appliedDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusBadge(app.status)}`}>
                      {app.status}
                    </span>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setSelectedApp(app)}
                        className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        <span className="hidden sm:inline">View</span>
                      </button>
                      
                      {app.status !== 'Withdrawn' && app.status !== 'Rejected' && (
                        <button 
                          onClick={() => handleWithdraw(app.id)}
                          className="flex items-center gap-2 px-3 py-2 border border-red-200 text-red-600 bg-red-50 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                          title="Withdraw Application"
                        >
                          <XCircle className="w-4 h-4" />
                          <span className="hidden sm:inline">Withdraw</span>
                        </button>
                      )}
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">Application Details</h3>
              <button 
                onClick={() => setSelectedApp(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200 shrink-0">
                  <Building className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{selectedApp.jobTitle}</h4>
                  <p className="text-gray-600 font-medium">{selectedApp.school}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="font-medium text-gray-900 flex items-center gap-1"><MapPin className="w-4 h-4 text-gray-400" /> {selectedApp.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Applied Date</p>
                  <p className="font-medium text-gray-900 flex items-center gap-1"><Clock className="w-4 h-4 text-gray-400" /> {selectedApp.appliedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Status</p>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadge(selectedApp.status)}`}>
                    {selectedApp.status}
                  </span>
                </div>
              </div>

              {selectedApp.status !== 'Withdrawn' && selectedApp.status !== 'Rejected' && (
                <div className="pt-4 flex gap-3">
                  <button 
                    onClick={() => {
                      handleWithdraw(selectedApp.id);
                      setSelectedApp(null);
                    }}
                    className="flex-1 bg-red-50 text-red-600 border border-red-200 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors flex justify-center items-center gap-2"
                  >
                    <XCircle className="w-4 h-4" /> Withdraw Application
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
