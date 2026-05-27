import { ChevronRight, Palette, Film, Sparkles, Video, Music, Layers } from 'lucide-react';
import { Link } from 'react-router';

export function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Color Grading & Correction',
      tagline: 'Cinematic color science for every frame',
      description: 'Professional color grading services that transform your footage into visually stunning content. Using industry-standard DaVinci Resolve workflows, we deliver precise color correction and creative grading tailored to your vision.',
      capabilities: [
        'Primary & Secondary Color Correction',
        'Creative Look Development',
        'LUT Creation & Custom Film Emulation',
        'HDR & Dolby Vision Mastering',
        'Color Matching Across Multiple Cameras',
        'Skin Tone Optimization',
        'Scene-by-Scene Grading',
        'Deliverable Format Conversion',
      ],
      process: [
        'Initial consultation and reference review',
        'Technical conforming and optimization',
        'Primary correction and balancing',
        'Creative grading and look development',
        'Client review and revision rounds',
        'Final delivery in all required formats',
      ],
    },
    {
      icon: Film,
      title: 'Editorial Services',
      tagline: 'Expert storytelling through precise editing',
      description: 'From rough assembly to final cut, our editorial team brings narrative expertise and technical precision to every project. We specialize in transforming raw footage into compelling, polished content.',
      capabilities: [
        'Narrative & Documentary Editing',
        'Commercial & Branded Content',
        'Trailer & Promo Cutting',
        'Multi-Camera Editing & Syncing',
        'Interview & Testimonial Assembly',
        'Archival Footage Integration',
        'Music Video Editing',
        'Social Media Content Optimization',
      ],
      process: [
        'Footage organization and logging',
        'Rough cut assembly and structure',
        'Refinement of pacing and timing',
        'Sound design integration',
        'Color coordination and effects',
        'Final export and format delivery',
      ],
    },
    {
      icon: Sparkles,
      title: 'Motion Graphics & VFX',
      tagline: 'Dynamic visuals that command attention',
      description: 'Elevate your production with sophisticated motion design, animated graphics, and seamless visual effects. We create everything from elegant title sequences to complex compositing work.',
      capabilities: [
        'Title Sequences & End Credits',
        'Lower Thirds & Info Graphics',
        'Logo Animation & Branding',
        'Kinetic Typography',
        '2D & 3D Motion Design',
        'VFX Compositing & Cleanup',
        'Green Screen Keying',
        'Particle Effects & Simulations',
      ],
      process: [
        'Concept development and style frames',
        'Animation and motion design',
        'VFX tracking and compositing',
        'Integration with edited timeline',
        'Rendering and optimization',
        'Final delivery and asset handoff',
      ],
    },
    {
      icon: Video,
      title: 'Finishing & Mastering',
      tagline: 'Broadcast-ready deliverables',
      description: 'Final polish and technical conforming for professional distribution. We ensure your content meets all technical specifications for theatrical, broadcast, streaming, and digital platforms.',
      capabilities: [
        'Online Conforming & Relink',
        'Audio Mixing & Sweetening',
        'Format Transcoding',
        'Quality Control & Compliance',
        'Subtitle & Caption Integration',
        'DCP Creation for Theatrical',
        'Multi-Format Deliverables',
        'Archive & Asset Management',
      ],
      process: [
        'Technical review and conforming',
        'Audio finishing and mix',
        'Final quality control pass',
        'Format-specific encoding',
        'Delivery and documentation',
        'Archive preparation',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <div className="h-[2px] w-24 bg-primary mb-8" />
          <h1 className="text-6xl md:text-7xl tracking-tight mb-8 text-foreground">
            Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive post-production services designed for filmmakers, brands, and content
            creators who demand professional excellence. From editorial to final delivery,
            we provide industry-leading expertise across all disciplines.
          </p>
        </div>

        {/* Services Detailed */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={index} className="relative">
              {/* Service Header */}
              <div className="mb-12">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-lg text-primary tracking-wide">{service.tagline}</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
                  {service.description}
                </p>
              </div>

              {/* Capabilities & Process Grid */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* Capabilities */}
                <div className="bg-card border border-border p-10">
                  <h3 className="text-xl text-foreground mb-8 flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-primary" />
                    Capabilities
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {service.capabilities.map((capability, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="bg-secondary border border-border p-10">
                  <h3 className="text-xl text-foreground mb-8 flex items-center gap-3">
                    <div className="h-[2px] w-8 bg-primary" />
                    Workflow
                  </h3>
                  <div className="space-y-6">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-8 h-8 border border-primary flex items-center justify-center flex-shrink-0 text-primary text-sm">
                          {i + 1}
                        </div>
                        <p className="text-muted-foreground pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < services.length - 1 && (
                <div className="mt-32 h-[1px] bg-border relative">
                  <div className="absolute left-0 top-0 w-32 h-[1px] bg-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-32 pt-32 border-t-2 border-border">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Additional Offerings</p>
            <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
              Specialized Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Music,
                title: 'Sound Design',
                description: 'Professional audio post including dialogue editing, sound effects, and ambient design.',
              },
              {
                icon: Layers,
                title: 'Project Consulting',
                description: 'Technical consulting for production planning, workflow design, and post-production strategy.',
              },
              {
                icon: Video,
                title: 'Archival & Restoration',
                description: 'Digital restoration and archival services for legacy content and film transfers.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-card border border-border p-8 hover:border-primary/40 transition-all group">
                <item.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
              Let's discuss your project
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Every project is unique. Contact us to discuss your specific requirements
              and receive a custom proposal.
            </p>
            <div className="flex gap-5 justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-primary text-primary-foreground tracking-[0.15em] uppercase text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Get in Touch
              </Link>
              <Link
                to="/work"
                className="px-10 py-5 border-2 border-primary text-primary tracking-[0.15em] uppercase text-sm hover:bg-primary/5 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
