import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-surface-base border-t border-border-default pt-20 pb-10 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img src="/logo.png" alt="Jobs Sniper" className="h-10 object-contain group-hover:scale-105 transition-transform" />
            </Link>
            <p className="text-text-secondary text-base mb-6 leading-relaxed">
              Connecting Brilliant Teachers with Great Schools across Nepal. The
              most trusted educational recruitment platform.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-surface-strong text-lg mb-6">
              For Teachers
            </h4>
            <ul className="space-y-4 text-base text-text-secondary">
              <li>
                <Link
                  to="/jobs"
                  className="hover:text-surface-accent transition-colors inline-block hover:translate-x-1 transform duration-200">
                  
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/register-teacher"
                  className="hover:text-surface-accent transition-colors inline-block hover:translate-x-1 transform duration-200">
                  
                  Create Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="hover:text-surface-accent transition-colors inline-block hover:translate-x-1 transform duration-200">
                  
                  Career Advice
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="hover:text-surface-accent transition-colors inline-block hover:translate-x-1 transform duration-200">
                  
                  Teacher Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-surface-strong text-lg mb-6">
              For Schools
            </h4>
            <ul className="space-y-4 text-base text-text-secondary">
              <li>
                <Link
                  to="/post-job"
                  className="hover:text-surface-accent transition-colors inline-block hover:translate-x-1 transform duration-200">
                  
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  to="/teachers"
                  className="hover:text-surface-accent transition-colors inline-block hover:translate-x-1 transform duration-200">
                  
                  Search Teachers
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-surface-accent transition-colors inline-block hover:translate-x-1 transform duration-200">
                  
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  to="/schools"
                  className="hover:text-surface-accent transition-colors inline-block hover:translate-x-1 transform duration-200">
                  
                  Recruitment Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-surface-strong text-lg mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-base text-text-secondary">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-surface-accent" />
                <span>Tinkune, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 shrink-0 text-surface-accent" />
                <span>+977 9800000000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 shrink-0 text-surface-accent" />
                <span>support@js-sister.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-muted pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-tertiary">
          <p>
            © {new Date().getFullYear()} Brilliant Brain Teachers Bank. All
            rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              to="/privacy"
              className="hover:text-surface-strong transition-colors">
              
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-surface-strong transition-colors">
              
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}