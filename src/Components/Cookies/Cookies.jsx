import React, { useEffect, useState } from 'react';
import './CookieConsent.scss';
import { useNavigate } from 'react-router-dom';

const CookieConsent = ({ children }) => {
  const [accepted, setAccepted] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      setAccepted(true);
    }
    setChecked(true); // allow render after checking
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setAccepted(true);
  };

  const handleLearnMore = () => {
    navigate('/cookie-policy');
  };

  if (!checked) return null;

  return (
    <>
      {!accepted && (
        <div className="cookie-overlay">
          <div className="cookie-banner">
            <p>
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <div className="cookie-buttons">
              <button className="learn-more" onClick={handleLearnMore}>
                Learn More
              </button>
              <button className="accept" onClick={handleAccept}>
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
      {accepted && children}
    </>
  );
};

export default CookieConsent;