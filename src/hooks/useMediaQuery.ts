import { useEffect, useState } from 'react';

export function useCustomMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const updateMatches = () => {
            setMatches(mediaQuery.matches);
        };
        updateMatches();
        window.addEventListener('resize', updateMatches);

        return () => {
            window.removeEventListener('resize', updateMatches);
        };
    }, [query]);

    return matches;
}
