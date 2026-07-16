import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
}

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="bg-surface-base rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border-default group">
      <div className="aspect-[16/9] relative overflow-hidden">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-surface-base/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-surface-strong">
          {blog.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-text-tertiary mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {blog.date}
          </div>
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            {blog.author}
          </div>
        </div>
        <h3 className="text-xl font-bold text-surface-strong mb-3 line-clamp-2 group-hover:text-surface-accent transition-colors">
          <Link to={`/blogs/${blog.id}`}>
            {blog.title}
          </Link>
        </h3>
        <p className="text-text-secondary mb-6 line-clamp-3">
          {blog.excerpt}
        </p>
        <Link
          to={`/blogs/${blog.id}`}
          className="inline-flex items-center gap-2 text-surface-accent font-medium hover:gap-3 transition-all"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
