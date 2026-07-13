import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../lib/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Briefcase, 
  FileText,
  LogOut,
  GraduationCap
} from 'lucide-react';

export const Sidebar = () => {
  const { role, logout } = useAuth();

  const getLinks = () => {
    switch (role) {
      case 'admin':
        return [
          { name: 'Overview', to: '/dashboard', icon: LayoutDashboard, exact: true },
          { name: 'Content Management', to: '/dashboard/cms', icon: FileText },
          { name: 'Manage Users', to: '/dashboard/users', icon: Users },
          { name: 'Settings', to: '/dashboard/settings', icon: Settings },
        ];
      case 'teacher':
        return [
          { name: 'Overview', to: '/dashboard', icon: LayoutDashboard, exact: true },
          { name: 'My Applications', to: '/dashboard/applications', icon: Briefcase },
          { name: 'Saved Jobs', to: '/dashboard/saved', icon: FileText },
          { name: 'Profile Settings', to: '/dashboard/settings', icon: Settings },
        ];
      case 'school':
        return [
          { name: 'Overview', to: '/dashboard', icon: LayoutDashboard, exact: true },
          { name: 'My Job Postings', to: '/dashboard/jobs', icon: Briefcase },
          { name: 'Applicants', to: '/dashboard/applicants', icon: Users },
          { name: 'School Profile', to: '/dashboard/settings', icon: Settings },
        ];
      default:
        return [];
    }
  };

  const links = getLinks();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">ESL Jobs</span>
        </NavLink>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.exact}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-red-50 text-red-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            <link.icon className="w-5 h-5" />
            <span className="font-medium">{link.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};
