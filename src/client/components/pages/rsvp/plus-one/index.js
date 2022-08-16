const PlusOne = ({ hasPlusOne, setHasPlusOne, setPlusOne }) => (
    <div className="plus-one">
        <label>
            <input
                type="checkbox"
                checked={hasPlusOne}
                onChange={() => {
                    setHasPlusOne(!hasPlusOne);
                    if (!hasPlusOne) {
                        setPlusOne({});
                    }
                }} />
            Plus One?
        </label>
        {hasPlusOne && (
            <div className="plus-one-input">
                <label>Name</label>
                <input
                    type="text"
                    onBlur={(e) => {
                        setPlusOne({
                            name: e.target.value,
                            isChild: false,
                            hasPlusOne: false,
                        })
                    }}
                />
            </div>
        )}
    </div>
);

export default PlusOne;