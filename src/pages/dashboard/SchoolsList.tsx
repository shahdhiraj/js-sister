import React from 'react';
import { useAuth } from '../../lib/AuthContext';
import { Building, MapPin, Search } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const MOCK_SCHOOLS = [
  { id: 1, name: 'Everest Academy', location: 'Kathmandu', type: 'Private', openPositions: 3 },
  { id: 2, name: 'Kathmandu International School', location: 'Lalitpur', type: 'International', openPositions: 5 },
  { id: 3, name: 'Valley Public School', location: 'Bhaktapur', type: 'Public', openPositions: 1 },
  { id: 4, name: 'Global College', location: 'Kathmandu', type: 'Private', openPositions: 2 },
  { id: 5, name: 'Sunshine School', location: 'Pokhara', type: 'Private', openPositions: 0 },
];

export const SchoolsList = () => {
  const { role } = useAuth();

  if (role !== 'teacher') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-500">Only job seekers (teachers) can view the schools list here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Partner Schools</h2>
          <p className="text-gray-500 mt-1">Browse schools actively hiring on our platform.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search schools..." 
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 w-full sm:w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_SCHOOLS.map(school => (
          <div key={school.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col hover:border-red-300 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
                <Building className="w-6 h-6 text-gray-500" />
              </div>
              <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
                {school.type}
              </span>
            </div>
            
            <h3 className="font-bold text-lg text-gray-900 mb-1">{school.name}</h3>
            
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <MapPin className="w-4 h-4 mr-1" /> {school.location}
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                {school.openPositions} {school.openPositions === 1 ? 'position' : 'positions'}
              </span>
              <Button variant="outline" className="text-sm py-1.5 h-auto px-4">
                View Profile
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
