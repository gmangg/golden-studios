import { useParams, Link } from 'react-router';
import { ChevronRight, Calendar, User, Award, Play } from 'lucide-react';

const caseStudies = {
  nocturne: {
    title: 'Nocturne',
    category: 'Color Grading',
    client: 'Independent Film',
    year: '2026',
    duration: '92 minutes',
    director: 'Sarah Chen',
    hero: {
      tagline: 'Crafting darkness with purpose',
      description: 'A moody psychological thriller requiring precise color work to maintain visual coherence across low-light cinematography while preserving emotional depth.',
    },
    challenge: 'The director\'s vision called for a desaturated, noir-inspired aesthetic that would feel contemporary rather than dated. Principal photography spanned multiple locations with varying lighting conditions, creating significant continuity challenges. The goal was to achieve a consistent, cinematic look that enhanced the psychological tension without drawing attention to itself.',
    solution: 'We developed a custom color pipeline starting with aggressive shadow detail preservation in the primary correction phase. Using DaVinci Resolve\'s color warper and HDR tools, we created a signature look characterized by deep, textured blacks, muted skin tones, and strategic color accents in key story moments. Each scene received individual attention to maintain visual flow while honoring the unique lighting of each location.',
    results: [
      'Official Selection at 3 major film festivals',
      'Best Cinematography nomination',
      'Theatrical distribution deal secured',
      'Critical acclaim for visual consistency',
    ],
    testimonial: {
      quote: 'Golden Studios understood the psychological weight that color carries in thriller cinema. Their grading work elevated the entire film, creating an atmosphere that served the story perfectly.',
      author: 'Sarah Chen',
      role: 'Director',
    },
    technical: [
      { label: 'Camera Format', value: 'RED Komodo 6K' },
      { label: 'Color Space', value: 'ACES 1.3' },
      { label: 'Delivery Format', value: 'DCP, ProRes 4444' },
      { label: 'Grading Software', value: 'DaVinci Resolve Studio' },
    ],
    relatedProjects: ['velocity', 'ethereal'],
  },
  velocity: {
    title: 'Velocity',
    category: 'Editing & Motion Design',
    client: 'Apex Automotive',
    year: '2026',
    duration: '90 seconds',
    agency: 'Brand Collective',
    hero: {
      tagline: 'Speed, precision, impact',
      description: 'A high-energy automotive commercial demanding split-second timing, dynamic motion graphics, and seamless integration of VFX elements.',
    },
    challenge: 'The client required a premium commercial feel that would compete with major automotive campaigns while working within a tighter production timeline. The spot needed to showcase vehicle performance through editing rhythm and motion design rather than relying solely on exotic locations. Multiple vehicle colors needed to be featured without disrupting visual flow.',
    solution: 'We crafted a rapid-fire editing style synchronized to a custom music track, using precise cutting on musical beats to create visceral momentum. Motion graphics were designed to feel integrated rather than applied, with HUD-style overlays and kinetic typography that emphasized performance metrics. Color grading unified footage from three different shoot days, and we seamlessly composited multiple vehicle colors into hero shots.',
    results: [
      'Campaign exceeded engagement targets by 240%',
      'Extended to multi-platform campaign',
      'Featured in industry publication Lürzer\'s Archive',
      'Led to ongoing retainer relationship',
    ],
    testimonial: {
      quote: 'The edit transformed good footage into an exceptional commercial. The pacing, graphics, and overall energy perfectly captured our brand positioning.',
      author: 'Michael Torres',
      role: 'Creative Director, Brand Collective',
    },
    technical: [
      { label: 'Edit Platform', value: 'Adobe Premiere Pro' },
      { label: 'Motion Graphics', value: 'After Effects' },
      { label: 'VFX Shots', value: '47 composited elements' },
      { label: 'Delivery Formats', value: 'Broadcast, Digital, Social' },
    ],
    relatedProjects: ['nocturne', 'apex'],
  },
  ethereal: {
    title: 'Ethereal',
    category: 'Motion Design',
    client: 'Lumina Beauty Co.',
    year: '2025',
    duration: '60 seconds',
    agency: 'Studio Forma',
    hero: {
      tagline: 'Elegance in motion',
      description: 'A luxury beauty brand launch requiring sophisticated motion design and seamless 2D/3D integration to convey premium positioning.',
    },
    challenge: 'Creating a visual identity through motion that would establish brand presence in a competitive market. The piece needed to feel aspirational without appearing cold or inaccessible, balancing technical sophistication with emotional warmth.',
    solution: 'We designed a motion language based on fluid, organic movement—simulating fabric, liquid, and light interactions. Using a combination of 2D motion design and 3D particle systems, we created abstract visuals that suggested luxury textures without literal product shots. Typography was animated with precision timing, and a warm metallic gold palette tied everything to the brand identity.',
    results: [
      'Brand launch video featured across all platforms',
      'Motion design system adopted for ongoing campaigns',
      'Social media engagement 180% above industry average',
      'Expanded project into full brand motion toolkit',
    ],
    testimonial: {
      quote: 'The motion work perfectly captured our brand essence—sophisticated, modern, and aspirational. It set the visual tone for our entire market entry.',
      author: 'Alexandra Moore',
      role: 'Brand Director, Lumina',
    },
    technical: [
      { label: 'Motion Platform', value: 'After Effects, Cinema 4D' },
      { label: 'Rendering', value: 'Redshift' },
      { label: 'Simulations', value: 'Particle systems, cloth dynamics' },
      { label: 'Delivery', value: '4K ProRes, multiple aspect ratios' },
    ],
    relatedProjects: ['lumina', 'nocturne'],
  },
};

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? caseStudies[slug as keyof typeof caseStudies] : null;

  if (!project) {
    return (
      <div className="min-h-screen py-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-foreground mb-4">Project Not Found</h1>
          <Link to="/work" className="text-primary hover:text-primary/80">
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-32">
      {/* Hero */}
      <section className="mb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-8">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
            >
              ← Back to Work
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
                {project.category}
              </p>
              <h1 className="text-6xl md:text-7xl tracking-tight mb-6 text-foreground">
                {project.title}
              </h1>
              <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
                {project.hero.tagline}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.hero.description}
              </p>
            </div>

            <div className="md:col-span-5 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-2">Client</p>
                  <p className="text-foreground">{project.client}</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-2">Year</p>
                  <p className="text-foreground">{project.year}</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-2">Duration</p>
                  <p className="text-foreground">{project.duration}</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-2">
                    {project.director ? 'Director' : 'Agency'}
                  </p>
                  <p className="text-foreground">{project.director || project.agency}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Player Placeholder */}
      <section className="mb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="aspect-video bg-card border border-border relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-primary/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-primary ml-2" fill="#d4af37" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="mb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="h-[2px] w-16 bg-primary mb-6" />
              <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-8">
                The Challenge
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <div className="h-[2px] w-16 bg-primary mb-6" />
              <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-8">
                Our Solution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mb-32 bg-secondary py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Impact</p>
            <h2 className="text-3xl md:text-4xl tracking-tight text-foreground">
              Results & Recognition
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 hover:border-primary/40 transition-all group"
              >
                <Award className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-foreground leading-relaxed">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl text-primary/20 mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl text-foreground mb-8 leading-relaxed italic">
              {project.testimonial.quote}
            </blockquote>
            <div className="h-[1px] w-16 bg-primary mb-4 mx-auto" />
            <p className="text-foreground">{project.testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="mb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="bg-card border border-border p-12">
            <h3 className="text-2xl text-foreground mb-10 flex items-center gap-4">
              <div className="h-[2px] w-12 bg-primary" />
              Technical Specifications
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {project.technical.map((spec, index) => (
                <div key={index}>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">
                    {spec.label}
                  </p>
                  <p className="text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="border-t-2 border-border pt-16 text-center">
            <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-6">
              Interested in similar work?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's discuss how we can bring this level of excellence to your project.
            </p>
            <div className="flex gap-5 justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-primary text-primary-foreground tracking-[0.15em] uppercase text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Start a Project
              </Link>
              <Link
                to="/work"
                className="px-10 py-5 border-2 border-primary text-primary tracking-[0.15em] uppercase text-sm hover:bg-primary/5 transition-all"
              >
                View More Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
