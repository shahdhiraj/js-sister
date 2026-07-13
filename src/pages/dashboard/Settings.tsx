import React, { useState, useRef } from 'react';
import { useAuth } from '../../lib/AuthContext';
import { CheckCircle2, AlertTriangle, Upload, Trash2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Settings = () => {
  const { user, logout, updateUser } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+977-9800000000',
    bio: 'Passionate about education and technology.',
    // Teacher specific
    experience: '5',
    subject: 'Science',
    // School specific
    address: 'Kathmandu, Nepal',
    website: 'https://example.com'
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      updateUser({ name: formData.name, email: formData.email });
      setIsSaving(false);
      setShowSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you absolutely sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.')) {
      // Simulate delete
      alert('Account deleted successfully.');
      logout();
      navigate('/');
    }
  };

  return (
    <div className="max-w-4xl space-y-8 pb-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Profile & Settings</h2>
        <p className="text-gray-500 mt-1">Manage your account details and preferences.</p>
      </div>

      {showSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <span className="font-medium">Profile updated successfully!</span>
        </div>
      )}

      {/* Main Profile Form */}
      <form onSubmit={handleSave} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">General Information</h3>
          <p className="text-sm text-gray-500 mt-1">Update your basic profile details.</p>
        </div>
        
        <div className="p-6 space-y-8">
          
          {/* Avatar Upload */}
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-red-600 font-bold text-2xl uppercase shrink-0 overflow-hidden relative group">
              {profileImage ? (
                <>
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  <div 
                    className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center cursor-pointer"
                    onClick={() => setProfileImage(null)}
                  >
                    <X className="w-6 h-6 text-white" />
                  </div>
                </>
              ) : (
                formData.name ? formData.name.charAt(0) : 'U'
              )}
            </div>
            <div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                accept="image/*" 
                className="hidden" 
              />
              <button 
                type="button" 
                onClick={() => fileInputRef.current?.click()}
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 mb-2"
              >
                <Upload className="w-4 h-4" />
                Change Picture
              </button>
              <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size of 2MB.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <input 
                type="text" 
                value={user?.role || ''}
                disabled
                className="w-full px-4 py-2 border border-gray-200 bg-gray-50 rounded-lg text-gray-500 capitalize cursor-not-allowed"
              />
            </div>
          </div>

          {/* Role-Specific Fields */}
          {user?.role === 'teacher' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Subject</label>
                <input 
                  type="text" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                <input 
                  type="number" 
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-shadow"
                />
              </div>
            </div>
          )}

          {user?.role === 'school' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">School Address</label>
                <input 
                  type="text" 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <input 
                  type="url" 
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-shadow"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio / Description</label>
            <textarea 
              value={formData.bio}
              onChange={(e) => setFormData({...formData, bio: e.target.value})}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-shadow resize-y"
              placeholder="Tell us a little bit about yourself..."
            />
          </div>
          
        </div>
        
        <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
          <button 
            type="button"
            className="px-6 py-2 rounded-lg font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            disabled={isSaving}
            className={`px-6 py-2 rounded-lg font-medium text-white transition-colors flex items-center gap-2 ${isSaving ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
          >
            {isSaving ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </form>

      {/* Danger Zone */}
      <div className="bg-white rounded-xl border border-red-200 shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-red-100 bg-red-50/30">
          <h3 className="text-lg font-semibold text-red-700 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Danger Zone
          </h3>
        </div>
        <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-medium text-gray-900">Delete Account</h4>
            <p className="text-sm text-gray-500 mt-1">Permanently remove your account and all of its contents from our platform. This action is not reversible.</p>
          </div>
          <button 
            onClick={handleDeleteAccount}
            className="shrink-0 bg-white border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Delete Account
          </button>
        </div>
      </div>

    </div>
  );
};
