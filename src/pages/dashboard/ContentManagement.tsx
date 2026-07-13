import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Edit2, Trash2, X } from 'lucide-react';
import { useAuth } from '../../lib/AuthContext';

interface ContentItem {
  id: number;
  title: string;
  type: string;
  status: string;
  date: string;
}

const INITIAL_DATA: ContentItem[] = [
  { id: 1, title: 'How to teach ESL in China', type: 'Blog Post', status: 'Published', date: '2023-10-12' },
  { id: 2, title: 'English Teacher needed in Tokyo', type: 'Job Post', status: 'Active', date: '2023-10-15' },
  { id: 3, title: 'What is TEFL?', type: 'FAQ', status: 'Draft', date: '2023-10-18' },
  { id: 4, title: 'Seoul Language School', type: 'School Profile', status: 'Published', date: '2023-10-20' },
];

export const ContentManagement = () => {
  const { role } = useAuth();
  const [data, setData] = useState<ContentItem[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    type: 'Blog Post',
    status: 'Draft'
  });

  if (role !== 'admin') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-500">You need administrator privileges to view this page.</p>
      </div>
    );
  }

  const filteredData = data.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this content?')) {
      setData(data.filter(item => item.id !== id));
    }
  };

  const openAddModal = () => {
    setEditingItem(null);
    setFormData({ title: '', type: 'Blog Post', status: 'Draft' });
    setIsModalOpen(true);
  };

  const openEditModal = (item: ContentItem) => {
    setEditingItem(item);
    setFormData({ title: item.title, type: item.type, status: item.status });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingItem) {
      // Update
      setData(data.map(item => 
        item.id === editingItem.id 
          ? { ...item, ...formData } 
          : item
      ));
    } else {
      // Create
      const newItem: ContentItem = {
        id: Math.max(0, ...data.map(d => d.id)) + 1,
        title: formData.title,
        type: formData.type,
        status: formData.status,
        date: new Date().toISOString().split('T')[0] // current date YYYY-MM-DD
      };
      setData([...data, newItem]);
    }
    closeModal();
  };

  return (
    <div className="space-y-6 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
          <p className="text-gray-500 mt-1">Manage all site content, posts, and listings.</p>
        </div>
        <button 
          onClick={openAddModal}
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Content
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="relative w-full max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="hidden sm:block text-sm text-gray-500">
            Showing {filteredData.length} results
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-200 text-sm text-gray-500">
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.title}</td>
                  <td className="px-6 py-4 text-gray-500">{item.type}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === 'Published' || item.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{item.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 text-gray-400">
                      <button 
                        onClick={() => openEditModal(item)}
                        className="p-1 hover:text-red-600 transition-colors"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="p-1 hover:text-red-600 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No content found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                {editingItem ? 'Edit Content' : 'Add Content'}
              </h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input 
                  type="text" 
                  required
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="Content title..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select 
                  value={formData.type}
                  onChange={e => setFormData({...formData, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                >
                  <option value="Blog Post">Blog Post</option>
                  <option value="Job Post">Job Post</option>
                  <option value="FAQ">FAQ</option>
                  <option value="School Profile">School Profile</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select 
                  value={formData.status}
                  onChange={e => setFormData({...formData, status: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                  <option value="Active">Active</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  {editingItem ? 'Save Changes' : 'Create Content'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
