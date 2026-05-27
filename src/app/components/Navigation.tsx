import { Link, useLocation } from 'react-router';
import { Logo } from './Logo';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigation = [
    { path: '/', label: 'Home', type: 'link' },
    { path: '/work', label: 'Work', type: 'link' },
    { path: '/services', label: 'Services', type: 'link' },
    {
      label: 'Company',
      type: 'dropdown',
      items: [
        { path: '/about', label: 'About Us' },
        { path: '/process', label: 'Our Process' },
        { path: '/clients', label: 'Clients' },
        { path: '/awards', label: 'Awards & Recognition' },
        { path: '/careers', label: 'Careers' },
      ],
    },
    {
      label: 'Resources',
      type: 'dropdown',
      items: [
        { path: '/blog', label: 'Blog & Insights' },
        { path: '/faq', label: 'FAQ' },
      ],
    },
    { path: '/contact', label: 'Contact', type: 'link' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isDropdownActive = (items: { path: string }[]) => {
    return items.some(item => location.pathname.startsWith(item.path));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group z-50">
          <Logo className="w-12 h-12 transition-transform group-hover:scale-110" />
          <div className="hidden sm:block">
            <div className="text-sm tracking-[0.25em] uppercase text-foreground">
              Golden Studios
            </div>
            <div className="text-xs text-muted-foreground tracking-wider">
              Post-Production
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item, index) => {
            if (item.type === 'link') {
              const active = isActive(item.path!);
              return (
                <Link
                  key={index}
                  to={item.path!}
                  className={`text-sm tracking-[0.15em] uppercase relative transition-colors py-2 ${
                    active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary" />
                  )}
                </Link>
              );
            }

            if (item.type === 'dropdown') {
              const active = isDropdownActive(item.items!);
              const isOpen = openDropdown === item.label;

              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`text-sm tracking-[0.15em] uppercase transition-colors py-2 flex items-center gap-1 ${
                      active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border shadow-lg">
                      {item.items!.map((subItem, subIndex) => {
                        const subActive = isActive(subItem.path);
                        return (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className={`block px-6 py-4 text-sm hover:bg-secondary transition-colors ${
                              subActive ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden z-50 text-foreground hover:text-primary transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-background/98 backdrop-blur-xl lg:hidden pt-24 overflow-y-auto">
            <div className="flex flex-col items-center gap-6 px-6 py-12">
              {navigation.map((item, index) => {
                if (item.type === 'link') {
                  const active = isActive(item.path!);
                  return (
                    <Link
                      key={index}
                      to={item.path!}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl tracking-[0.15em] uppercase transition-colors ${
                        active ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                if (item.type === 'dropdown') {
                  return (
                    <div key={index} className="text-center">
                      <div className="text-lg tracking-[0.2em] uppercase text-primary mb-4">
                        {item.label}
                      </div>
                      <div className="space-y-3">
                        {item.items!.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
