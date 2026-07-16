import React, { useState } from 'react';
import { Search, GraduationCap, Eye, Trash2, CheckCircle } from 'lucide-react';
import { useAuth } from '../../lib/AuthContext';
import { Link } from 'react-router-dom';

interface TeacherItem {
  id: number;
  name: string;
  email: string;
  subject: string;
  status: string;
  joinDate: string;
}

const MOCK_TEACHERS: TeacherItem[] = [
  { id: 1, name: 'Sarah Jenkins', email: 'sarah.j@example.com', subject: 'Mathematics', status: 'Verified', joinDate: '2023-10-12' },
  { id: 2, name: 'Michael Chen', email: 'mchen@example.com', subject: 'Science', status: 'Pending', joinDate: '2023-11-05' },
  { id: 3, name: 'Anita Thapa', email: 'anita.t@example.com', subject: 'English Literature', status: 'Verified', joinDate: '2023-08-20' },
];

export const AdminTeachers = () => {
  const { role } = useAuth();
  const [teachers, setTeachers] = useState<TeacherItem[]>(MOCK_TEACHERS);
  const [searchTerm, setSearchTerm] = useState('');

  if (role !== 'admin') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-500">You need administrator privileges to view this page.</p>
      </div>
    );
  }

  const filteredTeachers = teachers.filter(teacher => 
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Teachers Directory</h2>
          <p className="text-gray-500 mt-1">Review profiles and verify teacher credentials.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="relative w-full max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-shadow"
            />
          </div>
          <div className="hidden sm:block text-sm text-gray-500">
            Total: {filteredTeachers.length} teachers
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-200 text-sm text-gray-500">
                <th className="px-6 py-4 font-medium">Teacher</th>
                <th className="px-6 py-4 font-medium">Subject</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Joined</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{teacher.name}</div>
                        <div className="text-sm text-gray-500">{teacher.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {teacher.subject}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      teacher.status === 'Verified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {teacher.status === 'Verified' && <CheckCircle className="w-3 h-3 mr-1" />}
                      {teacher.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {teacher.joinDate}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 text-gray-400">
                      <Link 
                        to={`/dashboard/admin/teachers/${teacher.id}`}
                        className="p-1 hover:text-red-600 transition-colors flex items-center gap-1 text-sm font-medium"
                      >
                        <Eye className="w-4 h-4" /> View Details
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredTeachers.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No teachers found.
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
