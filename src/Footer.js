import { NAMES, WEDDING_DATE } from './Constants';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <h5 className="light-text-color">{NAMES} • {WEDDING_DATE}</h5>
        </div>
    );
};

export default Footer;