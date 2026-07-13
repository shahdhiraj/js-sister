import React, { useState } from 'react';
import { useAuth } from '../../lib/AuthContext';
import { Plus, Users, Edit2, MoreVertical, Eye, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const INITIAL_POSTINGS = [
  { id: 201, title: 'Senior Science Teacher', status: 'Active', applicants: 12, postedDate: '2023-10-20', expires: '2023-11-20' },
  { id: 202, title: 'Primary English Teacher', status: 'Closed', applicants: 45, postedDate: '2023-09-01', expires: '2023-10-01' },
];

export const MyJobPostings = () => {
  const { role } = useAuth();
  const [postings, setPostings] = useState(INITIAL_POSTINGS);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');

  if (role !== 'school') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-500">Only schools can manage job postings.</p>
      </div>
    );
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      setPostings(postings.filter(job => job.id !== id));
    }
  };

  const toggleStatus = (id: number, currentStatus: string) => {
    setPostings(postings.map(job => 
      job.id === id 
        ? { ...job, status: currentStatus === 'Active' ? 'Closed' : 'Active' } 
        : job
    ));
  };

  const handleEditStart = (job: any) => {
    setEditingId(job.id);
    setEditTitle(job.title);
  };

  const handleEditSave = (id: number) => {
    setPostings(postings.map(job => 
      job.id === id ? { ...job, title: editTitle } : job
    ));
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Job Postings</h2>
          <p className="text-gray-500 mt-1">Manage your active and past job vacancies.</p>
        </div>
        <Link to="/post-job">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Post New Job
          </button>
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {postings.length === 0 ? (
          <div className="p-8 text-center text-gray-500">You have no job postings.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500">
                  <th className="px-6 py-4 font-medium">Job Title</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Applicants</th>
                  <th className="px-6 py-4 font-medium">Posted Date</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {postings.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {editingId === job.id ? (
                        <input 
                          type="text" 
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          className="px-2 py-1 border border-red-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                          autoFocus
                        />
                      ) : (
                        job.title
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => toggleStatus(job.id, job.status)}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity ${
                          job.status === 'Active' 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : 'bg-gray-100 text-gray-800 border border-gray-200'
                        }`}
                        title="Click to toggle status"
                      >
                        {job.status}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-700">{job.applicants}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      {job.postedDate} <br/>
                      <span className="text-xs text-gray-400">Exp: {job.expires}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {editingId === job.id ? (
                        <div className="flex justify-end gap-2">
                          <button 
                            onClick={() => handleEditSave(job.id)}
                            className="bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700 transition-colors"
                          >
                            Save
                          </button>
                          <button 
                            onClick={() => setEditingId(null)}
                            className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded hover:bg-gray-300 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-end gap-2 text-gray-400">
                          <button className="p-1.5 hover:text-red-600 hover:bg-red-50 rounded transition-colors" title="View Details">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleEditStart(job)}
                            className="p-1.5 hover:text-red-600 hover:bg-red-50 rounded transition-colors" 
                            title="Edit Post"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(job.id)}
                            className="p-1.5 hover:text-red-600 hover:bg-red-50 rounded transition-colors" 
                            title="Delete Post"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
