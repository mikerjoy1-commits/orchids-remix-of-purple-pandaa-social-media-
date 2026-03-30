import Image from 'next/image';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { href: '#', icon: <Instagram className="w-6 h-6" /> },
    { href: '#', icon: <Twitter className="w-6 h-6" /> },
    { href: '#', icon: <Linkedin className="w-6 h-6" /> },
  ];

  const agencyLinks = [
    { href: '#services', text: 'Services' },
    { href: '#about', text: 'About Us' },
    { href: '#contact', text: 'Contact Us' },
    { href: '#', text: 'Client Portal' },
  ];

  const helpLinks = [
    { href: '#', text: 'Privacy Policy' },
    { href: '#', text: 'Terms and Conditions' },
    { href: '#', text: 'Service Agreement' },
  ];

  return (
    <footer id="contact" className="relative bg-gradient-to-r from-[#6727eb] to-[#7f27ff] text-white -mt-16 sm:-mt-20 lg:-mt-24">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[80px] sm:h-[106px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.83C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/footer-24.png?"
            alt="Purple Pandaa creative illustration"
            width={800}
            height={533}
            className="w-full max-w-4xl h-auto opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-28 sm:pt-32 pb-16">
          <h2 className="text-center font-black uppercase text-[clamp(3rem,12vw,8rem)] leading-none font-heading mb-16 sm:mb-24">
            LET'S BUILD YOUR BRAND!
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4 font-heading tracking-[0.2em]">SOCIALS</h3>
              <div className="flex items-center justify-center sm:justify-start space-x-6">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} className="hover:opacity-75 transition-opacity">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4 font-heading tracking-[0.2em]">LINKS</h3>
              <ul className="space-y-3 font-body text-sm">
                {agencyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:underline">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4 font-heading tracking-[0.2em]">HELP</h3>
              <ul className="space-y-3 font-body text-sm">
                {helpLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:underline">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-4 font-heading tracking-[0.2em]">CONTACT</h3>
              <p className="font-body text-sm">
                <a href="mailto:info@purplepandaa.com" className="hover:underline">
                  info@purplepandaa.com
                </a>
              </p>
            </div>
          </div>

          <div className="text-center font-body text-sm mt-16 sm:mt-24 pt-8 border-t border-white/20">
            <p className="mb-2">Made with ❤ in 🇮🇳 , © 2025 Purple Pandaa.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;