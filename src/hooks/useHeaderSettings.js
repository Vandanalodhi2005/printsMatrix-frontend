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

        const applyData = (data) => {
            if (data && !cancelled) {
                setShowHeader(data.showHeader !== false);
                setShowLogo(data.showLogo !== false);
                setAllowModelSearch(data.allowModelSearch !== false);
            }
            if (!cancelled) setLoading(false);
        };

        // Use the early-fetch promise if available (from index.html)
        if (window.__headerSettingsPromise) {
            window.__headerSettingsPromise.then(applyData);
            // Optional: delete after use to prevent stale data on re-mount if desired
            // window.__headerSettingsPromise = null; 
        } else {
            fetch(`${BASE}/admin/header-visibility`)
                .then((r) => {
                    if (!r.ok) throw new Error('non-ok response');
                    return r.json();
                })
                .then(applyData)
                .catch(() => {
                    if (!cancelled) {
                        setShowHeader(true);
                        setShowLogo(true);
                        setAllowModelSearch(true);
                        setLoading(false);
                    }
                });
        }

        return () => { cancelled = true; };
    }, []);

    return { showHeader, showLogo, allowModelSearch, loading };
};

export default useHeaderSettings;
