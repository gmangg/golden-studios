import { useParams, Link } from 'react-router';
import { Calendar, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';

const blogPosts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: Array<{ type: 'heading' | 'paragraph' | 'list' | 'quote'; content: string | string[] }>;
}> = {
  'color-grading-workflow-2026': {
    title: 'Modern Color Grading Workflow: A 2026 Guide',
    category: 'Technical',
    date: 'May 1, 2026',
    readTime: '8 min read',
    author: 'Marcus Chen, Senior Colorist',
    content: [
      { type: 'paragraph', content: 'Color grading has evolved significantly over the past decade. What was once a purely technical process has become an essential creative collaboration between cinematographer, director, and colorist. In 2026, our workflow combines time-tested fundamentals with cutting-edge technology.' },
      { type: 'heading', content: 'The Foundation: Technical Conforming' },
      { type: 'paragraph', content: 'Before any creative work begins, we ensure technical integrity. This involves conforming all footage to a consistent color space (we primarily work in ACES), verifying metadata, and creating optimized media for grading. This step is crucial—creative decisions made on improperly conformed footage are unreliable.' },
      { type: 'heading', content: 'Primary Correction: Building the Base' },
      { type: 'paragraph', content: 'Primary correction establishes visual consistency across all footage. We address exposure issues, white balance, and ensure skin tones fall within acceptable ranges. This is where technical skill meets artistic judgment—knowing when footage should match versus when variation serves the story.' },
      { type: 'list', content: [
        'Exposure normalization across all clips',
        'White balance adjustment for consistent color temperature',
        'Skin tone optimization using vectorscope analysis',
        'Contrast adjustment to establish tonal range',
      ] },
      { type: 'heading', content: 'Creative Grading: Establishing the Look' },
      { type: 'paragraph', content: 'This is where color becomes storytelling. Working from director references and cinematographer notes, we develop the visual signature of the project. This might be naturalistic correction, stylized color palettes, or anything in between. The key is intentionality—every color decision should serve the narrative.' },
      { type: 'quote', content: 'Color is subconscious storytelling. The audience shouldn\'t notice the grade, but they should feel it.' },
      { type: 'heading', content: 'HDR Considerations' },
      { type: 'paragraph', content: 'High Dynamic Range delivery has become standard for premium content. We approach HDR as a creative opportunity, not just a technical requirement. The expanded luminance range allows for more nuanced shadow detail and controlled highlights, but requires careful management to avoid viewer fatigue.' },
      { type: 'heading', content: 'Final Polish and Delivery' },
      { type: 'paragraph', content: 'The final stage involves shot-by-shot refinement, ensuring visual flow throughout the project. We then prepare deliverables: SDR and HDR masters, versioning for different platforms, and LUTs for on-set monitoring or VFX pulls. Quality control is rigorous—every frame is reviewed before delivery.' },
      { type: 'paragraph', content: 'Modern color grading balances artistry with technical precision. The tools have advanced, but the fundamental principle remains: serve the story through thoughtful, intentional color choices.' },
    ],
  },
  'five-editing-principles': {
    title: '5 Editorial Principles That Transform Good Footage Into Great Content',
    category: 'Editorial',
    date: 'April 15, 2026',
    readTime: '6 min read',
    author: 'Sarah Mitchell, Lead Editor',
    content: [
      { type: 'paragraph', content: 'After editing hundreds of projects across narrative, documentary, and commercial formats, certain principles consistently separate effective editing from exceptional editing. These aren\'t rules—they\'re frameworks for making intentional creative decisions.' },
      { type: 'heading', content: '1. Pacing is Emotional Rhythm' },
      { type: 'paragraph', content: 'Pacing isn\'t just about speed—it\'s about creating emotional rhythm that guides the viewer\'s experience. Fast cutting builds energy and tension. Longer takes allow contemplation and emotional absorption. The best edits use varied pacing to create emotional dynamics, not monotonous tempo.' },
      { type: 'heading', content: '2. Every Cut Should Be Motivated' },
      { type: 'paragraph', content: 'Each editorial decision should have purpose. Cut on action for dynamism. Cut on reaction for emotional connection. Cut to reveal information. Avoid cutting simply because you\'ve been on a shot for "too long"—instead, ask what the cut accomplishes narratively or emotionally.' },
      { type: 'heading', content: '3. Sound Drives Picture' },
      { type: 'paragraph', content: 'Professional editors know that audio is equally important as picture. Dialogue rhythm often dictates edit points. Music creates emotional undertones. Sound design builds world and atmosphere. We frequently build audio first, then conform picture to the established rhythm.' },
      { type: 'quote', content: 'The best editors think in sound as much as picture. Your eyes can deceive you, but your ears rarely do.' },
      { type: 'heading', content: '4. Less is More (Usually)' },
      { type: 'paragraph', content: 'Beginning editors often over-cut, afraid of boring the audience. Experienced editors trust the footage and the audience. Sometimes the most powerful choice is to hold on a performance, let a moment breathe, or allow silence to create tension. Restraint is a skill.' },
      { type: 'heading', content: '5. Story Trumps Footage Quality' },
      { type: 'paragraph', content: 'Don\'t sacrifice narrative clarity or emotional truth for technical perfection. If the out-of-focus shot has the best performance, use it. If the slightly shaky handheld moment has authentic emotion, embrace it. Technical polish serves story—not the reverse.' },
      { type: 'paragraph', content: 'These principles guide our editorial approach across all projects. They\'re not formulas, but frameworks for making intentional creative choices that serve the story and engage the audience.' },
    ],
  },
};

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen py-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-foreground mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-primary hover:text-primary/80">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-32">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-12 uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Insights
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-12 pb-12 border-b border-border">
            <div className="flex items-center gap-3 mb-6">
              <Tag className="w-4 h-4 text-primary" />
              <span className="text-xs tracking-wider uppercase text-primary">
                {post.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl tracking-tight text-foreground mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="text-foreground">
                By {post.author}
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-3xl text-foreground mb-6 mt-12 tracking-tight">
                    {block.content as string}
                  </h2>
                );
              }

              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {block.content as string}
                  </p>
                );
              }

              if (block.type === 'list') {
                return (
                  <ul key={index} className="space-y-3 mb-8 ml-6">
                    {(block.content as string[]).map((item, i) => (
                      <li key={i} className="text-lg text-muted-foreground leading-relaxed flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary mt-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === 'quote') {
                return (
                  <blockquote key={index} className="my-12 pl-8 border-l-2 border-primary">
                    <p className="text-2xl text-foreground italic leading-relaxed">
                      {block.content as string}
                    </p>
                  </blockquote>
                );
              }

              return null;
            })}
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-12 border-t border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Share this article</p>
                <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm tracking-wider uppercase">Share</span>
                </button>
              </div>
              <Link
                to="/blog"
                className="px-8 py-4 border-2 border-primary text-primary tracking-[0.15em] uppercase text-sm hover:bg-primary/5 transition-all"
              >
                More Articles
              </Link>
            </div>
          </footer>
        </article>

        {/* Related Articles */}
        <div className="mt-24">
          <h2 className="text-3xl tracking-tight text-foreground mb-8">
            Continue Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, relatedPost]) => (
                <Link
                  key={key}
                  to={`/blog/${key}`}
                  className="group bg-card border border-border p-8 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-3 h-3 text-primary" />
                    <span className="text-xs tracking-wider uppercase text-primary">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 className="text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{relatedPost.date}</span>
                    <span>•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
