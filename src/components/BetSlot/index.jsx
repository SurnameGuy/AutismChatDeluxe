export const BetSlot = ({ slots }) => {
    return (
        <>
            {slots.map((slotNum, index) => (
                <img
                    key={index}
                    className='h-full w-full'
                    src={`./img/slot${slotNum}.png`}
                    alt={`slot ${slotNum}`}
                />
            ))}
        </>
    );
};