import React, { useRef } from 'react';

const useClickOutside = (callback) => {
    const ref = useRef();

    React.useEffect(() => {
        const handleClick = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
        };
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return { ref };
};

export default useClickOutside;