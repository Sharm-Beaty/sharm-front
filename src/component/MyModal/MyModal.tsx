import React, {FC, ReactNode} from 'react';
import "./MyModal.scss"


interface MyModalType {
    open: boolean
    onClose: (value: boolean) => void
    children: ReactNode
}


const MyModal: FC<MyModalType> = ({children}) => {
    return (
        <div className="container-my-modal" >
            {children}
        </div>
    );
};
export default MyModal;

