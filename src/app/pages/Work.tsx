import { Play, Filter } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

const projects = [
  { title: 'Nocturne', category: 'Color Grading', year: '2026', client: 'Independent Film', slug: 'nocturne' },
  { title: 'Velocity', category: 'Editing', year: '2026', client: 'Apex Automotive', slug: 'velocity' },
  { title: 'Ethereal', category: 'Motion Design', year: '2025', client: 'Lumina Beauty Co.', slug: 'ethereal' },
  { title: 'Meridian', category: 'Color Grading', year: '2025', client: 'Atlas Productions', slug: null },
  { title: 'Apex', category: 'Editing', year: '2025', client: 'Summit Sports', slug: null },
  { title: 'Lumina', category: 'Motion Design', year: '2025', client: 'Nova Tech', slug: null },
  { title: 'Parallax', category: 'Color Grading', year: '2025', client: 'Indie Documentary', slug: null },
  { title: 'Momentum', category: 'Editing', year: '2024', client: 'Brand Collective', slug: null },
  { title: 'Cascade', category: 'Motion Design', year: '2024', client: 'Flow Studios', slug: null },
];

const categories = ['All', 'Color Grading', 'Editing', 'Motion Design'];

export function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="h-[2px] w-24 bg-primary mb-8" />
          <h1 className="text-6xl md:text-7xl tracking-tight mb-6 text-foreground">
            Our Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A curated portfolio of post-production projects spanning film, commercial,
            and branded content. Each piece represents our commitment to technical
            excellence and creative vision.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-16 flex items-center gap-6">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span className="tracking-wider uppercase">Filter:</span>
          </div>
          <div className="flex gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 text-sm tracking-wider uppercase transition-all ${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:border-primary/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const Component = project.slug ? Link : 'div';
            const props = project.slug ? { to: `/case-study/${project.slug}` } : {};

            return (
              <Component
                key={index}
                {...props}
                className="group relative aspect-[4/5] bg-card border border-border overflow-hidden hover:border-primary/40 transition-all cursor-pointer"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />

                {/* Geometric overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 border-t-2 border-primary/20"
                    style={{
                      transform: 'rotate(-45deg) translateY(50%)',
                      transformOrigin: 'center',
                    }}
                  />
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-primary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    <Play className="w-7 h-7 text-primary ml-1" fill="#d4af37" />
                  </div>
                </div>

                {/* Project info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background/95 to-transparent">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-xs tracking-[0.25em] uppercase text-primary">
                      {project.category}
                    </p>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Case Study indicator */}
                {project.slug && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary/90 text-primary-foreground text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    View Case Study
                  </div>
                )}
              </Component>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-32 pt-32 border-t-2 border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Industry Awards' },
              { number: '200+', label: 'Happy Clients' },
              { number: '10+', label: 'Years of Excellence' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl md:text-6xl text-primary mb-4">{stat.number}</div>
                <p className="text-sm tracking-wider uppercase text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
            Have a project in mind?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's create something exceptional together. Contact us to discuss
            your post-production needs.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-primary text-primary-foreground tracking-[0.15em] uppercase text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
