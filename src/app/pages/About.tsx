import { Award, Users, Zap, Target } from 'lucide-react';
import { Link } from 'react-router';

export function About() {
  const skills = [
    'DaVinci Resolve Studio',
    'Adobe Premiere Pro',
    'After Effects',
    'Final Cut Pro',
    'Avid Media Composer',
    'Cinema 4D',
    'Nuke',
    'ProTools',
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every frame matters. We approach post-production with technical rigor and attention to detail that ensures broadcast-quality results.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Industry-recognized work that meets the standards of major studios while maintaining the agility of a boutique operation.',
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'Streamlined workflows and professional project management deliver fast turnaround without sacrificing quality.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We view every client relationship as a creative collaboration built on clear communication and mutual respect.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '50+', label: 'Industry Awards' },
    { number: '10+', label: 'Years in Business' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <div className="h-[2px] w-24 bg-primary mb-8" />
          <h1 className="text-6xl md:text-7xl tracking-tight mb-8 text-foreground">
            About Golden Studios
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            A premium post-production house delivering industry-leading editing, color grading,
            and motion design services.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-32 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7 space-y-6">
            <p className="text-xl text-foreground leading-relaxed">
              Founded in 2015, Golden Studios has become a trusted name in post-production,
              serving filmmakers, brands, and content creators who demand professional excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our studio combines the technical capabilities of major post houses with the
              creative flexibility and personalized service of a boutique operation. We've built
              our reputation on delivering broadcast-quality work across features, commercials,
              documentaries, and branded content.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What sets us apart is our holistic approach to post-production. We don't just
              execute technical tasks—we're creative partners who understand how editing rhythm,
              color psychology, and motion design work together to serve the story. Every project
              receives the same level of craft and attention, whether it's a 30-second commercial
              or a feature-length documentary.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team brings decades of combined experience from major studios, independent
              productions, and commercial campaigns. This diverse background allows us to adapt
              to any creative vision while maintaining the technical standards required for
              professional distribution.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="bg-secondary border border-border p-10">
              <h3 className="text-xl text-foreground mb-8">By the Numbers</h3>
              <div className="space-y-8">
                {stats.map((stat, index) => (
                  <div key={index} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <div className="text-4xl text-primary mb-2">{stat.number}</div>
                    <p className="text-sm tracking-wider uppercase text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-32">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Values</p>
            <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border p-10 hover:border-primary/40 transition-all group"
              >
                <value.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-32 bg-secondary border border-border p-12">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Technical Expertise</p>
            <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-6">
              Industry-Standard Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We invest in the same professional tools used by major studios, ensuring
              compatibility, reliability, and the highest quality output.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-4 bg-background border border-border text-foreground hover:border-primary/40 transition-all text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Studio Philosophy */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border-2 border-primary/20 p-12">
              <div className="text-center mb-8">
                <div className="h-[2px] w-16 bg-primary mb-6 mx-auto" />
                <h3 className="text-2xl text-foreground mb-4">Our Philosophy</h3>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Post-production is where vision becomes reality. The difference between good
                  and exceptional lies in the details—the precision of a color grade, the rhythm
                  of an edit, the polish of motion design.
                </p>
                <p>
                  We believe that technical mastery and creative vision are inseparable. Every
                  technical decision is made in service of the story. Every creative choice is
                  grounded in professional craft.
                </p>
                <p className="text-primary text-xl italic text-center pt-4">
                  Excellence is not an accident. It's the result of intentional choices,
                  refined skills, and unwavering attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t-2 border-border pt-16 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
            Ready to work together?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you're an independent filmmaker or a major brand, we bring the same
            level of professionalism and creative excellence to every project.
          </p>
          <div className="flex gap-5 justify-center">
            <Link
              to="/contact"
              className="px-10 py-5 bg-primary text-primary-foreground tracking-[0.15em] uppercase text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Start a Conversation
            </Link>
            <Link
              to="/process"
              className="px-10 py-5 border-2 border-primary text-primary tracking-[0.15em] uppercase text-sm hover:bg-primary/5 transition-all"
            >
              Our Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
