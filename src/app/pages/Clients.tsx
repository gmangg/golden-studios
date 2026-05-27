import { Quote, Star } from 'lucide-react';

export function Clients() {
  const testimonials = [
    {
      quote: "Golden Studios transformed our brand film into something far beyond our expectations. Their color grading work is simply world-class. Every frame is a work of art.",
      author: "Michael Chen",
      role: "Chief Creative Officer",
      company: "Apex Automotive",
      rating: 5,
    },
    {
      quote: "The attention to detail in the edit was extraordinary. They understood our narrative vision immediately and delivered a cut that exceeded our original creative brief.",
      author: "Sarah Mitchell",
      role: "Director",
      company: "Independent Film",
      rating: 5,
    },
    {
      quote: "We've worked with numerous post houses, but Golden Studios stands out for their professionalism, technical expertise, and creative vision. They're our go-to partner.",
      author: "James Rodriguez",
      role: "Executive Producer",
      company: "Atlas Productions",
      rating: 5,
    },
    {
      quote: "The motion graphics work elevated our entire campaign. Clean, sophisticated, and perfectly aligned with our brand. The team was responsive and collaborative throughout.",
      author: "Alexandra Moore",
      role: "Brand Director",
      company: "Lumina Beauty Co.",
      rating: 5,
    },
    {
      quote: "Fast turnaround without sacrificing quality. That's rare in this industry. Golden Studios delivered broadcast-ready content on an aggressive timeline.",
      author: "David Park",
      role: "Marketing Director",
      company: "Nova Tech",
      rating: 5,
    },
    {
      quote: "Their expertise in color science is unmatched. We brought them a challenging low-light feature and they delivered a consistent, cinematic look across 90 minutes.",
      author: "Emma Thompson",
      role: "Producer",
      company: "Midnight Films",
      rating: 5,
    },
  ];

  const clients = [
    'Apex Automotive', 'Atlas Productions', 'Brand Collective', 'Lumina Beauty Co.',
    'Nova Tech', 'Summit Sports', 'Flow Studios', 'Midnight Films',
    'Pacific Media', 'Zenith Creative', 'Horizon Entertainment', 'Pulse Digital',
    'Sterling Studios', 'Velocity Films', 'Crimson Productions', 'Echo Media Group',
  ];

  const stats = [
    { number: '200+', label: 'Active Clients' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '98%', label: 'Client Retention' },
    { number: '500+', label: 'Projects Delivered' },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <div className="h-[2px] w-24 bg-primary mb-8" />
          <h1 className="text-6xl md:text-7xl tracking-tight mb-8 text-foreground">
            Our Clients
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Trusted by filmmakers, brands, and production companies who demand excellence
            in post-production. Our client relationships are built on consistent quality,
            professional service, and creative collaboration.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-32 grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border border-border p-8 hover:border-primary/40 transition-all">
              <div className="text-5xl text-primary mb-4">{stat.number}</div>
              <p className="text-sm tracking-wider uppercase text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Testimonials */}
        <div className="mb-32">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Client Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border p-8 hover:border-primary/40 transition-all group"
              >
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="pt-4 border-t border-border">
                  <p className="text-foreground mb-1">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-primary mt-1">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-32 bg-secondary border border-border p-16">
          <div className="mb-12 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Trusted By
            </p>
            <h2 className="text-3xl md:text-4xl tracking-tight text-foreground">
              Industry-Leading Clients
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="aspect-video bg-background border border-border flex items-center justify-center p-6 hover:border-primary/40 transition-all group"
              >
                <span className="text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors tracking-wide">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Sectors */}
        <div className="mb-32">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Industry Experience
            </p>
            <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
              Sectors We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Film & Entertainment',
                description: 'Feature films, documentaries, short films, and episodic content for theatrical and streaming distribution.',
                clients: ['Independent Films', 'Production Companies', 'Streaming Platforms'],
              },
              {
                title: 'Commercial & Advertising',
                description: 'Brand campaigns, product launches, commercials, and promotional content for television and digital platforms.',
                clients: ['Automotive', 'Beauty & Fashion', 'Technology'],
              },
              {
                title: 'Corporate & Branded Content',
                description: 'Brand storytelling, corporate videos, training content, and social media campaigns for enterprise clients.',
                clients: ['Fortune 500', 'Startups', 'Non-Profits'],
              },
            ].map((sector, index) => (
              <div
                key={index}
                className="bg-card border border-border p-10 hover:border-primary/40 transition-all"
              >
                <h3 className="text-2xl text-foreground mb-4">{sector.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {sector.description}
                </p>
                <div className="space-y-2">
                  {sector.clients.map((client, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary" />
                      <span className="text-sm text-muted-foreground">{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Long-form Testimonial */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto bg-card border-2 border-primary/20 p-12">
            <Quote className="w-12 h-12 text-primary/40 mb-6" />
            <blockquote className="text-2xl text-foreground leading-relaxed mb-8 italic">
              "We've partnered with Golden Studios on over 20 projects spanning three years.
              Their consistency, professionalism, and technical expertise make them an invaluable
              extension of our creative team. They don't just execute—they elevate every project
              they touch."
            </blockquote>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary/10 border border-primary flex items-center justify-center text-primary text-xl">
                MC
              </div>
              <div>
                <p className="text-lg text-foreground mb-1">Marcus Chen</p>
                <p className="text-muted-foreground">Executive Producer</p>
                <p className="text-primary">Atlas Productions</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t-2 border-border pt-16 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
            Join Our Roster of Clients
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Experience the level of service and quality that keeps clients coming back
            project after project.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-5 bg-primary text-primary-foreground tracking-[0.15em] uppercase text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}
