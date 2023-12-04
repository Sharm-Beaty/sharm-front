import React, { FC } from 'react';
import "./Stars.scss"

interface StarsProps {
    filled: boolean;
}

const Stars: FC<StarsProps> = ({ filled }) => {
    return (
        <span className={`my-star ${filled ? 'filled' : 'empty'}`}>
            ★
            {/* <img src={ "\Vector.png"} alt="star"/> */}
        </span>
    );
};

export default Stars;