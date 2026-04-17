
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useHeaderSettings from '../../hooks/useHeaderSettings';
import HeaderSetup from './HeaderSetup';

// Reuse the ErrorModal content from CompleteSetup, but as a full page
export default function InstallationFailedPage() {
  const { showHeader, showLogo, allowInstallationFailed, loading } = useHeaderSettings();
  const navigate = useNavigate();

  // Redirect to home if disabled by admin
  React.useEffect(() => {
    // Robust check: Redirect if we have a definitive 'false' from the setting
    if (allowInstallationFailed === false) {
      console.log('InstallationFailedPage: Redirecting to home as per admin settings.');
      navigate('/', { replace: true });
    }
  }, [allowInstallationFailed, navigate]);

  // Prevent flicker by returning null immediately if we are supposed to be redirected
  if (allowInstallationFailed === false) return null;

  // You can get the model from localStorage or default
  const printer = localStorage.getItem('modelSearchInput') || 'Officejet';

  return (
    <>
      <Helmet>
        <title>Installation Failed | HP Smart App</title>
      </Helmet>
      <div
        className=" min-h-screen flex flex-col"
        style={{
          background: `linear-gradient(rgba(0, 75, 172, 0.85), rgba(0, 75, 172, 0.85)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '99vw',
        }}
      >

        <div className="flex flex-1 items-center justify-center px-2 sm:px-0">
          <div
            className="bg-gradient-to-br from-red-300 via-pink-300 to-yellow-400 p-1 rounded-3xl w-full max-w-3xl animate-fadeIn"
            style={{
              minWidth: '0',
              maxWidth: 800,
              boxShadow: '0 0 30px 0 #f87171',
            }}
          >
            <div className="bg-white rounded-2xl p-0 relative">
              <div className="flex flex-col items-center px-4 py-8 sm:px-10 sm:py-12">
                <div className="bg-gradient-to-br from-red-400 via-pink-500 to-yellow-400 rounded-full p-4 sm:p-6 mb-6 shadow-lg">
                  <i className="fa-solid fa-shield-halved text-3xl sm:text-5xl text-white drop-shadow-lg"></i>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-3 tracking-tight text-center">
                  Printer Driver Installation Error
                </h2>
                <div className="text-center text-red-600 font-bold mb-5 text-base sm:text-lg">
                  We encountered an issue completing the printer driver installation due to error 1603
                </div>
                <div className="text-center text-black font-extrabold mb-2 text-xl sm:text-2xl">
                  Contact Hp Support to Resolve this Issue
                </div>
                <div className="text-center text-gray-800 mb-2 text-lg">
                  Toll-Free (USA/CA) : <span className="font-bold text-black text-xl">+1-877-238-0240</span>
                </div>
                <button
                  className="mx-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl text-base sm:text-lg flex items-center justify-center transition-all shadow-xl gap-2 mb-6"
                  onClick={() => {
                    if (window.jivo_api && typeof window.jivo_api.open === 'function') {
                      window.jivo_api.open();

                    } else {
                      alert('Chat support is not available yet.');
                    }
                  }}
                  type="button"
                >
                  <i className="fa-solid fa-comments text-lg sm:text-xl"></i> Chat Now <span className="ml-1">&#187;</span>
                </button>
                <div className="text-center text-red-600 font-semibold mt-2 text-xs sm:text-sm">
                  Note : For best results, avoid repeatedly attempting the installation without proper guidance, as it may not resolve the issue. Our experts are here to help you complete the setup correctly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
