import React, {useEffect, useState} from "react";

export const useResizeObserver = (ref: React.RefObject<HTMLElement>) => {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (ref.current) {
            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    setIsMobile(entry.contentRect.width <= 768);
                }
            });

            resizeObserver.observe(ref.current);

            return () => {
                if (ref.current) {
                    resizeObserver.unobserve(ref.current);
                }
            };
        }

        return () => {};
    }, [ref]);

    return isMobile;
};