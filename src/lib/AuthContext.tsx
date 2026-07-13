import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Role = 'admin' | 'teacher' | 'school' | 'guest';

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;
  role: Role;
  login: (userData: User) => void;
  logout: () => void;
  switchRole: (newRole: Role) => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_USER_BASE = {
  id: '1',
  name: 'Demo User',
  email: 'demo@example.com',
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Start as logged out so the flow makes sense
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<Role>('guest');

  const login = (userData: User) => {
    setUser(userData);
    setRole(userData.role);
  };

  const logout = () => {
    setUser(null);
    setRole('guest');
  };

  const switchRole = (newRole: Role) => {
    setRole(newRole);
    if (user) {
      setUser({ ...user, role: newRole });
    } else {
      setUser({ ...MOCK_USER_BASE, role: newRole });
    }
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData });
    }
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout, switchRole, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
