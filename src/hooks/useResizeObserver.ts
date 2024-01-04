import React, {useEffect, useState} from "react";

export const useResizeObserver = (ref: React.RefObject<HTMLElement>) => {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const currentRef = ref.current;

        if (currentRef) {
            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    setIsMobile(entry.contentRect.width <= 768);
                }
            });

            resizeObserver.observe(currentRef);

            return () => {
                if (currentRef) {
                    resizeObserver.unobserve(currentRef);
                }
            };
        }

        return () => {};
    }, [ref]);

    return isMobile;
};