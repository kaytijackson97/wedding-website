import { useState } from "react";
import Attending from "./attending";
import FoodOptions from "./food-options";
import PlusOne from "./plus-one";

const RSVP = () => {
    // TODO: update invited this to be call to the database
    // const invited = [
    //     {
    //         name: 'Jory Phillips',
    //         isChild: false,
    //         hasPlusOne: false,
    //     },
    //     {
    //         name: 'Krysti Phillips',
    //         isChild: false,
    //         hasPlusOne: false,
    //     },
    //     {
    //         name: 'Delaney Phillips',
    //         isChild: true,
    //         hasPlusOne: false,
    //     },
    // ];
    const invited = [
        {
            name: 'Amber Summers',
            isChild: false,
            hasPlusOne: true,
        },
    ];
    const [attendingArr, setAttendingArr] = useState(invited);
    const [hasPlusOne, setHasPlusOne] = useState(false);
    const [plusOne, setPlusOne] = useState({});

    const personsInvited = hasPlusOne && plusOne.name ? [...attendingArr, plusOne] : attendingArr;

    return (
        <div>
            <h1>RSVP</h1>
            <Attending
                key={`attending-[${JSON.stringify(invited)}]`}
                invited={invited}
                attendingArr={attendingArr}
                setAttendingArr={setAttendingArr}
                data-qa="attending"
            />
            {attendingArr.length > 0 && (
                <div className="yes-options" data-qa="yes-options">
                    {invited[0].hasPlusOne && (
                        <PlusOne
                            hasPlusOne={hasPlusOne}
                            setHasPlusOne={setHasPlusOne}
                            setPlusOne={setPlusOne}
                            data-qa="plus-one"
                        />
                    )}
                    {personsInvited.map(({ name, isChild }) =>
                        <FoodOptions
                            key={`food-options-[${name}]`}
                            name={name}
                            isChild={isChild}
                        />
                    )}
                </div>
            )}
            <button>Submit</button>
        </div>
    );
};

export default RSVP;