import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { FadeIn, Magnetic } from '../components/ui/motion';
import { useAuth } from '../lib/AuthContext';

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { switchRole } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'admin' | 'teacher' | 'school'>('admin');
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('password123');

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const role = e.target.value as 'admin' | 'teacher' | 'school';
    setSelectedRole(role);
    setEmail(`${role}@example.com`);
  };

  // Get the redirect path from location state, default to dashboard
  const from = location.state?.from || '/dashboard';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Use the selected demo role
      switchRole(selectedRole);
      
      navigate(from);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-surface-muted pt-24 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 max-w-md">
        <FadeIn>
          <div className="bg-surface-base rounded-2xl shadow-3 border border-border-default p-8 md:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-surface-strong mb-2">
                Welcome Back
              </h1>
              <p className="text-text-secondary">
                Login to access your js-sister account
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleLogin}>
              <div className="space-y-1">
                <label className="text-sm font-medium text-surface-strong">Email Address</label>
                <Input 
                  placeholder="Enter your email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<Mail className="h-5 w-5 text-text-tertiary" />}
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-surface-strong">Password</label>
                  <a href="#" className="text-xs text-surface-accent hover:underline">Forgot password?</a>
                </div>
                <Input 
                  placeholder="Enter your password" 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={<Lock className="h-5 w-5 text-text-tertiary" />}
                  rightElement={
                    <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="focus:outline-none hover:text-surface-strong transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  }
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-surface-strong">Demo User Role</label>
                <div className="relative">
                  <select
                    value={selectedRole}
                    onChange={handleRoleChange}
                    className="w-full px-4 py-2 border border-border-default rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-surface-accent bg-white"
                  >
                    <option value="admin">Admin</option>
                    <option value="teacher">Teacher</option>
                    <option value="school">School</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-tertiary">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Magnetic>
                  <Button variant="accent" size="lg" className="w-full h-12 text-lg shadow-2" disabled={isLoggingIn}>
                    {isLoggingIn ? 'Signing In...' : 'Sign In'} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Magnetic>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-border-muted text-center">
              <p className="text-text-secondary mb-4">Don't have an account yet?</p>
              <div className="flex flex-col gap-3">
                <Link to="/register-teacher">
                  <Button variant="outline" className="w-full">
                    Register as Teacher
                  </Button>
                </Link>
                <Link to="/register-school">
                  <Button variant="outline" className="w-full">
                    Register as School
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
