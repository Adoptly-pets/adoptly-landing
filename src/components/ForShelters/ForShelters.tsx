import Button from '../Button/Button';
import sheltersAccountImg from '../../assets/images/JoinUs/home.webp';
import iconCheck from '../../assets/images/ForShelters/icon-check.webp';
import iconShare from '../../assets/images/ForShelters/icon-share.webp';
import './ForShelters.css';
import { useTranslation } from 'react-i18next';

const ForShelters = () => {
  const { t } = useTranslation();
  return (
    <section id="shelters" className="for-shelters">
      <div className="left">
        <span className="badge">{t('forShelters.badge')}</span>
        <h2>{t('forShelters.title')}</h2>
        <p className="description">{t('forShelters.description')}</p>
        <ul className="questions-list">
          <li className="question">
            <img
              src={iconCheck}
              alt="icon check"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
            <p>{t('forShelters.question1')}</p>
          </li>
          <li className="question">
            <img
              src={iconCheck}
              alt="icon check"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
            <p>{t('forShelters.question2')}</p>
          </li>
        </ul>
        <Button
          maxWidth={333}
          height={66}
          as="a"
          href="https://forms.gle/QCN2T57Zo8vmYEWe6"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontWeight: 700,
            backgroundColor: '#1E293B',
            gap: '8px',
          }}
        >
          {t('forShelters.button')}
          <img
            src={iconShare}
            alt="icon share"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        </Button>
      </div>
      <div className="right">
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="content">
          <div className="accout-icon">
            <img
              src={sheltersAccountImg}
              alt="shelters account illustration"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h4>{t('forShelters.shelter_account')}</h4>
          <p>{t('forShelters.simple_and_convenient')}</p>
          <div className="free-button">
            <span className="button-dot" />
            Free
          </div>
        </div>
      </div>
    </section>
  );
};
export default ForShelters;
