/* Partners / Institutional Collaborators — CSS-only infinite marquee */

const partners = [
  { name: 'Dr.Mahalingam College Of Engineering and Technology', logo: 'https://mcet.in/admissions/images/logo.webp' },
  { name: 'Dr.N.G.P. Institute of Technology', logo: 'https://1.bp.blogspot.com/-qgFVWwAXJg8/WynPG37K93I/AAAAAAAA864/y1zhnCT9_84MWkWYaeejZ-_NJmFrJBfBwCLcBGAs/s1600/Dr.NGP%2BLogo.png' },
  { name: 'Jai Shriram College of Engineering', logo: 'https://3.bp.blogspot.com/-qKW7IRmWsN0/W2QBol_5XiI/AAAAAAAA-sY/BoxRzzI7zmEksfyeODsFfp0zRt_x0jTSgCLcBGAs/s1600/Jay%2BShriram%2BLogo.png' },
  { name: 'Bannari Amman Institute Of Technology', logo: 'https://www.bitsathy.ac.in/wp-content/themes/baiotsathycollege/assets/images/header%2006.png' },
  { name: 'Sri Krishna Institutions', logo: 'https://d2lk14jtvqry1q.cloudfront.net/media/large_Sri_Krishna_College_of_Engineering_and_Technology_Coimbatore_SKCET_Coimbatore_853ea564d5_fafcf5f339.png' },
  { name: 'Kumaraguru College of Technology', logo: 'https://content3.jdmagicbox.com/v2/comp/coimbatore/b5/0422px422.x422.180413190912.z4b5/catalogue/kumaraguru-college-of-technology-chinnavedampatti-coimbatore-public-schools-9mek9je8vz.jpg' },
  { name: 'Kongu Engineering College', logo: 'https://d2lk14jtvqry1q.cloudfront.net/media/large_118_0f43be13b6_6a7ebea25b.png' },
  { name: 'KPRCAS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdFSOSa9SebVSVxiHVGbcaZVCiOuShtkd2g&s' },
  { name: 'KPR', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZLEZl0JM-q1-oyBiMFv9mOiaxKRB-KDauQ&s' },
  { name: 'Sri Eashwar College of Engineering', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTngeX7L99Bdq1WYmrhI3NVO5KWrxNkoEsINA&s' },
  { name: 'Sri Ramakrishna Engineering College', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQFTWeh-nDhYqblqbBEMfGgPUwWTNrtV15A&s' },
  { name: 'VETIAS', logo: 'https://vetias.ac.in/wp-content/uploads/2022/05/VETIAS-new-logo.jpg' },
  { name: 'Erode Sengunthar Engineering College', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEYyW-uZ04uECv9euaA-AmdASb67Nky6ZBQ&s' },
];

const PartnersSection = () => {
  // Duplicate the list for seamless marquee loop
  const allPartners = [...partners, ...partners];

  return (
    <section id="partners" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Network
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
            Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Collaborators</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Trusted by leading engineering institutions across India for technical excellence and industry integration.
          </p>
        </div>

        {/* Marquee — CSS-only infinite scroll */}
        <div className="relative group">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="marquee-track items-center py-6" style={{ width: 'max-content' }}>
              {allPartners.map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex-shrink-0 glass rounded-2xl p-6 flex items-center justify-center border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all duration-500 mx-3 group/logo"
                  style={{ width: '200px', height: '100px' }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    title={partner.name}
                    className="max-h-16 max-w-[160px] object-contain filter grayscale invert opacity-50 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
