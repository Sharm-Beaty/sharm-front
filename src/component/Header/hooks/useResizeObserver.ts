import {useEffect, useState} from "react";

export const useResizeObserver = (ref: React.RefObject<HTMLElement>) => {
    const [isMobile, setIsMobile] = useState(window?.innerWidth <= 768);
    useEffect(() => {
        if (ref.current) {
            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    setIsMobile(entry.contentRect.width <= 768);
                }
            });

            resizeObserver.observe(ref.current);

            // Cleanup
            return () => {
                if (ref.current) {
                    resizeObserver.unobserve(ref.current);
                }
            };
        }

        return () => {}; // Fallback to assure a function is always returned
    }, [ref]);

    return isMobile;
};