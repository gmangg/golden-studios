import { createBrowserRouter } from 'react-router';
import { Root } from './components/Root';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Services } from './pages/Services';
import { Process } from './pages/Process';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CaseStudy } from './pages/CaseStudy';
import { Clients } from './pages/Clients';
import { Awards } from './pages/Awards';
import { FAQ } from './pages/FAQ';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Careers } from './pages/Careers';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'work', Component: Work },
      { path: 'services', Component: Services },
      { path: 'process', Component: Process },
      { path: 'about', Component: About },
      { path: 'clients', Component: Clients },
      { path: 'awards', Component: Awards },
      { path: 'faq', Component: FAQ },
      { path: 'blog', Component: Blog },
      { path: 'blog/:slug', Component: BlogPost },
      { path: 'careers', Component: Careers },
      { path: 'contact', Component: Contact },
      { path: 'case-study/:slug', Component: CaseStudy },
    ],
  },
]);
