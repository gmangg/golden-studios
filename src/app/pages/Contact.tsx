import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <div className="h-[2px] w-24 bg-primary mb-8 mx-auto" />
          <h1 className="text-6xl md:text-7xl tracking-tight mb-8 text-foreground">
            Let's Talk
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to start your project? Get in touch and let's discuss how
            we can bring your vision to life with professional post-production.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-16 mb-24">
          {/* Contact Info - Sidebar */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-8">
                Contact Information
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 tracking-wide">Email</p>
                    <a
                      href="mailto:hello@goldenstudios.com"
                      className="text-foreground hover:text-primary transition-colors text-lg"
                    >
                      hello@goldenstudios.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 tracking-wide">Phone</p>
                    <a
                      href="tel:+13105551234"
                      className="text-foreground hover:text-primary transition-colors text-lg"
                    >
                      +1 (310) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 tracking-wide">Studio</p>
                    <p className="text-foreground text-lg">Los Angeles, CA</p>
                    <p className="text-sm text-muted-foreground mt-1">Remote collaboration available</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 border border-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 tracking-wide">Hours</p>
                    <p className="text-foreground">Mon - Fri: 9AM - 6PM PST</p>
                    <p className="text-sm text-muted-foreground mt-1">Weekend availability for urgent projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-border">
              <h3 className="text-lg text-foreground mb-4">What to Expect</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                  <span>Initial response within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                  <span>Detailed project consultation call</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                  <span>Custom proposal with timeline and pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                  <span>No obligation, no pressure approach</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-card border border-border p-10">
              <h2 className="text-2xl text-foreground mb-8 flex items-center gap-3">
                <Send className="w-6 h-6 text-primary" />
                Project Inquiry
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs tracking-[0.2em] uppercase text-primary mb-3"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-input-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs tracking-[0.2em] uppercase text-primary mb-3"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-input-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs tracking-[0.2em] uppercase text-primary mb-3"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-input-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="color-grading">Color Grading</option>
                      <option value="editing">Editing</option>
                      <option value="motion-design">Motion Design</option>
                      <option value="full-post">Full Post-Production</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs tracking-[0.2em] uppercase text-primary mb-3"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-input-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                      <option value="tbd">To Be Discussed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-xs tracking-[0.2em] uppercase text-primary mb-3"
                  >
                    Timeline
                  </label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-input-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="e.g., 4 weeks, flexible, ASAP"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-[0.2em] uppercase text-primary mb-3"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={8}
                    className="w-full px-5 py-4 bg-input-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-10 py-5 bg-primary text-primary-foreground tracking-[0.15em] uppercase text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
