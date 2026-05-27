import { Briefcase, MapPin, Clock, DollarSign, ChevronRight } from 'lucide-react';

export function Careers() {
  const positions = [
    {
      title: 'Senior Colorist',
      department: 'Color Department',
      type: 'Full-Time',
      location: 'Los Angeles, CA',
      salary: '$80k - $120k',
      description: 'We\'re seeking an experienced colorist with a strong portfolio in narrative and commercial work. You\'ll work directly with directors and cinematographers on high-profile projects.',
      requirements: [
        '5+ years professional color grading experience',
        'Expert proficiency in DaVinci Resolve Studio',
        'Strong understanding of color science and HDR workflows',
        'Excellent client communication skills',
        'Portfolio demonstrating range across genres',
      ],
    },
    {
      title: 'Lead Editor',
      department: 'Editorial',
      type: 'Full-Time',
      location: 'Los Angeles, CA / Remote',
      salary: '$70k - $100k',
      description: 'Join our editorial team to work on diverse projects from documentaries to commercials. We value storytelling ability and technical expertise equally.',
      requirements: [
        '4+ years professional editing experience',
        'Proficiency in Premiere Pro and/or Avid Media Composer',
        'Strong narrative sensibility',
        'Experience with multi-cam and interview-based content',
        'Ability to work independently and collaboratively',
      ],
    },
    {
      title: 'Motion Graphics Designer',
      department: 'Motion Design',
      type: 'Full-Time',
      location: 'Los Angeles, CA',
      salary: '$65k - $95k',
      description: 'Create compelling motion graphics for commercial and branded content. You\'ll design everything from title sequences to complex animated infographics.',
      requirements: [
        '3+ years motion design experience',
        'Expert in After Effects, proficiency in Cinema 4D preferred',
        'Strong design fundamentals and typography skills',
        'Experience with 2D and 3D animation workflows',
        'Portfolio demonstrating creative range',
      ],
    },
    {
      title: 'Junior Colorist',
      department: 'Color Department',
      type: 'Full-Time',
      location: 'Los Angeles, CA',
      salary: '$50k - $65k',
      description: 'Entry-level position for aspiring colorists. You\'ll assist senior colorists, manage projects, and develop your grading skills on real productions.',
      requirements: [
        '1-2 years experience or relevant education',
        'Working knowledge of DaVinci Resolve',
        'Understanding of video formats and color spaces',
        'Strong organizational skills',
        'Eagerness to learn and grow',
      ],
    },
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Industry-competitive salaries with annual reviews and performance bonuses.',
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance. Mental health support included.',
    },
    {
      title: 'Flexible Schedule',
      description: 'Flexible hours and remote work options for eligible positions.',
    },
    {
      title: 'Professional Development',
      description: 'Training budget for conferences, workshops, and software certifications.',
    },
    {
      title: 'Creative Environment',
      description: 'Work on diverse, high-quality projects with talented collaborators.',
    },
    {
      title: 'Equipment & Tools',
      description: 'Access to industry-leading hardware and software.',
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we deliver.',
    },
    {
      title: 'Collaboration',
      description: 'Great work emerges from talented people working together.',
    },
    {
      title: 'Growth',
      description: 'We invest in developing skills and expanding capabilities.',
    },
    {
      title: 'Integrity',
      description: 'Honest communication and ethical practice guide all decisions.',
    },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <div className="h-[2px] w-24 bg-primary mb-8" />
          <h1 className="text-6xl md:text-7xl tracking-tight mb-8 text-foreground">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Golden Studios is built on the talent and dedication of our team. We're always
            looking for skilled professionals who share our commitment to excellence in
            post-production.
          </p>
        </div>

        {/* Culture Section */}
        <div className="mb-32 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-6">
              Why Golden Studios?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                We're a boutique post-production house that punches above our weight. Our
                team works on award-winning films, high-profile commercials, and compelling
                branded content.
              </p>
              <p>
                What sets us apart is our culture: we value craft over volume, collaboration
                over competition, and continuous learning over static expertise. Every team
                member contributes to creative decisions.
              </p>
              <p>
                We offer the creative challenges of a major studio with the tight-knit
                culture and individual recognition of a boutique operation.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl text-foreground mb-8">Our Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="border-l-2 border-primary pl-6">
                  <h4 className="text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-32">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Open Positions
            </p>
            <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
              Current Opportunities
            </h2>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-card border border-border hover:border-primary/40 transition-all"
              >
                <div className="p-8 md:p-10">
                  {/* Position Header */}
                  <div className="mb-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl text-foreground mb-3">
                          {position.title}
                        </h3>
                        <p className="text-primary tracking-wide">{position.department}</p>
                      </div>
                      <button className="px-8 py-4 bg-primary text-primary-foreground tracking-[0.15em] uppercase text-sm hover:bg-primary/90 transition-all">
                        Apply Now
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        {position.salary}
                      </div>
                    </div>
                  </div>

                  {/* Position Details */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
                        About the Role
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {position.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm tracking-[0.2em] uppercase text-primary mb-4">
                        Requirements
                      </h4>
                      <ul className="space-y-3">
                        {position.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-32 bg-secondary border border-border p-16">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Benefits & Perks
            </p>
            <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-6">
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="h-[2px] w-12 bg-primary mb-6" />
                <h3 className="text-lg text-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-32">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              How to Apply
            </p>
            <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-6">
              Application Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Submit Application',
                description: 'Send your resume, portfolio/reel, and cover letter to careers@goldenstudios.com',
              },
              {
                step: '02',
                title: 'Initial Review',
                description: 'Our team reviews applications. We respond to all qualified candidates within one week.',
              },
              {
                step: '03',
                title: 'Interview Process',
                description: 'Selected candidates complete 2-3 interviews including technical assessment and portfolio review.',
              },
              {
                step: '04',
                title: 'Offer & Onboarding',
                description: 'Successful candidates receive an offer and begin comprehensive onboarding.',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl text-primary/20 mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                  {item.step}
                </div>
                <h3 className="text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* No Open Positions CTA */}
        <div className="bg-card border-2 border-primary/20 p-12 text-center">
          <h2 className="text-3xl tracking-tight text-foreground mb-4">
            Don't See a Fit?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always interested in connecting with talented professionals. Send us your
            information and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@goldenstudios.com"
            className="inline-block px-10 py-5 bg-primary text-primary-foreground tracking-[0.15em] uppercase text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Send General Inquiry
          </a>
        </div>
      </div>
    </div>
  );
}
