import React, {useEffect, useState} from "react";
// import getUserViewport from "@/hooks/headers";

export const useResizeObserver = (ref: React.RefObject<HTMLElement>) => {
    if (typeof window === 'undefined') {
        console.log("getUserViewport()")
    }

    const [isMobile, setIsMobile] = useState(false);//= useState(window?.innerWidth <= 768);
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