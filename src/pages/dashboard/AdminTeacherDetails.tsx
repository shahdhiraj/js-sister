import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../../lib/AuthContext';
import { ArrowLeft, GraduationCap, MapPin, Mail, Phone, BookOpen, Clock, FileText, CheckCircle2, Shield } from 'lucide-react';
import { Button } from '../../components/ui/Button';

// Mock data, in a real app this would be fetched based on the ID
const MOCK_TEACHER = {
  id: '1',
  name: 'Sarah Jenkins',
  email: 'sarah.j@example.com',
  phone: '+977 9800000000',
  location: 'Kathmandu, Nepal',
  subject: 'Mathematics',
  experience: '5 Years',
  education: "Master's in Mathematics Education",
  status: 'Verified',
  joinDate: '2023-10-12',
  bio: 'Passionate mathematics teacher with 5 years of experience delivering engaging curriculum to secondary level students. Dedicated to fostering a supportive learning environment and utilizing modern EdTech tools.',
  applications: 3,
  documents: ['Resume.pdf', 'Teaching_License.pdf', 'Masters_Degree.pdf']
};

export const AdminTeacherDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { role } = useAuth();

  if (role !== 'admin') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-500">You need administrator privileges to view this page.</p>
      </div>
    );
  }

  // In a real application, we would fetch the teacher data using the ID.
  const teacher = MOCK_TEACHER;

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      <div className="flex items-center justify-between">
        <Link 
          to="/dashboard/admin/teachers" 
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Teachers
        </Link>
        <div className="flex gap-3">
          <Button variant="outline" className="border-red-200 !text-red-600 hover:bg-red-50 hover:!text-red-700">
            Suspend Account
          </Button>
          <Button variant="accent" className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> {teacher.status === 'Verified' ? 'Revoke Verification' : 'Verify Teacher'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Profile Info */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center border-4 border-white shadow-md shrink-0">
                <GraduationCap className="w-10 h-10 text-red-600" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h1 className="text-2xl font-bold text-gray-900">{teacher.name}</h1>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    teacher.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {teacher.status === 'Verified' && <Shield className="w-3 h-3 mr-1" />}
                    {teacher.status}
                  </span>
                </div>
                <p className="text-lg text-gray-600 font-medium mb-4">{teacher.subject} Teacher</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" /> {teacher.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" /> {teacher.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" /> {teacher.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" /> Joined {teacher.joinDate}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">About</h3>
              <p className="text-gray-600 leading-relaxed">
                {teacher.bio}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Professional Details</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Education</p>
                  <p className="text-gray-600 mt-1">{teacher.education}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Experience</p>
                  <p className="text-gray-600 mt-1">{teacher.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Documents</h3>
            <ul className="space-y-3">
              {teacher.documents.map((doc, idx) => (
                <li key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <FileText className="w-4 h-4 text-red-500" /> {doc}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">PDF</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Activity Overview</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Job Applications</p>
                <p className="text-2xl font-bold text-gray-900">{teacher.applications}</p>
              </div>
              <Button variant="outline" className="w-full">
                View Application History
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
