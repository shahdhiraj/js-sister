import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
export function App() {
  return (
    <BrowserRouter>
      <Routes>
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
          <Route
            path="privacy"
            element={<PlaceholderPage title="Privacy Policy" />} />
          
          <Route
            path="terms"
            element={<PlaceholderPage title="Terms of Service" />} />
          
          <Route
            path="resources"
            element={<PlaceholderPage title="Resources" />} />
          
        </Route>
      </Routes>
    </BrowserRouter>);

}