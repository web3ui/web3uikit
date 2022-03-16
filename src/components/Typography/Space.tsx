import React, { FC } from 'react';

export interface SpaceProps {
    amount?: number;
    breakLine?: boolean;
}
const Space: FC<SpaceProps> = ({ amount = 1, breakLine }) => {
    return (
        <>
            {breakLine && <br />}
            {'\u00A0'.repeat(amount)}
        </>
    );
};

export default Space;
