import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    {
      title: 'Services & Capabilities',
      questions: [
        {
          question: 'What post-production services does Golden Studios offer?',
          answer: 'We provide comprehensive post-production services including color grading and correction, editorial services (editing, assembly, finishing), motion graphics and VFX, sound design coordination, finishing and mastering, format transcoding, and technical consulting. We work across all content types: features, documentaries, commercials, branded content, and social media.',
        },
        {
          question: 'What software and tools do you use?',
          answer: 'We use industry-standard professional tools: DaVinci Resolve Studio for color grading, Adobe Premiere Pro and Avid Media Composer for editing, After Effects and Cinema 4D for motion graphics, ProTools for audio finishing, and Nuke for advanced VFX work. All systems are kept current with the latest versions and updates.',
        },
        {
          question: 'Can you handle HDR and Dolby Vision content?',
          answer: 'Yes, we are fully equipped for HDR workflows including Dolby Vision, HDR10, and HLG. Our colorists are Dolby Vision certified and we maintain calibrated HDR monitoring for accurate preview and quality control.',
        },
        {
          question: 'Do you work with remote clients?',
          answer: 'Absolutely. While we\'re based in Los Angeles, we regularly collaborate with clients worldwide. We offer secure file transfer, remote review sessions via frame.io and similar platforms, and video conferencing for creative discussions. Many of our projects are completed entirely remotely.',
        },
      ],
    },
    {
      title: 'Process & Workflow',
      questions: [
        {
          question: 'What is your typical project timeline?',
          answer: 'Timelines vary by project complexity. Short-form content (ads, social media) typically takes 1-2 weeks. Standard projects (brand films, music videos) take 3-4 weeks. Long-form content (documentaries, features) requires 6-8 weeks. Complex productions with heavy VFX may take 8-12 weeks. We also offer rush delivery for time-sensitive projects.',
        },
        {
          question: 'How many revision rounds are included?',
          answer: 'Our standard workflow includes two revision rounds for color grading projects and three rounds for editorial projects. Additional revisions can be accommodated and are billed hourly. We find that clear communication during the initial consultation minimizes the need for extensive revisions.',
        },
        {
          question: 'What formats do you accept for delivery?',
          answer: 'We accept virtually any professional camera format: RED, ARRI, Sony, Blackmagic, Canon, etc. For footage delivery, we work with native camera files, ProRes, DNxHD/HR, and other professional codecs. We can also work with existing project files from Premiere, Avid, Final Cut Pro, and DaVinci Resolve.',
        },
        {
          question: 'How do you handle project files and archival?',
          answer: 'All projects are backed up to redundant storage during production. Upon completion, we maintain project archives for 12 months including all project files, media, and deliverables. Extended archival can be arranged. We can deliver project files back to clients for future modifications.',
        },
      ],
    },
    {
      title: 'Pricing & Payments',
      questions: [
        {
          question: 'How is pricing determined?',
          answer: 'Pricing is project-specific and based on scope, complexity, timeline, and deliverable requirements. Color grading is typically priced per minute of finished content or per day. Editing can be priced per project or hourly depending on scope. Motion graphics are quoted per project. We provide detailed estimates after an initial consultation.',
        },
        {
          question: 'Do you offer package rates or retainer agreements?',
          answer: 'Yes, we offer discounted package rates for multi-project commitments and monthly retainer agreements for clients with ongoing needs. Retainers provide priority scheduling and reduced hourly rates. Contact us to discuss custom arrangements.',
        },
        {
          question: 'What is your payment structure?',
          answer: 'For most projects, we require a 50% deposit upon project commencement with the remaining balance due upon delivery. For longer projects, we can arrange milestone-based payments. We accept bank transfers, checks, and major credit cards. Net 30 terms available for established clients.',
        },
        {
          question: 'Are there any additional costs I should expect?',
          answer: 'Our quotes are comprehensive and include all standard post-production work. Additional costs may arise for: stock footage/music licensing, specialized plugins or tools, rush delivery fees, extended archival storage, or on-location services. Any additional costs are discussed and approved before being incurred.',
        },
      ],
    },
    {
      title: 'Technical Requirements',
      questions: [
        {
          question: 'What are your technical delivery specifications?',
          answer: 'We deliver in any format required by your distribution platform: ProRes 422/4444, DNxHD/HR, H.264/H.265, DCP for theatrical, broadcast specs for television, and optimized files for streaming platforms. We can also provide multiple format versions from a single master.',
        },
        {
          question: 'How should I prepare my footage for delivery to you?',
          answer: 'Organize footage by scene or take, include all necessary audio files, provide any reference materials or LUTs, and ensure files are backed up before transfer. We can provide detailed technical specifications based on your camera system. For editorial projects, include any existing cuts or assembly sequences.',
        },
        {
          question: 'What is your file transfer process?',
          answer: 'For smaller projects (under 100GB), we use secure cloud transfer services like Dropbox, Google Drive, or WeTransfer. For larger projects, we use dedicated services like Aspera, or clients can ship hard drives. We provide secure FTP for ongoing projects and can coordinate with your preferred transfer method.',
        },
        {
          question: 'Do you provide color-accurate monitoring for client reviews?',
          answer: 'Yes, our facility includes calibrated reference monitors for accurate color viewing. For remote reviews, we provide detailed viewing instructions and recommend calibrated monitors when possible. We use professional review platforms that maintain color accuracy during streaming.',
        },
      ],
    },
    {
      title: 'Collaboration & Communication',
      questions: [
        {
          question: 'Can I be present during the color grading or editing session?',
          answer: 'Absolutely. We welcome client attendance for grading and editing sessions. For local clients, you can visit our studio. For remote clients, we offer real-time collaborative sessions via video conferencing with high-quality stream of our workstation. Many clients prefer this hands-on approach.',
        },
        {
          question: 'How do you handle feedback and revisions?',
          answer: 'We use professional review platforms like frame.io that allow timecode-specific comments and annotations. Feedback can be provided via these platforms, email, or scheduled video calls. We consolidate all feedback and implement changes efficiently, providing updated versions for your review.',
        },
        {
          question: 'What if I need changes after final delivery?',
          answer: 'We offer a 30-day window after delivery for minor adjustments at no charge (typo corrections, small timing adjustments, etc.). Larger revisions or changes after this period are billed at our standard hourly rate. We maintain project archives for 12 months to facilitate any needed changes.',
        },
        {
          question: 'How quickly do you respond to communications?',
          answer: 'We aim to respond to all inquiries within 24 hours during business days. During active projects, response times are typically much faster—often within a few hours. For urgent matters during projects, we provide direct contact information for immediate communication.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 max-w-4xl mx-auto text-center">
          <div className="h-[2px] w-24 bg-primary mb-8 mx-auto" />
          <h1 className="text-6xl md:text-7xl tracking-tight mb-8 text-foreground">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about working with Golden Studios. Can't find
            what you're looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="mb-8">
                <h2 className="text-3xl tracking-tight text-foreground mb-2">
                  {category.title}
                </h2>
                <div className="h-[2px] w-16 bg-primary" />
              </div>

              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-card border border-border hover:border-primary/40 transition-all"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-8 py-6 flex items-start justify-between gap-4 text-left"
                      >
                        <span className="text-lg text-foreground pr-8">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-8 pb-6">
                          <div className="h-[1px] bg-border mb-6" />
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="bg-secondary border border-border p-12 text-center">
            <h2 className="text-3xl tracking-tight text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're here to help. Get in touch and we'll provide detailed answers
              specific to your project needs.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-5 bg-primary text-primary-foreground tracking-[0.15em] uppercase text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Contact Us
              </a>
              <a
                href="mailto:hello@goldenstudios.com"
                className="px-10 py-5 border-2 border-primary text-primary tracking-[0.15em] uppercase text-sm hover:bg-primary/5 transition-all"
              >
                Email Directly
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 max-w-4xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Explore more about our services:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: 'Services Overview', path: '/services' },
              { label: 'Our Process', path: '/process' },
              { label: 'View Our Work', path: '/work' },
              { label: 'Client Testimonials', path: '/clients' },
              { label: 'Awards & Recognition', path: '/awards' },
            ].map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="px-5 py-2.5 bg-card border border-border text-sm text-foreground hover:border-primary/40 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
