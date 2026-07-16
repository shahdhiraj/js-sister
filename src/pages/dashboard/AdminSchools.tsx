import React, { useState } from 'react';
import { Search, Building, MapPin, MoreVertical, Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { useAuth } from '../../lib/AuthContext';
import { Button } from '../../components/ui/Button';

interface SchoolItem {
  id: number;
  name: string;
  email: string;
  location: string;
  type: string;
  status: string;
  joinDate: string;
}

const MOCK_SCHOOLS: SchoolItem[] = [
  { id: 1, name: 'Everest Academy', email: 'contact@everest.edu', location: 'Kathmandu', type: 'Private', status: 'Active', joinDate: '2023-09-28' },
  { id: 2, name: 'Kathmandu International', email: 'hr@kis.edu.np', location: 'Lalitpur', type: 'International', status: 'Pending', joinDate: '2023-11-10' },
  { id: 3, name: 'Valley Public School', email: 'info@valleypublic.edu', location: 'Bhaktapur', type: 'Public', status: 'Active', joinDate: '2023-05-15' },
];

export const AdminSchools = () => {
  const { role } = useAuth();
  const [schools, setSchools] = useState<SchoolItem[]>(MOCK_SCHOOLS);
  const [searchTerm, setSearchTerm] = useState('');

  if (role !== 'admin') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-500">You need administrator privileges to view this page.</p>
      </div>
    );
  }

  const filteredSchools = schools.filter(school => 
    school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    school.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleStatus = (id: number) => {
    setSchools(schools.map(school => {
      if (school.id === id) {
        return { ...school, status: school.status === 'Active' ? 'Suspended' : 'Active' };
      }
      return school;
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Schools Directory</h2>
          <p className="text-gray-500 mt-1">Manage and monitor all schools registered on the platform.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="relative w-full max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by school name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-shadow"
            />
          </div>
          <div className="hidden sm:block text-sm text-gray-500">
            Total: {filteredSchools.length} schools
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-200 text-sm text-gray-500">
                <th className="px-6 py-4 font-medium">School</th>
                <th className="px-6 py-4 font-medium">Location</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSchools.map((school) => (
                <tr key={school.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                        <Building className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{school.name}</div>
                        <div className="text-sm text-gray-500">{school.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-400" /> {school.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {school.type}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      school.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : school.status === 'Pending' 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {school.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 text-gray-400">
                      <button 
                        onClick={() => toggleStatus(school.id)}
                        className={`p-1 transition-colors ${school.status === 'Active' ? 'hover:text-red-600' : 'hover:text-green-600'}`}
                        title={school.status === 'Active' ? 'Suspend School' : 'Activate School'}
                      >
                        {school.status === 'Active' ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                      </button>
                      <button 
                        className="p-1 hover:text-red-600 transition-colors"
                        title="Edit Details"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredSchools.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No schools found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
