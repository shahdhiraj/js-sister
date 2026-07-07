import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { FadeIn, Magnetic } from '../components/ui/motion';

export function Login() {
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
                Login to access your Brilliant Brain account
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-sm font-medium text-surface-strong">Email Address</label>
                <Input 
                  placeholder="Enter your email" 
                  type="email"
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
                  type="password"
                  icon={<Lock className="h-5 w-5 text-text-tertiary" />}
                />
              </div>

              <div className="pt-2">
                <Magnetic>
                  <Button variant="accent" size="lg" className="w-full h-12 text-lg shadow-2">
                    Sign In <ArrowRight className="w-4 h-4 ml-2" />
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
