import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, Bookmark } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Mock data mapping, ideally this would be fetched from an API
const mockBlogData: Record<string, any> = {
  '1': {
    id: '1',
    title: 'Top 10 Teaching Strategies for Engaging Students in Nepal',
    content: `
      <p>Engaging students in the classroom is a universal challenge, but it takes on unique dimensions in the context of Nepal's diverse educational landscape. Whether you're teaching in a bustling Kathmandu school or a serene rural classroom, capturing and maintaining student interest is key to effective learning.</p>
      
      <h3>1. Connect Learning to Local Contexts</h3>
      <p>Students learn best when they can relate the material to their own lives. Use local examples, stories, and cultural references to explain complex concepts. This not only makes learning more relatable but also validates their experiences.</p>
      
      <h3>2. Foster Interactive Discussions</h3>
      <p>Move away from the traditional lecture format. Encourage students to voice their opinions, ask questions, and debate ideas. Techniques like 'Think-Pair-Share' can be highly effective in getting everyone involved.</p>
      
      <h3>3. Utilize Hands-on Activities</h3>
      <p>Whenever possible, incorporate practical activities into your lessons. This could involve simple science experiments, role-playing historical events, or building models. Active participation solidifies understanding.</p>
      
      <h3>4. Implement Formative Assessment</h3>
      <p>Regular, low-stakes checks for understanding help you gauge whether students are following along. Use quick quizzes, exit tickets, or simple thumbs-up/thumbs-down signals to adjust your teaching on the fly.</p>
      
      <h3>5. Build a Positive Classroom Environment</h3>
      <p>A safe, supportive, and respectful atmosphere encourages students to take risks and participate without fear of judgment. Celebrate successes and treat mistakes as learning opportunities.</p>
    `,
    author: 'Sunita Sharma',
    date: 'Oct 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200',
    category: 'Teaching Tips',
    readTime: '5 min read'
  }
};

export function BlogDetails() {
  const { id } = useParams<{ id: string }>();
  
  // Fallback if blog is not found in mock data
  const blog = id ? mockBlogData[id] || mockBlogData['1'] : mockBlogData['1'];

  if (!blog) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-surface-strong mb-4">Blog Post Not Found</h2>
        <Link to="/blogs">
          <Button>Back to Blogs</Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-24 pb-20">
      {/* Header Image & Meta */}
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-text-tertiary hover:text-surface-accent transition-colors mb-8 group font-medium">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to all articles
        </Link>

        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-surface-muted text-surface-strong rounded-full text-sm font-medium mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-surface-strong mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-default pb-6">
            <div className="flex items-center gap-6 text-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-surface-muted flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-surface-strong">{blog.author}</div>
                  <div className="text-sm">{blog.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2 text-text-tertiary hover:text-surface-accent hover:bg-surface-muted rounded-full transition-colors" aria-label="Share">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-text-tertiary hover:text-surface-accent hover:bg-surface-muted rounded-full transition-colors" aria-label="Bookmark">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 md:px-6 max-w-5xl mb-12">
        <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-md">
          <img 
            src={blog.imageUrl} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div 
          className="prose prose-lg prose-headings:font-bold prose-headings:text-surface-strong prose-p:text-text-secondary prose-a:text-surface-accent max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        <div className="mt-16 pt-8 border-t border-border-default flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-surface-muted flex items-center justify-center shrink-0">
              <User className="w-7 h-7 text-text-tertiary" />
            </div>
            <div>
              <div className="text-sm text-text-tertiary mb-1">Written by</div>
              <div className="font-bold text-surface-strong text-lg">{blog.author}</div>
            </div>
          </div>
          <Link to="/blogs">
            <Button variant="outline">Read More Articles</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
