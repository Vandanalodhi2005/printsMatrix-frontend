import React, { useState, useEffect } from 'react';
import { Save, ToggleLeft, ToggleRight, Search, Type, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { useSelector } from 'react-redux';

const BACKEND = import.meta.env.VITE_API_URL?.replace('/api', '') || '';

const Toggle = ({ checked, onChange, disabled }) => (
    <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            ${checked ? 'bg-blue-600' : 'bg-slate-200'} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
        <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform
                ${checked ? 'translate-x-6' : 'translate-x-1'}`}
        />
    </button>
);

const AdminSettings = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    // ── Visibility Settings State ─────────────────────────────────────────────
    const [showHeader, setShowHeader] = useState(true);
    const [showLogo, setShowLogo] = useState(true);
    const [allowModelSearch, setAllowModelSearch]           = useState(true);
    const [allowInstallationFailed, setAllowInstallationFailed] = useState(true);
    const [visLoading, setVisLoading]                       = useState(false);
    const [visFetching, setVisFetching] = useState(true);
    const [visStatus, setVisStatus] = useState(null); // { type: 'success'|'error', msg }

    // ── General Settings State ────────────────────────────────────────────────
    const [storeName, setStoreName] = useState('Prints Carts');
    const [supportEmail, setSupportEmail] = useState('support@smartinkguide.com');
    const [address, setAddress] = useState(
        'Prints Carts\n7181 Beacon Dr 15\nReno, NV 89506\nUnited States'
    );

    // ── Load current visibility settings ─────────────────────────────────────
    useEffect(() => {
        setVisFetching(true);
        fetch(`${BACKEND}/admin/header-visibility`)
            .then((r) => r.json())
            .then((data) => {
                setShowHeader(data.showHeader !== false);
                setShowLogo(data.showLogo !== false);
                setAllowModelSearch(data.allowModelSearch !== false);
                
                const allowFail = data.allowInstallationFailed;
                setAllowInstallationFailed(allowFail !== false && allowFail !== "false");
            })
            .catch(() => {})
            .finally(() => setVisFetching(false));
    }, []);

    // ── Save visibility settings ──────────────────────────────────────────────
    const saveVisibility = async () => {
        if (!userInfo?.token) return;
        setVisLoading(true);
        setVisStatus(null);
        try {
            const res = await fetch(`${BACKEND}/admin/header-visibility`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
                body: JSON.stringify({ showHeader, showLogo, allowModelSearch, allowInstallationFailed }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Failed to save');
            
            // Persist locally for immediate redirection fallback
            localStorage.setItem('allowInstallationFailed', allowInstallationFailed.toString());
            
            setVisStatus({ type: 'success', msg: 'Visibility settings saved!' });
        } catch (err) {
            setVisStatus({ type: 'error', msg: err.message });
        } finally {
            setVisLoading(false);
            setTimeout(() => setVisStatus(null), 3500);
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500 w-full max-w-4xl">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
                <p className="text-slate-500">Manage your store configuration and preferences.</p>
            </div>

            {/* ── Printer Setup Page Visibility ─────────────────────────────── */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <div>
                        <h2 className="font-bold text-lg text-slate-800">Printer Setup Page — Visibility Controls</h2>
                        <p className="text-sm text-slate-500 mt-0.5">
                            Control which interactive elements appear on the <em>/model-search</em> setup page.
                        </p>
                    </div>
                    {visFetching && (
                        <Loader2 size={18} className="animate-spin text-slate-400" />
                    )}
                </div>

                <div className="p-6 space-y-5">
                    {/* Show Header */}
                    <div className="flex items-center justify-between py-3 border-b border-slate-100">
                        <div>
                            <h4 className="font-semibold text-slate-800 text-sm">Show Site Header</h4>
                            <p className="text-xs text-slate-500 mt-0.5">Display the top navigation header for all visitors on the setup page.</p>
                        </div>
                        <Toggle checked={showHeader} onChange={setShowHeader} disabled={visFetching} />
                    </div>

                    {/* Show Logo */}
                    <div className={`flex items-center justify-between py-3 border-b border-slate-100 transition-opacity ${!showHeader ? 'opacity-40 pointer-events-none' : ''}`}>
                        <div>
                            <h4 className="font-semibold text-slate-800 text-sm">Show HP Logo in Header</h4>
                            <p className="text-xs text-slate-500 mt-0.5">Display the HP logo inside the header bar. Requires header to be visible.</p>
                        </div>
                        <Toggle checked={showLogo} onChange={setShowLogo} disabled={visFetching || !showHeader} />
                    </div>

                    {/* Allow Model Search */}
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-start gap-3">
                            <span className="mt-0.5 p-1.5 bg-blue-50 rounded-lg">
                                <Search size={15} className="text-blue-600" />
                            </span>
                            <div>
                                <h4 className="font-semibold text-slate-800 text-sm">Allow Model Search &amp; Next Button</h4>
                                <p className="text-xs text-slate-500 mt-0.5">
                                    When <strong>OFF</strong>, the search box is disabled and the <em>Next</em> button is hidden — users cannot proceed through the setup flow.
                                </p>
                            </div>
                        </div>
                        <Toggle checked={allowModelSearch} onChange={setAllowModelSearch} disabled={visFetching} />
                    </div>
                    {/* Allow Installation Failed Page */}
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-start gap-3">
                            <span className="mt-0.5 p-1.5 bg-red-50 rounded-lg">
                                <XCircle size={15} className="text-red-600" />
                            </span>
                            <div>
                                <h4 className="font-semibold text-slate-800 text-sm">Allow 'Installation Failed' Redirect</h4>
                                <p className="text-xs text-slate-500 mt-0.5">
                                    When <strong>OFF</strong>, users navigating to <em>/installation-failed</em> are redirected back to the home page — effectively hiding the error state.
                                </p>
                            </div>
                        </div>
                        <Toggle checked={allowInstallationFailed} onChange={setAllowInstallationFailed} disabled={visFetching} />
                    </div>
                </div>

                {/* Status + Save */}
                <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div className="text-sm flex items-center gap-2">
                        {visStatus?.type === 'success' && (
                            <><CheckCircle size={16} className="text-emerald-500" /><span className="text-emerald-600 font-medium">{visStatus.msg}</span></>
                        )}
                        {visStatus?.type === 'error' && (
                            <><XCircle size={16} className="text-red-500" /><span className="text-red-600 font-medium">{visStatus.msg}</span></>
                        )}
                    </div>
                    <button
                        onClick={saveVisibility}
                        disabled={visLoading || visFetching}
                        className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-blue-100"
                    >
                        {visLoading
                            ? <><Loader2 size={16} className="animate-spin" /> Saving…</>
                            : <><Save size={16} /> Save Settings</>
                        }
                    </button>
                </div>
            </div>

            {/* ── General Settings ──────────────────────────────────────────── */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <h2 className="font-bold text-lg text-slate-800">General Settings</h2>
                </div>
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Store Name</label>
                            <input
                                type="text"
                                value={storeName}
                                onChange={(e) => setStoreName(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Support Email</label>
                            <input
                                type="email"
                                value={supportEmail}
                                onChange={(e) => setSupportEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Address</label>
                        <textarea
                            rows={4}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        />
                    </div>
                </div>
                <div className="p-6 bg-slate-50 border-t border-slate-100 text-right">
                    <button className="px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
                        <Save size={18} /> Save Changes
                    </button>
                </div>
            </div>

            {/* ── Security ──────────────────────────────────────────────────── */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <h2 className="font-bold text-lg text-slate-800">Security</h2>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between py-2">
                        <div>
                            <h4 className="font-semibold text-slate-800">Two-Factor Authentication</h4>
                            <p className="text-sm text-slate-500">Add an extra layer of security to your account.</p>
                        </div>
                        <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50">
                            Enable
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
