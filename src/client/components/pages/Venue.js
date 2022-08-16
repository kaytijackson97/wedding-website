import { WEDDING_LOCATION } from '../../constants/index';
import castleImage from '../images/IMG_6077.jpg';

import './Venue.css';
import './Pages.css';

const Venue = () => {
    const venueDescription = `Once home to Anne Boleyn, Queen of England, restored by American aristocrat William Waldorf Astor in the 1900s, 
    ${WEDDING_LOCATION.name} posed as the backdrop to Peter's proposal. It's rich British-American blended history felt like the perfect location to 
    celebrate the marriage of this transatlantic couple.`;

    return (
        <>
            <div className="home-container venue-container">
                <img className="castleImage" src={castleImage} alt={WEDDING_LOCATION.name} />
                <div className="venue-text">
                    <h1 className="light-text-color">Venue</h1>
                    <p className="light-text-color">{venueDescription}</p>
                </div>
            </div>
            <div>
                <div className="home-container travel-container">
                    <h1 className="dark-text-color">Travel</h1>
                    <h5 className="dark-text-color">{WEDDING_LOCATION.name}</h5>
                    <h5 className="dark-text-color">{WEDDING_LOCATION.address}</h5>
                    <h5 className="dark-text-color">{WEDDING_LOCATION.city}, {WEDDING_LOCATION.postalCode}</h5>
                    <h5 className="dark-text-color">{WEDDING_LOCATION.country}</h5>
                </div>
            </div>
        </>
    );
};

export default Venue;
