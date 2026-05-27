import { Link } from 'react-router';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    slug: 'color-grading-workflow-2026',
    title: 'Modern Color Grading Workflow: A 2026 Guide',
    excerpt: 'An in-depth look at our color grading process, from technical conforming to final delivery, including HDR considerations and industry best practices.',
    category: 'Technical',
    date: 'May 1, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'five-editing-principles',
    title: '5 Editorial Principles That Transform Good Footage Into Great Content',
    excerpt: 'The fundamental editing concepts we apply to every project, from narrative pacing to emotional timing.',
    category: 'Editorial',
    date: 'April 15, 2026',
    readTime: '6 min read',
    featured: true,
  },
  {
    slug: 'motion-design-trends-2026',
    title: 'Motion Design Trends Shaping 2026',
    excerpt: 'Current motion graphics trends in commercial and branded content, from minimalist animations to complex 3D work.',
    category: 'Motion Design',
    date: 'April 3, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'hdr-delivery-specifications',
    title: 'Understanding HDR Delivery Specifications',
    excerpt: 'A technical breakdown of HDR formats, mastering workflows, and delivery requirements for different platforms.',
    category: 'Technical',
    date: 'March 20, 2026',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'case-study-nocturne',
    title: 'Case Study: Creating the Look for "Nocturne"',
    excerpt: 'Behind the scenes on our award-winning color work for this psychological thriller, including challenges and solutions.',
    category: 'Case Study',
    date: 'March 5, 2026',
    readTime: '12 min read',
    featured: false,
  },
  {
    slug: 'post-production-budgeting',
    title: 'Post-Production Budgeting: What Filmmakers Need to Know',
    excerpt: 'How to properly budget for post-production, common cost factors, and where to allocate resources for maximum impact.',
    category: 'Business',
    date: 'February 18, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'audio-post-basics',
    title: 'Audio Post-Production Basics for Picture Editors',
    excerpt: 'Essential audio concepts for editors, from proper levels to dialogue editing and sound design coordination.',
    category: 'Technical',
    date: 'February 1, 2026',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'choosing-post-house',
    title: 'How to Choose the Right Post-Production Partner',
    excerpt: 'Key factors to consider when selecting a post house, from technical capabilities to creative collaboration.',
    category: 'Business',
    date: 'January 15, 2026',
    readTime: '6 min read',
    featured: false,
  },
];

const categories = ['All', 'Technical', 'Editorial', 'Motion Design', 'Case Study', 'Business'];

export function Blog() {
  const featuredPosts = posts.filter(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <div className="h-[2px] w-24 bg-primary mb-8" />
          <h1 className="text-6xl md:text-7xl tracking-tight mb-8 text-foreground">
            Insights & Resources
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Technical guides, case studies, and industry insights from our team.
            Sharing knowledge gained from hundreds of post-production projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-16 flex items-center gap-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-5 py-2.5 bg-card border border-border text-sm tracking-wider uppercase text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-32">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Featured Articles
            </p>
            <h2 className="text-3xl md:text-4xl tracking-tight text-foreground">
              Recent Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {featuredPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="group bg-card border border-border hover:border-primary/40 transition-all"
              >
                {/* Featured Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-secondary via-background to-secondary/70 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-primary/5" style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',
                    }} />
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs tracking-wider uppercase text-primary px-3 py-1 bg-primary/10 border border-primary/20">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>

                  <h3 className="text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl tracking-tight text-foreground">
              All Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="group bg-card border border-border p-8 hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Tag className="w-4 h-4 text-primary" />
                  <span className="text-xs tracking-wider uppercase text-primary">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-32 bg-secondary border border-border p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl tracking-tight text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8">
            Get notified when we publish new articles and insights. No spam, just quality content.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-4 bg-input-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-primary-foreground tracking-wider uppercase text-sm hover:bg-primary/90 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
