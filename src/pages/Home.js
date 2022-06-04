import { WEDDING_DATE, WEDDING_LOCATION } from "../Constants";
import './Home.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="inner-div date-div">
            <h1 className="details-color">
                    {WEDDING_DATE}
                </h1>
            </div>
            <div className="inner-div vl"></div>
            <div className="inner-div location-div">
                <h1 className="details-color">
                    {WEDDING_LOCATION.name}
                </h1>
                <h1 className="details-color">
                    {WEDDING_LOCATION.city}, {WEDDING_LOCATION.country}
                </h1>
            </div>
        </div>
    );
};

export default HomePage;