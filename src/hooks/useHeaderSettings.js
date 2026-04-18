import { useState, useEffect } from 'react';

const BASE = (import.meta.env.VITE_API_URL || '').replace('/api', '');

/**
 * Fetches admin-controlled header/setup visibility settings.
 * Defaults to fully-visible (safe) until the fetch resolves.
 * On error, keeps safe defaults — never hides anything unexpectedly.
 */
const useHeaderSettings = () => {
    // Always start with everything visible — only hide when backend explicitly says so
    const [showHeader, setShowHeader] = useState(() => {
        const local = localStorage.getItem('showHeader');
        return local === null ? true : local === 'true';
    });
    const [showLogo, setShowLogo] = useState(() => {
        const local = localStorage.getItem('showLogo');
        return local === null ? true : local === 'true';
    });
    const [allowModelSearch, setAllowModelSearch] = useState(true);
    const [allowInstallationFailed, setAllowInstallationFailed] = useState(() => {
        // Default to false (hidden) for error page, unless explicitly stored as 'true'
        const local = localStorage.getItem('allowInstallationFailed');
        return local === 'true';
    });
    const [allowCompleteSetup, setAllowCompleteSetup] = useState(() => {
        const local = localStorage.getItem('allowCompleteSetup');
        return local === null ? true : local === 'true';
    });
    const [loading,          setLoading]          = useState(true);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);

        const applyData = (data) => {
            if (data && !cancelled) {
                console.log('Syncing Admin Settings:', data);
                
                const isHeaderOn       = data.showHeader === true || data.showHeader === "true";
                const isLogoOn         = data.showLogo === true || data.showLogo === "true";
                const isSearchOn       = data.allowModelSearch === true || data.allowModelSearch === "true";
                const isFailAllowed    = data.allowInstallationFailed === true || data.allowInstallationFailed === "true";
                const isCompleteOn     = data.allowCompleteSetup === true || data.allowCompleteSetup === "true" || data.allowCompleteSetup === undefined;
                
                setShowHeader(isHeaderOn);
                setShowLogo(isLogoOn);
                setAllowModelSearch(isSearchOn);
                setAllowInstallationFailed(isFailAllowed);
                setAllowCompleteSetup(isCompleteOn);

                // Persist all critical settings to localStorage for zero-flicker reload
                localStorage.setItem('showHeader', isHeaderOn.toString());
                localStorage.setItem('showLogo', isLogoOn.toString());
                localStorage.setItem('allowInstallationFailed', isFailAllowed.toString());
                localStorage.setItem('allowCompleteSetup', isCompleteOn.toString());
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

    return { showHeader, showLogo, allowModelSearch, allowInstallationFailed, allowCompleteSetup, loading };
};

export default useHeaderSettings;
