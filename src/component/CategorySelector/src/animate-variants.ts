export function variantsCategoryTitle(flag:boolean) {
    return {
        z: flag ? 0 : 100,
        opacity: flag ? 0 : 1,
        y: flag ? 20 : 0,
        scale: flag ? 0.8 : 1,
        rotateX: flag ? 90 : 0,
        transition: {
            type:'spring',
            duration: 0.3
        }
    }
}

export const iconWrapperInitial = {
    initial: {
        y:0,
        boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
        scale: 0.8
    },
    hover: {
        y: 10,
        boxShadow: "1px 1px 15px rgba(0, 0, 0, 0.3)",
        scale: 1,
    }
};
