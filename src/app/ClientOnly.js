// ClientOnly.js
import { useEffect, useState } from 'react';

export default function ClientOnly({ children }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted ? children : null;
}