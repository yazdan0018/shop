import { useEffect, useState } from 'react';

const useDebounce = (initialValue, delay = 1000) => {
    const [debValue, setDebValue] = useState(initialValue);

    useEffect(() => {
        const unSubscribe = setTimeout(() => {
            setDebValue(initialValue);
        }, delay);

        return () => {
            clearTimeout(unSubscribe);
        };
    }, [initialValue, delay]);
    return debValue;
};

export default useDebounce;
