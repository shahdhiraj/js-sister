import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../lib/AuthContext';
import { Bell, Menu, User, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const TopBar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const { user, role, logout } = useAuth();
  const navigate = useNavigate();
  
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-10">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 -ml-2 text-gray-500 hover:text-gray-700 lg:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800 capitalize hidden sm:block">
          {role} Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        
        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={`p-2 text-gray-400 hover:text-gray-500 relative rounded-full transition-colors ${showNotifications ? 'bg-gray-100' : ''}`}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">Notifications</h3>
                <button className="text-xs text-red-600 hover:text-red-700 font-medium">Mark all as read</button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50">
                  <p className="text-sm text-gray-800 font-medium">New application received</p>
                  <p className="text-xs text-gray-500 mt-1">Anita Thapa applied for Senior Science Teacher</p>
                  <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
                </div>
                <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50">
                  <p className="text-sm text-gray-800 font-medium">System Update</p>
                  <p className="text-xs text-gray-500 mt-1">We've added new features to your dashboard.</p>
                  <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                </div>
              </div>
              <div className="px-4 py-2 border-t border-gray-100 text-center">
                <button className="text-sm text-gray-600 hover:text-gray-900 font-medium">View all notifications</button>
              </div>
            </div>
          )}
        </div>

        {/* Profile Menu */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-3 pl-4 border-l border-gray-200 hover:opacity-80 transition-opacity focus:outline-none"
          >
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-700">{user?.name}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-5 h-5 text-gray-500" />
            </div>
          </button>
          
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
              <div className="px-4 py-3 border-b border-gray-100 sm:hidden">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
              </div>
              <button 
                onClick={() => {
                  setShowProfileMenu(false);
                  navigate('/dashboard/settings');
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>
              <div className="border-t border-gray-100 my-1"></div>
              <button 
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};
