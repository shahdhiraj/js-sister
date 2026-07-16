import React from 'react';
import { BlogCard, Blog } from '../components/blogs/BlogCard';

const mockBlogs: Blog[] = [
  {
    id: '1',
    title: 'Top 10 Teaching Strategies for Engaging Students in Nepal',
    excerpt: 'Discover effective methodologies to keep your classroom interactive and ensure students are actively participating in their learning journey.',
    author: 'Sunita Sharma',
    date: 'Oct 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
    category: 'Teaching Tips'
  },
  {
    id: '2',
    title: 'Navigating the New Curriculum: What Teachers Need to Know',
    excerpt: 'A comprehensive guide to understanding the recent changes in the national curriculum and how to adapt your lesson plans accordingly.',
    author: 'Rajendra Thapa',
    date: 'Nov 02, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    category: 'Curriculum Updates'
  },
  {
    id: '3',
    title: 'How to Build a Standout Teacher Profile on Jobs Sniper',
    excerpt: 'Learn the best practices for creating a profile that catches the eye of top schools and increases your chances of landing your dream job.',
    author: 'Jobs Sniper Team',
    date: 'Dec 10, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    category: 'Career Advice'
  },
  {
    id: '4',
    title: 'Integrating Technology in Rural Classrooms',
    excerpt: 'Practical and cost-effective ways to bring digital learning tools to schools with limited resources in rural areas of Nepal.',
    author: 'Bikash Karki',
    date: 'Jan 05, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    category: 'EdTech'
  },
  {
    id: '5',
    title: 'The Importance of Mental Health Awareness in Schools',
    excerpt: 'Why educators need to prioritize their own well-being and how to support students struggling with mental health issues.',
    author: 'Dr. Anjali Joshi',
    date: 'Feb 18, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1494887205043-c5f291293cf6?auto=format&fit=crop&q=80&w=800',
    category: 'Wellness'
  },
  {
    id: '6',
    title: 'Interview Preparation Guide for Aspiring Teachers',
    excerpt: 'Common questions asked during teaching interviews and how to answer them confidently to leave a lasting impression.',
    author: 'Jobs Sniper Team',
    date: 'Mar 22, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
    category: 'Career Advice'
  }
];

export function Blogs() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-surface-muted py-16 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-surface-strong mb-6 leading-tight">
            Insights & <span className="text-surface-accent">Resources</span>
          </h1>
          <p className="text-lg text-text-secondary">
            Stay updated with the latest teaching strategies, curriculum updates, and career advice for educators in Nepal.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  );
}
