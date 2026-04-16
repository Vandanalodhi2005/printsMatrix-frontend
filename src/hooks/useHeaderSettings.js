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
    const [allowInstallationFailed, setAllowInstallationFailed] = useState(() => {
        const local = localStorage.getItem('allowInstallationFailed');
        return local !== 'false'; // Default to true, but instantly false if stored as 'false'
    });
    const [loading,          setLoading]          = useState(true);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);

        const applyData = (data) => {
            if (data && !cancelled) {
                console.log('Admin Settings Received:', data);
                setShowHeader(data.showHeader !== false);
                setShowLogo(data.showLogo !== false);
                setAllowModelSearch(data.allowModelSearch !== false);

                // Ultra-robust check: only allow if explicitly true or undefined (default)
                const val = data.allowInstallationFailed;
                const isBlocked = val === false || val === "false";
                setAllowInstallationFailed(!isBlocked);
            }
            if (!cancelled) setLoading(false);
        };

        // Use the early-fetch promise if available (from index.html)
        const promise = window.__headerSettingsPromise || fetch(`${BASE}/admin/header-visibility`).then(r => r.json());

        promise.then(applyData).catch(() => {
            if (!cancelled) {
                // On error, try to restore from localStorage if admin previously saved it
                const local = localStorage.getItem('allowInstallationFailed');
                if (local !== null) {
                    setAllowInstallationFailed(local === 'true');
                }
                setLoading(false);
            }
        });

        return () => { cancelled = true; };
    }, []);

    return { showHeader, showLogo, allowModelSearch, allowInstallationFailed, loading };
};

export default useHeaderSettings;
