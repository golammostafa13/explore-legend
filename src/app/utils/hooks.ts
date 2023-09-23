import { useEffect } from 'react';

export function useInterval(callback: (() => void) | undefined, ms: number) {
    useEffect(() => {
        if (callback && ms !== undefined && ms !== null) {
            const interval = setInterval(callback, ms);

            return () => clearInterval(interval);
        }
    }, [ms, callback]);
}
