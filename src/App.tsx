import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './lib/AuthContext';

// Main Site Components
import { Layout } from './components/global/Layout';
import { Home } from './pages/Home';
import { FindTeachers } from './pages/FindTeachers';
import { Schools } from './pages/Schools';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { PlaceholderPage } from './pages/Placeholder';
import { TeacherProfile } from './pages/TeacherProfile';
import { FAQ } from './pages/FAQ';
import { Jobs } from './pages/Jobs';
import { JobDetails } from './pages/JobDetails';
import { PostJob } from './pages/PostJob';
import { Login } from './pages/Login';
import { RegisterTeacher } from './pages/RegisterTeacher';
import { RegisterSchool } from './pages/RegisterSchool';
import { About } from './pages/About';
import { Blogs } from './pages/Blogs';
import { BlogDetails } from './pages/BlogDetails';
// Dashboard Components
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { DashboardOverview } from './pages/dashboard/DashboardOverview';
import { ContentManagement } from './pages/dashboard/ContentManagement';
import { Settings } from './pages/dashboard/Settings';
import { ManageUsers } from './pages/dashboard/ManageUsers';
import { MyApplications } from './pages/dashboard/MyApplications';
import { SavedJobs } from './pages/dashboard/SavedJobs';
import { MyJobPostings } from './pages/dashboard/MyJobPostings';
import { Applicants } from './pages/dashboard/Applicants';
import { SchoolsList } from './pages/dashboard/SchoolsList';
import { AdminSchools } from './pages/dashboard/AdminSchools';
import { AdminTeachers } from './pages/dashboard/AdminTeachers';
import { AdminTeacherDetails } from './pages/dashboard/AdminTeacherDetails';
import { AdminVacancies } from './pages/dashboard/AdminVacancies';
import { TeachersList } from './pages/dashboard/TeachersList';

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Website Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="teachers" element={<FindTeachers />} />
            <Route path="schools" element={<Schools />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />

            {/* Scaffolds */}
            <Route path="post-job" element={<PostJob />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="jobs/:id" element={<JobDetails />} />
            <Route path="teachers/:id" element={<TeacherProfile />} />
            <Route path="faq" element={<FAQ />} />

            <Route path="login" element={<Login />} />
            <Route path="register-teacher" element={<RegisterTeacher />} />
            <Route path="register-school" element={<RegisterSchool />} />
            <Route path="about" element={<About />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogDetails />} />
            <Route path="privacy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="terms" element={<PlaceholderPage title="Terms of Service" />} />
            <Route path="resources" element={<PlaceholderPage title="Resources" />} />
          </Route>

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="cms" element={<ContentManagement />} />
            <Route path="settings" element={<Settings />} />
            
            {/* Admin specific */}
            <Route path="users" element={<ManageUsers />} />
            <Route path="admin/schools" element={<AdminSchools />} />
            <Route path="admin/teachers" element={<AdminTeachers />} />
            <Route path="admin/teachers/:id" element={<AdminTeacherDetails />} />
            <Route path="admin/vacancies" element={<AdminVacancies />} />
            
            {/* Teacher specific */}
            <Route path="applications" element={<MyApplications />} />
            <Route path="saved" element={<SavedJobs />} />
            <Route path="schools" element={<SchoolsList />} />
            
            {/* School specific */}
            <Route path="jobs" element={<MyJobPostings />} />
            <Route path="applicants" element={<Applicants />} />
            <Route path="find-teachers" element={<TeachersList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
