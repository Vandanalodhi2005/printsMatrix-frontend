import { useState, useEffect } from 'react';

const BASE = (import.meta.env.VITE_API_URL || '').replace('/api', '');

/**
 * Fetches admin-controlled header/setup visibility settings.
 * Defaults to fully-visible (safe) until the fetch resolves.
 * On error, keeps safe defaults — never hides anything unexpectedly.
 */
const useHeaderSettings = () => {
    // Always start with everything visible — only hide when backend explicitly says so
    const [showHeader,       setShowHeader]       = useState(true);
    const [showLogo,         setShowLogo]         = useState(true);
    const [allowModelSearch, setAllowModelSearch] = useState(true);
    const [loading,          setLoading]          = useState(true);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);

        fetch(`${BASE}/admin/header-visibility`)
            .then((r) => {
                if (!r.ok) throw new Error('non-ok response');
                return r.json();
            })
            .then((data) => {
                if (cancelled) return;
                // Only set to false if backend explicitly returns false
                setShowHeader(data.showHeader !== false);
                setShowLogo(data.showLogo !== false);
                setAllowModelSearch(data.allowModelSearch !== false);
            })
            .catch(() => {
                // Network error → keep safe defaults (all true)
                if (!cancelled) {
                    setShowHeader(true);
                    setShowLogo(true);
                    setAllowModelSearch(true);
                }
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => { cancelled = true; };
    }, []);

    return { showHeader, showLogo, allowModelSearch, loading };
};

export default useHeaderSettings;
