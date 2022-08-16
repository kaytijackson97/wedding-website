import { useState } from "react";
import '../RSVP.css';

const Attending = ({ invited, attendingArr, setAttendingArr }) => {
    const [isAttending, setIsAttending] = useState('yes');

    // if only one person
    if (invited.length === 1) {
        return (
            <div className="attending-buttons" onChange={(e) => {
                setIsAttending(e.target.value);
                if (e.target.value === 'no') {
                    setAttendingArr([]);
                } else {
                    setAttendingArr(invited);
                }
            }}>
                <input type="radio" value={'yes'} name={`attending-[${JSON.stringify(invited)}]`} defaultChecked/> Yes! Can't wait!
                <input type="radio" value={'no'} name={`attending-[${JSON.stringify(invited)}]`} /> Sorry, can't make it. Best wishes!
            </div>
        )
    }
    
    return (
        <>
            <div className="attending-buttons" onChange={(e) => {
                setIsAttending(e.target.value);
                if (e.target.value === 'no') {
                    setAttendingArr([]);
                } else {
                    setAttendingArr(invited);
                }
            }}>
                <input type="radio" value={'yes'} name={`attending-[${JSON.stringify(invited)}]`} defaultChecked /> Yes! We can't wait!
                <input type="radio" value={'no'} name={`attending-[${JSON.stringify(invited)}]`} /> Sorry, we can't make it. Best wishes!
                <input type="radio" value={'some'} name={`attending-[${JSON.stringify(invited)}]`} /> Only some of us can make it
            </div>
            {isAttending === 'some' && invited.map((person) => (
                <div key={`attending-[${person.name}]`} className={`attending-[${person.name}]`}>
                    <input
                        type="checkbox"
                        defaultChecked={true}
                        onChange={(e) => {
                            if (!e.target.checked) {
                                const filteredArr = attendingArr.filter((p) => p.name !== person.name);
                                setAttendingArr(filteredArr);
                            } else {
                                setAttendingArr([...attendingArr, person])
                            }
                        }}
                    />
                    <label>{person.name}</label>
                </div>
            ))}
        </>
    );
};

export default Attending;