import { Outlet, Link } from 'react-router';
import { Navigation } from './Navigation';
import { Logo } from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Root() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer className="border-t-2 border-border bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <Logo className="w-16 h-16 mb-6" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Premium post-production services for filmmakers and brands who demand excellence.
              </p>
              <div className="h-[1px] w-12 bg-primary" />
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                {[
                  { path: '/about', label: 'About Us' },
                  { path: '/process', label: 'Our Process' },
                  { path: '/clients', label: 'Clients' },
                  { path: '/awards', label: 'Awards' },
                  { path: '/careers', label: 'Careers' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
                Resources
              </h3>
              <ul className="space-y-3">
                {[
                  { path: '/work', label: 'Portfolio' },
                  { path: '/services', label: 'Services' },
                  { path: '/blog', label: 'Blog & Insights' },
                  { path: '/faq', label: 'FAQ' },
                  { path: '/contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:hello@goldenstudios.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@goldenstudios.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+13105551234"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (310) 555-1234
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Los Angeles, CA
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>© {new Date().getFullYear()} Golden Studios</span>
                <span>•</span>
                <span>All rights reserved</span>
              </div>
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
