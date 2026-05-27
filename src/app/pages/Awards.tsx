import { Award, Trophy, Medal, Star, ExternalLink } from 'lucide-react';

export function Awards() {
  const awards = [
    {
      year: '2026',
      awards: [
        {
          title: 'Best Color Grading - Feature Film',
          organization: 'Hollywood Post Alliance',
          project: 'Nocturne',
          category: 'Color',
        },
        {
          title: 'Excellence in Editing',
          organization: 'American Cinema Editors',
          project: 'Velocity Campaign',
          category: 'Editorial',
        },
        {
          title: 'Outstanding Motion Graphics',
          organization: 'Motion Design Awards',
          project: 'Ethereal',
          category: 'Motion',
        },
      ],
    },
    {
      year: '2025',
      awards: [
        {
          title: 'Best Post-Production - Commercial',
          organization: 'Clio Awards',
          project: 'Apex Automotive Campaign',
          category: 'Full Service',
        },
        {
          title: 'Color Grading Excellence',
          organization: 'Colorist Society International',
          project: 'Meridian',
          category: 'Color',
        },
        {
          title: 'Best Short Form Content',
          organization: 'Webby Awards',
          project: 'Lumina Brand Film',
          category: 'Editorial',
        },
        {
          title: 'Technical Achievement Award',
          organization: 'SMPTE',
          project: 'Workflow Innovation',
          category: 'Technical',
        },
      ],
    },
    {
      year: '2024',
      awards: [
        {
          title: 'Post-Production Studio of the Year',
          organization: 'Post Magazine',
          project: 'Overall Excellence',
          category: 'Studio',
        },
        {
          title: 'Best Visual Effects - Independent Film',
          organization: 'Visual Effects Society',
          project: 'Parallax',
          category: 'VFX',
        },
        {
          title: 'Outstanding Color Correction',
          organization: 'HPA Awards',
          project: 'Documentary Series',
          category: 'Color',
        },
      ],
    },
  ];

  const press = [
    {
      publication: 'Post Magazine',
      title: 'Rising Stars in Post-Production: Golden Studios',
      date: 'March 2026',
      excerpt: 'A boutique studio delivering major-studio quality with personalized service.',
    },
    {
      publication: 'American Cinematographer',
      title: 'Color Science: Inside the Grade for "Nocturne"',
      date: 'January 2026',
      excerpt: 'How Golden Studios achieved the film\'s signature noir aesthetic.',
    },
    {
      publication: 'Variety',
      title: 'The New Wave of Post-Production Excellence',
      date: 'November 2025',
      excerpt: 'Small studios making big impacts on independent film.',
    },
    {
      publication: 'The Hollywood Reporter',
      title: 'Post-Production Partnerships That Elevate Content',
      date: 'September 2025',
      excerpt: 'Why filmmakers are choosing boutique post houses.',
    },
  ];

  const certifications = [
    { name: 'DaVinci Resolve Certified Colorist', org: 'Blackmagic Design' },
    { name: 'Avid Certified Professional', org: 'Avid Technology' },
    { name: 'Adobe Certified Expert', org: 'Adobe Systems' },
    { name: 'Apple Certified Pro - Final Cut Pro', org: 'Apple Inc.' },
    { name: 'Dolby Vision Certified', org: 'Dolby Laboratories' },
    { name: 'HDR Technical Specialist', org: 'Ultra HD Forum' },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <div className="h-[2px] w-24 bg-primary mb-8" />
          <h1 className="text-6xl md:text-7xl tracking-tight mb-8 text-foreground">
            Awards & Recognition
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Industry recognition for excellence in post-production. Our work has been
            honored by leading organizations in film, television, and commercial production.
          </p>
        </div>

        {/* Awards by Year */}
        <div className="mb-32">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Industry Awards
            </p>
            <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
              Recognized Excellence
            </h2>
          </div>

          {awards.map((yearGroup, yearIndex) => (
            <div key={yearIndex} className="mb-20 last:mb-0">
              <div className="flex items-center gap-6 mb-10">
                <div className="text-6xl text-primary/20" style={{ fontFamily: 'Space Grotesk' }}>
                  {yearGroup.year}
                </div>
                <div className="h-[2px] flex-1 bg-border" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {yearGroup.awards.map((award, awardIndex) => (
                  <div
                    key={awardIndex}
                    className="bg-card border border-border p-8 hover:border-primary/40 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 border border-primary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Trophy className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs tracking-wider uppercase text-primary px-3 py-1 bg-primary/10 border border-primary/20">
                        {award.category}
                      </span>
                    </div>

                    <h3 className="text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {award.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-2">
                      {award.organization}
                    </p>

                    <p className="text-sm text-primary italic">
                      Project: {award.project}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Press & Media */}
        <div className="mb-32 bg-secondary border border-border p-16">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Press Coverage
            </p>
            <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-6">
              Featured In
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {press.map((item, index) => (
              <div
                key={index}
                className="bg-background border border-border p-8 hover:border-primary/40 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-xs tracking-wider uppercase text-primary">
                    {item.publication}
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {item.excerpt}
                </p>

                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="mb-32">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Professional Standards
            </p>
            <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
              Certifications & Accreditations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Our team maintains industry certifications and technical accreditations
              to ensure we're always working with the latest standards and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 hover:border-primary/40 transition-all group"
              >
                <Medal className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-foreground mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.org}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Memberships */}
        <div className="mb-32">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Industry Affiliations
            </p>
            <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-6">
              Professional Memberships
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Hollywood Post Alliance',
              'American Cinema Editors',
              'Visual Effects Society',
              'Colorist Society International',
              'Motion Picture Editors Guild',
              'Society of Motion Picture & Television Engineers',
              'Producers Guild of America',
              'International Cinematographers Guild',
            ].map((org, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 text-center hover:border-primary/40 transition-all"
              >
                <Star className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-sm text-foreground">{org}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t-2 border-border pt-16 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
            Award-Winning Quality for Your Project
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Experience the same level of excellence that has earned industry recognition.
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
