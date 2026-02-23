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
        title="email"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:info@adoptly.app"
        aria-label="email"
      >
        <Icon id="icon-email" className="social-icon" size={25} height={22} />
      </a>
      <a
        className="social-link"
        title="linkedin"
        href="https://www.linkedin.com/company/adoptly-app/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
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
