import React from 'react';
import { FadeIn } from '../components/ui/motion';
export function PlaceholderPage({ title }: {title: string;}) {
  return (
    <div className="pt-32 pb-20 bg-surface-muted min-h-[70vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <div className="inline-block p-4 bg-surface-base rounded-2xl shadow-2 border border-border-default mb-6">
            <div className="w-16 h-16 bg-surface-muted rounded-xl mx-auto flex items-center justify-center text-2xl">
              🚧
            </div>
          </div>
          <h1 className="text-4xl font-bold text-surface-strong mb-4">
            {title}
          </h1>
          <p className="text-lg text-text-secondary max-w-md mx-auto">
            This page is currently under construction. Check back soon for
            updates!
          </p>
        </FadeIn>
      </div>
    </div>);

}