import React, { useState } from 'react';
import { useAuth } from '../../lib/AuthContext';
import { Building, MapPin, Briefcase, Clock, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const INITIAL_SAVED = [
  { id: 101, jobTitle: 'English Literature Teacher', school: 'Pioneer Academy', location: 'Pokhara', type: 'Full Time', salary: 'Rs. 45k - 55k', postedDate: '2 days ago' },
  { id: 102, jobTitle: 'Computer Science Instructor', school: 'Global College', location: 'Kathmandu', type: 'Part Time', salary: 'Negotiable', postedDate: '1 week ago' },
];

const AVAILABLE_JOBS = [
  { id: 201, jobTitle: 'Primary Science Teacher', school: 'Sunshine School', location: 'Kathmandu', type: 'Full Time', salary: 'Rs. 30k - 40k', postedDate: '5 hours ago' },
  { id: 202, jobTitle: 'Mathematics Head of Department', school: 'Everest Academy', location: 'Lalitpur', type: 'Full Time', salary: 'Rs. 60k - 80k', postedDate: '1 day ago' },
  { id: 203, jobTitle: 'Physical Education Teacher', school: 'Valley Public School', location: 'Bhaktapur', type: 'Contract', salary: 'Negotiable', postedDate: '3 days ago' },
];

export const SavedJobs = () => {
  const { role } = useAuth();
  const [savedJobs, setSavedJobs] = useState(INITIAL_SAVED);

  if (role !== 'teacher') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-500">Only teachers can view saved jobs.</p>
      </div>
    );
  }

  const handleRemove = (id: number) => {
    setSavedJobs(savedJobs.filter(job => job.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Saved Jobs</h2>
        <p className="text-gray-500 mt-1">Review and apply to jobs you've saved for later.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {savedJobs.length === 0 ? (
          <div className="col-span-full p-8 text-center text-gray-500 bg-white rounded-xl border border-gray-200">
            You have no saved jobs.
          </div>
        ) : (
          savedJobs.map(job => (
            <div key={job.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow relative">
              
              <button 
                onClick={() => handleRemove(job.id)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" 
                title="Remove from saved"
              >
                <Trash2 className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center border border-red-100 shrink-0">
                  <Building className="w-6 h-6 text-red-600" />
                </div>
                <div className="pr-10">
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{job.jobTitle}</h3>
                  <p className="text-gray-600 font-medium line-clamp-1">{job.school}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" /> {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="w-4 h-4 mr-2 text-gray-400" /> {job.type}
                </div>
                <div className="flex items-center text-sm font-medium text-gray-900">
                  {job.salary}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" /> {job.postedDate}
                </div>
              </div>

              <div className="flex gap-3">
                <Link to={`/jobs/${job.id}`} className="flex-1">
                  <button className="w-full py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>

            </div>
          ))
        )}
      </div>

      {/* Recommended Jobs Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Recommended Jobs</h3>
          <p className="text-gray-500 mt-1 mb-6">Discover new opportunities matching your profile.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {AVAILABLE_JOBS.filter(job => !savedJobs.some(saved => saved.id === job.id)).map(job => (
            <div key={job.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow relative">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
                  <Building className="w-6 h-6 text-gray-500" />
                </div>
                <div className="pr-4">
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{job.jobTitle}</h3>
                  <p className="text-gray-600 font-medium line-clamp-1">{job.school}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" /> {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="w-4 h-4 mr-2 text-gray-400" /> {job.type}
                </div>
                <div className="flex items-center text-sm font-medium text-gray-900">
                  {job.salary}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" /> {job.postedDate}
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setSavedJobs([...savedJobs, job])}
                  className="flex-1 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  Save Job
                </button>
                <Link to={`/jobs/${job.id}`} className="flex-1">
                  <button className="w-full py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
