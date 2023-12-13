import * as React from "react";
import {motion} from "framer-motion";
import {useState} from "react";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};


export const MenuItem = ({ item }) => {
    const [isChildrenVisible, setIsChildrenVisible] = useState(false);

    const handleButtonClick = () => {
        setIsChildrenVisible(!isChildrenVisible);
    };

    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1, transformOrigin: 0 }}
            whileTap={{ scale: 0.95 }}
        >
            {item.name}
            {item.children && item.children.length > 0 && (
                <>
                    <button onClick={handleButtonClick}>
                        {isChildrenVisible ? 'Hide' : 'Show'}
                    </button>

                    {isChildrenVisible && (
                        <ul>
                            {item.children.map((childItem) => (
                                <MenuItem key={childItem.id} item={childItem} />
                            ))}
                        </ul>
                    )}
                </>
            )}
        </motion.li>
    );
}