import { Link } from 'react-router';
import { DiagonalDivider } from '../components/DiagonalDivider';
import { ScrollReveal } from '../components/ScrollReveal';
import { ChevronRight, Play, Award, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />

        {/* Sophisticated geometric grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }} />
        </div>

        {/* Diagonal accent lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" style={{ transform: 'rotate(-5deg)', transformOrigin: '0 0', top: '25%' }} />
          <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" style={{ transform: 'rotate(3deg)', transformOrigin: '100% 0', top: '65%' }} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 inline-block"
          >
            <div className="h-[2px] w-24 bg-primary mb-8 mx-auto" />
            <p className="text-xs tracking-[0.4em] uppercase text-primary">Premium Post-Production</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-7xl md:text-9xl tracking-tight mb-8 text-foreground"
            style={{ letterSpacing: '-0.02em' }}
          >
            Golden Studios
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl tracking-[0.15em] text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Elevating visual storytelling through precision editing,
            advanced color science, and refined motion design
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-5 justify-center items-center mt-12"
          >
            <Link
              to="/work"
              className="group px-10 py-5 bg-primary text-primary-foreground tracking-[0.15em] uppercase text-sm flex items-center gap-3 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              View Portfolio
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/services"
              className="px-10 py-5 border-2 border-primary text-primary tracking-[0.15em] uppercase text-sm hover:bg-primary/5 transition-all"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-24 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '50+', label: 'Industry Awards' },
              { number: '10+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl text-primary mb-2">{stat.number}</div>
                <p className="text-xs tracking-wider uppercase text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <DiagonalDivider />

      {/* Value Proposition */}
      <section className="py-32 bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Why Golden Studios</p>
              <h2 className="text-5xl md:text-6xl tracking-tight text-foreground mb-8">
                Industry-Leading Post-Production
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We combine technical mastery with creative vision to deliver post-production
                that exceeds industry standards. Every frame is crafted with precision.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From independent films to commercial campaigns, our studio provides
                the expertise and workflow of major production houses with personalized
                attention to your project.
              </p>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-8 text-sm tracking-wider uppercase"
              >
                Explore Our Process
                <ChevronRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Award, title: 'Award-Winning', description: 'Recognized excellence in post-production' },
                { icon: Zap, title: 'Fast Turnaround', description: 'Professional efficiency without compromise' },
                { icon: Users, title: 'Expert Team', description: 'Seasoned professionals across all disciplines' },
                { icon: ChevronRight, title: 'Custom Solutions', description: 'Tailored workflows for your needs' },
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border p-6 hover:border-primary/40 transition-all group">
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-sm mb-2 text-foreground tracking-wide">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <DiagonalDivider />

      {/* Featured Work */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-20 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Selected Work</p>
              <h2 className="text-5xl md:text-6xl tracking-tight text-foreground">Recent Projects</h2>
            </div>
            <Link
              to="/work"
              className="text-sm tracking-wider uppercase text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group"
            >
              View All Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: 'Nocturne', category: 'Color Grading', client: 'Independent Film', slug: 'nocturne' },
              { title: 'Velocity', category: 'Editing & Motion', client: 'Commercial Campaign', slug: 'velocity' },
            ].map((project, index) => (
              <Link
                key={index}
                to={`/case-study/${project.slug}`}
                className="group relative aspect-[16/10] bg-card border border-border overflow-hidden hover:border-primary/40 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/70" />

                {/* Diagonal overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-primary/5" style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)',
                  }} />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    <Play className="w-7 h-7 text-primary ml-1" fill="#d4af37" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background/95 to-transparent">
                  <p className="text-xs tracking-[0.25em] uppercase text-primary mb-2">{project.category}</p>
                  <h3 className="text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider />

      {/* Services Overview */}
      <section className="py-32 bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Expertise</p>
            <h2 className="text-5xl md:text-6xl tracking-tight text-foreground mb-6">
              Comprehensive Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Full-spectrum post-production capabilities designed for modern content creators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Color Grading',
                description: 'Professional color correction and grading using DaVinci Resolve. From natural correction to stylized looks, we deliver cinematic color that serves your story.',
                features: ['LUT Creation', 'HDR Mastering', 'Film Emulation', 'Color Matching'],
              },
              {
                title: 'Editorial Services',
                description: 'Expert editing across all formats. Narrative assembly, pacing, and structural refinement that transforms raw footage into polished content.',
                features: ['Narrative Editing', 'Trailer Cutting', 'Multi-Cam Editing', 'Rough Cut to Final'],
              },
              {
                title: 'Motion Graphics',
                description: 'Dynamic motion design and visual effects. Title sequences, lower thirds, and animated graphics that elevate production value.',
                features: ['Title Design', 'VFX Compositing', '2D/3D Animation', 'Logo Animation'],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border p-10 hover:border-primary/40 transition-all group"
              >
                <h3 className="text-2xl mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn More
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider />

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl tracking-tight text-foreground mb-8">
              Ready to elevate your project?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's discuss how our post-production expertise can bring your vision to life
              with precision and creative excellence.
            </p>
            <div className="flex gap-5 justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-primary text-primary-foreground tracking-[0.15em] uppercase text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Start a Project
              </Link>
              <Link
                to="/about"
                className="px-10 py-5 border-2 border-primary text-primary tracking-[0.15em] uppercase text-sm hover:bg-primary/5 transition-all"
              >
                About the Studio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
