import { MessageSquare, FileCheck, Palette, Eye, CheckCircle, Package } from 'lucide-react';
import { Link } from 'react-router';

export function Process() {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Discovery & Consultation',
      description: 'We begin every project with a detailed consultation to understand your vision, goals, and technical requirements.',
      details: [
        'Initial project brief and creative discussion',
        'Technical assessment of source material',
        'Timeline and milestone planning',
        'Budget and deliverable specification',
        'Reference material review',
      ],
      duration: '1-2 days',
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Asset Organization & Prep',
      description: 'Proper preparation ensures efficient workflows. We organize, conform, and optimize all project assets before creative work begins.',
      details: [
        'Media ingestion and backup',
        'Footage organization and metadata',
        'Proxy creation for editing',
        'Audio sync and conforming',
        'Project structure setup',
      ],
      duration: '2-3 days',
    },
    {
      number: '03',
      icon: Palette,
      title: 'Creative Execution',
      description: 'Our team executes the core creative work—editing, color grading, motion design—with precision and artistic vision.',
      details: [
        'Initial assembly or rough cut',
        'Creative development and refinement',
        'Color correction and grading',
        'Motion graphics and VFX',
        'Sound design coordination',
      ],
      duration: '1-3 weeks',
    },
    {
      number: '04',
      icon: Eye,
      title: 'Client Review & Revision',
      description: 'Structured review rounds ensure the final product aligns with your vision. We incorporate feedback efficiently and professionally.',
      details: [
        'Internal quality review',
        'Client preview delivery',
        'Feedback collection and analysis',
        'Revision implementation',
        'Follow-up review rounds',
      ],
      duration: '3-7 days per round',
    },
    {
      number: '05',
      icon: CheckCircle,
      title: 'Final Polish & QC',
      description: 'Before delivery, every project undergoes rigorous quality control and final refinements to ensure broadcast-ready standards.',
      details: [
        'Final color and audio polish',
        'Technical quality control',
        'Compliance and spec verification',
        'Multiple format testing',
        'Final client approval',
      ],
      duration: '2-4 days',
    },
    {
      number: '06',
      icon: Package,
      title: 'Delivery & Archive',
      description: 'We deliver your finished project in all required formats and maintain organized archives for future needs.',
      details: [
        'Master file delivery',
        'Format-specific encoding',
        'Deliverable verification',
        'Project archival and documentation',
        'Post-delivery support',
      ],
      duration: '1-2 days',
    },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <div className="h-[2px] w-24 bg-primary mb-8" />
          <h1 className="text-6xl md:text-7xl tracking-tight mb-8 text-foreground">
            Our Process
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A proven workflow refined through hundreds of projects. Our systematic approach
            ensures efficiency, quality, and transparency from initial consultation through
            final delivery.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-20 mb-32">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number - Large Background */}
              <div className="absolute -left-4 top-0 text-[150px] font-bold text-primary/5 leading-none select-none" style={{ fontFamily: 'Space Grotesk' }}>
                {step.number}
              </div>

              <div className="relative grid md:grid-cols-12 gap-8 items-start">
                {/* Left: Icon & Title */}
                <div className="md:col-span-5">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 border-2 border-primary flex items-center justify-center flex-shrink-0 bg-background">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
                        Step {step.number}
                      </div>
                      <h2 className="text-3xl tracking-tight text-foreground mb-3">
                        {step.title}
                      </h2>
                      <div className="inline-block px-3 py-1 bg-secondary border border-border text-xs text-muted-foreground">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Right: Details */}
                <div className="md:col-span-7 bg-card border border-border p-8">
                  <h3 className="text-sm tracking-[0.2em] uppercase text-primary mb-6">
                    Key Activities
                  </h3>
                  <div className="space-y-4">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="w-1.5 h-1.5 bg-primary mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="mt-20 ml-7 h-16 w-[2px] bg-gradient-to-b from-primary/40 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Principles Section */}
        <div className="border-t-2 border-border pt-32">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Core Principles</p>
            <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparency',
                description: 'Clear communication at every stage. You always know where your project stands, what\'s next, and why decisions are made.',
              },
              {
                title: 'Efficiency',
                description: 'Streamlined workflows that respect your timeline. Fast turnaround without compromising quality or creative vision.',
              },
              {
                title: 'Collaboration',
                description: 'Your input shapes the final product. We view every project as a creative partnership built on mutual respect.',
              },
              {
                title: 'Technical Excellence',
                description: 'Industry-standard tools and workflows. Broadcast-quality deliverables that meet the most demanding specifications.',
              },
              {
                title: 'Creative Vision',
                description: 'Technical mastery in service of storytelling. Every decision is made to enhance narrative impact and visual quality.',
              },
              {
                title: 'Reliability',
                description: 'Consistent delivery, professional communication, and dependable results. Your deadlines become our deadlines.',
              },
            ].map((principle, index) => (
              <div key={index} className="bg-secondary border border-border p-8 hover:border-primary/40 transition-all group">
                <div className="h-[2px] w-12 bg-primary mb-6 group-hover:w-16 transition-all" />
                <h3 className="text-xl text-foreground mb-4">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Overview */}
        <div className="mt-32">
          <div className="bg-card border border-border p-12">
            <h3 className="text-2xl text-foreground mb-8 flex items-center gap-4">
              <div className="h-[2px] w-12 bg-primary" />
              Typical Project Timeline
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { label: 'Short-Form Content', time: '1-2 weeks', description: 'Social media, ads, promos' },
                { label: 'Standard Projects', time: '3-4 weeks', description: 'Brand films, music videos' },
                { label: 'Long-Form Content', time: '6-8 weeks', description: 'Documentaries, features' },
                { label: 'Complex Productions', time: '8-12 weeks', description: 'Multi-episode, VFX-heavy' },
              ].map((timeline, index) => (
                <div key={index} className="border border-border p-6 hover:border-primary/40 transition-all">
                  <div className="text-3xl text-primary mb-3">{timeline.time}</div>
                  <div className="text-sm text-foreground mb-2 tracking-wide">{timeline.label}</div>
                  <div className="text-xs text-muted-foreground">{timeline.description}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-8 text-center">
              Timelines vary based on project complexity, revision rounds, and source material.
              Rush delivery available for time-sensitive projects.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get in touch to discuss your timeline, requirements, and creative vision.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-primary text-primary-foreground tracking-[0.15em] uppercase text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
