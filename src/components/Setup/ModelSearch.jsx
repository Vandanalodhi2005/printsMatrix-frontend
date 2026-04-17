import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import useHeaderSettings from '../../hooks/useHeaderSettings';
import HeaderSetup from './HeaderSetup';

const ModelSearch = () => {
    const { allowModelSearch, showHeader, showLogo, loading } = useHeaderSettings();
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!allowModelSearch) {
            // Do nothing if not allowed
            return;
        }
        if (input.trim() === "") {
            setError("Please enter your product name.");
            return;
        }
        localStorage.setItem('modelSearchInput', input.trim());
        setError("");
        navigate('/complete-setup');
    };

    return (
        <>
            <Helmet>
                <title>Model Search | HP Smart App</title>
                <link rel="preload" as="image" href="/hero_background_image.jpg" fetchPriority="high" />
                <link rel="preload" as="image" href="/printer-without-bg.png" fetchPriority="high" />
            </Helmet>
            <div className="w-full min-h-screen bg-white flex flex-col">
            <section className="w-full min-h-[450px] md:min-h-[520px] relative overflow-hidden flex items-center justify-center md:px-[6%] px-6 py-12 md:py-0">
                {/* Guaranteed Background Layer */}
                <img 
                    src="/hero_background_image.jpg" 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    fetchPriority="high"
                    decoding="async"
                    loading="eager"
                />

                <div className="w-full max-w-[1200px] flex md:flex-row flex-col items-center md:justify-between justify-center relative z-10">
                    <div className="flex flex-col justify-center items-center md:items-start h-full w-full max-w-[700px] text-center md:text-left" id="model-search-main-content">
                        <h1 className="text-white text-3xl md:text-[2.7rem] font-bold mb-6 leading-tight drop-shadow-lg">
                            Set up your printer
                        </h1>
                        <p className="text-white text-lg md:text-xl mb-8 font-normal leading-snug drop-shadow max-w-[500px]">
                            Enter your product name and model number to get the right smart software
                            and drivers for you
                        </p>
                        <form className="flex md:flex-row flex-col items-center w-full max-w-[600px] gap-3 md:gap-0" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                placeholder='Enter your product name here. For example: "OfficeJet 9010"'
                                className="flex-1 px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg bg-white shadow-sm w-full"
                                disabled={!allowModelSearch}
                            />
                            {allowModelSearch && (
                                <button
                                    type="submit"
                                    className="md:ml-4 ml-0 bg-white text-blue-700 font-semibold px-8 py-3 rounded-full text-lg shadow hover:bg-blue-50 transition w-full md:w-auto"
                                >
                                    Next
                                </button>
                            )}
                        </form>
                        {error && <div className="text-red-500 font-semibold text-sm mt-2 text-center md:text-left">{error}</div>}
                    </div>
                    <div className="hidden md:flex items-end h-full absolute right-0 bottom-0 z-10">
                        <img
                            src="/printer-without-bg.png"
                            alt="Printer and Devices"
                            width="300"
                            height="200"
                            fetchPriority="high"
                            decoding="async"
                            className="h-[200px] w-auto max-w-none drop-shadow-xl"
                            style={{ marginBottom: '-60px' }}
                        />
                    </div>
                </div>
            </section>
            <div className="w-full max-w-[1200px] md:ml-[12%] ml-0 mt-16 md:mt-24 md:px-[6%] px-6 flex md:flex-row flex-col items-start justify-between relative">
                <div className="flex flex-col w-full max-w-[700px]">
                    <p className="text-gray-700 text-[1.15rem] md:text-[1.15rem] text-base mb-6">
                        Install smart software and drivers on each mobile device or computer that you want to print from. Add the printer on the new device.
                    </p>
                    <p className="text-gray-700 text-[1.15rem] md:text-[1.15rem] text-base">
                        Need additional help with set-up? Visit{' '}
                        <a href="#" className="text-blue-600 underline hover:text-blue-800">support</a>
                    </p>
                </div>
            </div>
        </div>

        </>
    );
};

export default ModelSearch;
