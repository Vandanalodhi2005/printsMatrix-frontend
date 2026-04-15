import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import useHeaderSettings from '../../hooks/useHeaderSettings';

const ModelSearch = () => {
    const { allowModelSearch } = useHeaderSettings();
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
            </Helmet>
            <div className="w-full min-h-screen bg-white flex flex-col">
            {/* Header nav is outside this component */}
            <section
                className="w-full min-h-[420px] flex items-start justify-center relative  md:px-[6%] px-3"
                style={{
                    height: '420px',
                    backgroundImage: 'url(/hero_background_image.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-full max-w-[1200px] flex  md:flex-row flex-col items-start md:justify-between justify-start relative h-full">
                    <div className="flex flex-col justify-center h-full w-full max-w-[700px] md:pt-0 pt-8" id="model-search-main-content">
                        <h1 className="text-white text-[2.7rem] md:text-[2.7rem] text-2xl font-normal mb-8 leading-tight drop-shadow-lg">Set up your printer</h1>
                        <p className="text-white  md:text-xl text-base mb-8 font-normal leading-snug drop-shadow">
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
                        {error && <div className="text-red-500 text-sm mt-2 text-left">{error}</div>}
                    </div>
                    <div className="hidden md:flex items-end h-full absolute right-0 bottom-0 z-10">
                        <img
                            src="/printer-without-bg.png"
                            alt="Printer and Devices"
                            width="300"
                            height="200"
                            fetchpriority="high"
                            className="h-[200px] w-auto max-w-none drop-shadow-xl"
                            style={{ marginBottom: '-60px' }}
                        />
                    </div>
                </div>
            </section>
            <div className="w-full max-w-[1200px] md:ml-[12%] ml-0 mt-[12vh] md:px-[6%] px-3 flex md:flex-row flex-col items-start justify-between relative">
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
