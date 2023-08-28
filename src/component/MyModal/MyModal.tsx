import React, {FC, ReactNode} from 'react';
import "./MyModal.scss"


interface MyModalType {
    open: boolean
    onClose: (value: boolean) => void
    children: ReactNode
}


export const MyModal: FC<MyModalType> = ({children}) => {
    return (
        <div className="container-my-modal" >
            {children}
        </div>
    );
};

