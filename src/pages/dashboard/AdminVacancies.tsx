import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, X, Briefcase, MapPin, Building, Eye } from 'lucide-react';
import { useAuth } from '../../lib/AuthContext';
import { Link } from 'react-router-dom';

interface VacancyItem {
  id: number;
  title: string;
  school: string;
  location: string;
  type: string;
  status: string;
  postedDate: string;
}

const MOCK_VACANCIES: VacancyItem[] = [
  { id: 1, title: 'Senior Mathematics Teacher', school: 'Everest Academy', location: 'Kathmandu', type: 'Full Time', status: 'Active', postedDate: '2023-10-24' },
  { id: 2, title: 'Science Teacher', school: 'Valley Public School', location: 'Bhaktapur', type: 'Part Time', status: 'Closed', postedDate: '2023-09-15' },
  { id: 3, title: 'English Literature Teacher', school: 'Pioneer Academy', location: 'Pokhara', type: 'Full Time', status: 'Active', postedDate: '2023-10-28' },
];

export const AdminVacancies = () => {
  const { role } = useAuth();
  const [vacancies, setVacancies] = useState<VacancyItem[]>(MOCK_VACANCIES);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVacancy, setEditingVacancy] = useState<VacancyItem | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    school: '',
    location: '',
    type: 'Full Time',
    status: 'Active'
  });

  if (role !== 'admin') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-500">You need administrator privileges to view this page.</p>
      </div>
    );
  }

  const filteredVacancies = vacancies.filter(v => 
    v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.school.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this vacancy?')) {
      setVacancies(vacancies.filter(v => v.id !== id));
    }
  };

  const openAddModal = () => {
    setEditingVacancy(null);
    setFormData({ title: '', school: '', location: '', type: 'Full Time', status: 'Active' });
    setIsModalOpen(true);
  };

  const openEditModal = (vacancy: VacancyItem) => {
    setEditingVacancy(vacancy);
    setFormData({ 
      title: vacancy.title, 
      school: vacancy.school, 
      location: vacancy.location, 
      type: vacancy.type, 
      status: vacancy.status 
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingVacancy(null);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingVacancy) {
      setVacancies(vacancies.map(v => 
        v.id === editingVacancy.id 
          ? { ...v, ...formData } 
          : v
      ));
    } else {
      const newVacancy: VacancyItem = {
        id: Math.max(0, ...vacancies.map(v => v.id)) + 1,
        ...formData,
        postedDate: new Date().toISOString().split('T')[0]
      };
      setVacancies([newVacancy, ...vacancies]);
    }
    closeModal();
  };

  return (
    <div className="space-y-6 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Manage Vacancies</h2>
          <p className="text-gray-500 mt-1">Create, edit, or remove job postings across the platform.</p>
        </div>
        <button 
          onClick={openAddModal}
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Post Vacancy
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="relative w-full max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title or school..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>
          <div className="hidden sm:block text-sm text-gray-500">
            Showing {filteredVacancies.length} vacancies
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-200 text-sm text-gray-500">
                <th className="px-6 py-4 font-medium">Job Title</th>
                <th className="px-6 py-4 font-medium">School & Location</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Posted</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredVacancies.map((vacancy) => (
                <tr key={vacancy.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div className="font-medium text-gray-900">{vacancy.title}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900 font-medium flex items-center gap-1">
                      <Building className="w-4 h-4 text-gray-400" /> {vacancy.school}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4 text-gray-400" /> {vacancy.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{vacancy.type}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      vacancy.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : vacancy.status === 'Draft' 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {vacancy.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{vacancy.postedDate}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 text-gray-400">
                      <Link 
                        to={`/jobs/${vacancy.id}`}
                        className="p-1 hover:text-blue-600 transition-colors"
                        title="View Public Page"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button 
                        onClick={() => openEditModal(vacancy)}
                        className="p-1 hover:text-red-600 transition-colors"
                        title="Edit Vacancy"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(vacancy.id)}
                        className="p-1 hover:text-red-600 transition-colors"
                        title="Delete Vacancy"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredVacancies.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No vacancies found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                {editingVacancy ? 'Edit Vacancy' : 'Post New Vacancy'}
              </h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input 
                  type="text" required
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="e.g. Science Teacher"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                <input 
                  type="text" required
                  value={formData.school}
                  onChange={e => setFormData({...formData, school: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="e.g. Everest Academy"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input 
                  type="text" required
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="e.g. Kathmandu"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select 
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select 
                    value={formData.status}
                    onChange={e => setFormData({...formData, status: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  >
                    <option value="Active">Active</option>
                    <option value="Draft">Draft</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
                <button type="button" onClick={closeModal} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  Cancel
                </button>
                <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                  {editingVacancy ? 'Update Vacancy' : 'Post Vacancy'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
