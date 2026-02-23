import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4 text-primary-foreground">RAMPeX</h3>
          <p className="text-sm leading-relaxed opacity-80">
            A placement-oriented technology training institute delivering industry-ready talent through skill development and corporate readiness.
          </p>
        </div>
        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-widest mb-4 text-primary-foreground">Quick Links</h4>
          <div className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Jobseekers", path: "/jobseekers" },
              { label: "Employers", path: "/employers" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-widest mb-4 text-primary-foreground">Programs</h4>
          <div className="space-y-2">
            {[
              { label: "ASPIRE – Foundation", path: "/programs/aspire" },
              { label: "ACCELERATE – Advanced", path: "/programs/accelerate" },
              { label: "ASCEND – Specialization", path: "/programs/ascend" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-body text-sm font-semibold uppercase tracking-widest mb-4 text-primary-foreground">Contact</h4>
          <div className="space-y-2 text-sm opacity-80">
            <p>info@rampex.in</p>
            <p>Coimbatore, Tamil Nadu, India</p>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-60">
        © {new Date().getFullYear()} RAMPeX Technologies. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
