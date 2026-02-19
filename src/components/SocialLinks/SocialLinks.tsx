import React from 'react';
import { Icon } from '../Icon/Icon';
import './SocialLinks.css';

interface SocialLinksProps {
  isMobileMenu?: boolean;
}
const SocialLinks: React.FC<SocialLinksProps> = ({ isMobileMenu = false }) => {
  return (
    <div className={`social-nav ${isMobileMenu ? 'menu' : ''}`}>
      <a
        className="social-link"
        title="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com"
        aria-label="Instagram"
      >
        <Icon id="icon-email" className="social-icon" size={25} height={22} />
      </a>
      <a
        className="social-link"
        title="Facebook"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com"
        aria-label="Facebook"
      >
        <Icon
          id="icon-linkedin"
          className="social-icon"
          size={25}
          height={22}
        />
      </a>
    </div>
  );
};
export default SocialLinks;
