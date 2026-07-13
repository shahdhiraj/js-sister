import React from 'react';

export const PlaceholderDashboardPage = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
      <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-2xl flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-500 max-w-md">
        This page is currently under construction. Please check back later for updates.
      </p>
    </div>
  );
};
