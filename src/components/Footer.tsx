import { Mail, Phone, MapPin, ArrowUp, ExternalLink } from 'lucide-react';

/* Footer — Full content from rampex.in with multi-column layout */

const Footer = () => {
  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black font-heading text-primary">&lt;</span>
              <span className="text-2xl font-bold font-heading tracking-tight text-white">
                RAMPeX
              </span>
              <span className="text-2xl font-black font-heading text-primary">&gt;</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-medium">
              Reboot your learning experience. We bridge the gap between academic excellence and industry demands with high-tech training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-heading mb-8 text-white text-xs uppercase tracking-[0.2em]">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'What We Do', href: '#whatwedo' },
                { label: 'Courses', href: '#courses' },
                { label: 'Partners', href: '#partners' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary hover:translate-x-1 transition-all inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold font-heading mb-8 text-white text-xs uppercase tracking-[0.2em]">
              Programs
            </h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              {[
                'PLP Training Program',
                'Stack Training',
                'Super Dream Offer',
                'Faculty Enhancement'
              ].map((prog) => (
                <li key={prog} className="hover:text-white transition-colors cursor-default">
                  {prog}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold font-heading mb-8 text-white text-xs uppercase tracking-[0.2em]">
              Connect
            </h4>
            <ul className="space-y-6 text-sm font-medium text-white/40">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={16} />
                </div>
                <span className="hover:text-white transition-colors cursor-pointer">info@rampex.in</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+918903869600" className="hover:text-white transition-colors cursor-pointer">+91 89038 69600</a>
                  <a href="tel:+918525900818" className="hover:text-white transition-colors cursor-pointer">+91 85259 00818</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="hover:text-white transition-colors cursor-default">Coimbatore, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-white/20">
            © {new Date().getFullYear()} RAMPeX Technologies. Empowered by Innovation.
          </p>
          <div className="flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors"
            >
              Back to top
              <div className="p-2 rounded-lg glass group-hover:bg-primary/20 transition-all">
                <ArrowUp size={14} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
