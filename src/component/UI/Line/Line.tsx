import React, {FC} from 'react';
import "./Line.scss"

interface LineType {
    isAbsolute: boolean
    isMobile?: boolean
}

export const Line: FC<LineType> = ({isAbsolute, isMobile}) => {
    return (
        <div className={isAbsolute ? "container-line-absolute" : `container-line ${isMobile && "is-mobile"}`}/>
    );
};
