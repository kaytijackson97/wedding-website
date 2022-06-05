import './Header.css';

const Header = () => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const weddingDate = new Date('01/15/2023');
    const today = new Date();
    const daysToGo = Math.floor((weddingDate - today) / day);

    const countdownText = daysToGo > 0 ? `${daysToGo} Days to Go!` : 'Today\'s the day!';
    return (
        <div className="main-container">
            <h1 className="text name">Peter & Kayti</h1>
            <h3 className="text countdown-counter">{countdownText}</h3>
        </div>
    );
};

export default Header;