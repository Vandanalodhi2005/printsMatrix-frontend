import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const carouselImages = [
    "/assets/setupguide/slide-1.png",
    "/assets/setupguide/slide-2.png"
];

const deviceIcons = [
    { src: "/assets/setupguide/printer.svg", alt: "Printer Icon" },
    { src: "/assets/setupguide/laptop.svg", alt: "Laptop Icon" },
    { src: "/assets/setupguide/desktop.svg", alt: "Desktop Icon" },
    { src: "/assets/setupguide/mobile.svg", alt: "Mobile Icon" }
];

const SetupGuide5 = () => {
    const [carouselIdx, setCarouselIdx] = useState(0);
    const [activeDevice, setActiveDevice] = useState(0);

    const handleCarousel = (dir) => {
        setCarouselIdx((prev) => (prev + dir + carouselImages.length) % carouselImages.length);
    };

    return (
        <div className="bg-white">
            <header className="header ">
                <div className="top-steps">
                    <div className="left">
                        <div className="step-group no-gap">
                            <span className="step-icon full-circle step-num">1</span>
                            <span className="step-text small">Identify</span>
                            <span className="chevron"><i className="fa-solid fa-chevron-right"></i></span>
                            <span className="step-icon full-circle step-num">2</span>
                            <span className="step-text small">Download</span>
                            <span className="chevron"><i className="fa-solid fa-chevron-right"></i></span>
                            <span className="step-icon full-circle step-num">3</span>
                            <span className="step-text small">Install</span>
                        </div>
                    </div>
                    <div className="right">
                        <span style={{ fontWeight: "normal", marginRight: 16 }}>Select a different product type:</span>
                        {deviceIcons.map((icon, idx) => (
                            <span
                                key={icon.alt}
                                className={`fav-icon blue-bg device-item${activeDevice === idx ? " active" : ""}`}
                                onClick={() => setActiveDevice(idx)}
                                style={{ cursor: "pointer" }}
                            >
                                <img src={icon.src} alt={icon.alt} className="custom-icon" />
                            </span>
                        ))}
                    </div>
                </div>
            </header>
            <hr />
            <main className="container fade-in">
                <section className="w-full max-w-5xl mx-auto px-4 py-8 hero fade-in delay-1 card-hover-animate">
                    <div className="hero-text">
                        <h1 style={{ color: '#1565d8', fontWeight: 700 }}>Easy Printer Setup</h1>
                        <p style={{ fontSize: '1.08rem', margin: '18px 0 0 0', color: '#222' }}>Start your printer installation in minutes.</p>
                        <p style={{ fontSize: '1.08rem', margin: '18px 0 0 0', color: '#222', maxWidth: 480 }}>
                            Follow our step-by-step <b>123 easy printer setup &amp; install</b> guide to download drivers, configure Wi-Fi, and bring your printer back online instantly.
                        </p>
                        <button className="btn-primary" style={{ marginTop: 28, fontWeight: 700, fontSize: '1.08rem', borderRadius: 10, padding: '14px 32px' }}>
                            <Link to="/find-printer" style={{ color: '#fff', textDecoration: 'none' }}>Click Here for Printer Setup</Link>
                        </button>
                    </div>
                    <div className="hero-image">
                        <div className="hero-image-carousel">
                            <button className="carousel-arrow left" aria-label="Previous image" onClick={() => handleCarousel(-1)}><i className="fa-solid fa-chevron-left"></i></button>
                            <img id="carousel-img" src={carouselImages[carouselIdx]} alt="Printer Carousel" className="carousel-img-js" />
                            <button className="carousel-arrow right" aria-label="Next image" onClick={() => handleCarousel(1)}><i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-5xl mx-auto px-4 py-8 icon-grid fade-in delay-2" style={{ marginTop: 40 }}>
                    <div className="icon-card">
                        <img src="/assets/setupguide/printersetup.svg" alt="Printer Setup &amp; Install" className="icon-card-img" />
                        <p style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.08rem', margin: 0 }}>Printer Setup &amp; Install</p>
                    </div>
                    <div className="icon-card">
                        <img src="/assets/setupguide/printeroffline.svg" alt="Fix Printer Offline Issues" className="icon-card-img" />
                        <p style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.08rem', margin: 0 }}>Fix Printer Offline Issues</p>
                    </div>
                    <div className="icon-card">
                        <img src="/assets/setupguide/wirelessprinterissues.svg" alt="Fix Wi-Fi &amp; Driver Problems" className="icon-card-img" />
                        <p style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.08rem', margin: 0 }}>Fix Wi-Fi &amp; Driver Problems</p>
                    </div>
                    <div className="icon-card">
                        <img src="/assets/setupguide/paperjamissues.svg" alt="Fix Paper Jam Errors" className="icon-card-img" />
                        <p style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.08rem', margin: 0 }}>Fix Paper Jam Errors</p>
                    </div>
                    <div className="icon-card">
                        <img src="/assets/setupguide/printersetup.svg" alt="Update Your Printer Driver" className="icon-card-img" />
                        <p style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.08rem', margin: 0 }}>Update Your Printer Driver</p>
                    </div>
                    <div className="icon-card">
                        <img src="/assets/setupguide/scannerissues.svg" alt="Fix Scanner Malfunctions" className="icon-card-img" />
                        <p style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.08rem', margin: 0 }}>Fix Scanner Malfunctions</p>
                    </div>
                </section>

                {/* SEO Content for HP Printer Not Printing */}
                <section className="w-full max-w-5xl mx-auto px-4 py-8">

                    {/* Intro Card */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h1 style={{ color: '#1565d8', fontWeight: 800, fontSize: '2.2rem', margin: 0 }}>HP Printer Not Printing – Complete Step-by-Step Guide to Fix the Problem</h1>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.18rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>
                            If you are searching for <span style={{ fontWeight: 600 }}>hp printer not printing</span>, you are likely dealing with one of the most common printer issues users face. The printer may be powered on, connected to your computer or Wi-Fi, and appear ready, but when you send a document, nothing prints. In some cases, the print job stays stuck in the queue. In others, the printer acts as if it received the command but does not respond.
                        </p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>
                            This issue can happen for many reasons, including connection problems, incorrect printer settings, low or unrecognized cartridges, paper feed issues, software conflicts, or print spooler errors. The good news is that most of these problems can be fixed by following the right troubleshooting sequence.
                        </p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>
                            This page explains the issue in detail and gives a full step-by-step process to help restore printing properly.
                        </p>
                    </div>

                    {/* Why Is My HP Printer Not Printing? */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Why Is My HP Printer Not Printing?</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>When a printer stops printing, the cause is not always obvious right away. Some users assume the printer is broken, but in reality, the issue is often caused by communication or configuration problems rather than hardware failure.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>A printer may stop printing because of:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>an unstable Wi-Fi or USB connection</li>
                            <li>the wrong printer being selected</li>
                            <li>a stuck print queue</li>
                            <li>an offline printer status</li>
                            <li>low, empty, or improperly installed cartridges</li>
                            <li>paper jam or feed obstruction</li>
                            <li>outdated or incomplete printer drivers</li>
                            <li>spooler service interruptions</li>
                            <li>settings mismatches after a system update</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>Understanding the possible causes helps you fix the problem more efficiently instead of repeating random steps that may not address the real issue.</p>
                    </div>

                    {/* Start With the Basics */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Start With the Basics Before Advanced Troubleshooting</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Before moving into detailed fixes, it is important to check a few basic things. Sometimes a simple physical or status issue prevents printing and can be corrected quickly.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Make sure:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>the printer is powered on</li>
                            <li>there are no error lights or warning messages</li>
                            <li>paper is loaded properly</li>
                            <li>cartridges or toner are installed correctly</li>
                            <li>the printer is connected to Wi-Fi or USB</li>
                            <li>the printer screen does not show an error state</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>If the printer display shows a paper jam, cartridge issue, or attention warning, solve that first before checking computer settings. Many printing failures begin with a basic device-side problem.</p>
                    </div>

                    {/* Step 1 */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Step 1: Confirm the Printer Is Ready to Print</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>The first step in fixing <span style={{ fontWeight: 600 }}>hp printer not printing</span> is checking whether the printer itself is actually ready. A printer can appear powered on but still not be in a usable state.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Look for:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>blinking warning lights</li>
                            <li>low ink alerts</li>
                            <li>cartridge access door not fully closed</li>
                            <li>empty or misaligned paper tray</li>
                            <li>maintenance or setup prompt on the display</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>If the printer is still finishing startup, cleaning, alignment, or internal preparation, it may not respond to print jobs yet. Wait until the printer shows a ready status before testing again. This step matters because software troubleshooting will not help if the printer is paused by a hardware or setup condition.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Step 2: Check the Connection Between Printer and Device</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>A very common reason a printer does not print is that the device sending the print command cannot communicate properly with the printer.</p>
                        <div style={{ marginTop: 16 }}>
                            <div style={{ fontWeight: 700, color: '#1565d8', fontSize: '1.08rem', marginBottom: 8 }}>If You Are Using Wi-Fi</div>
                            <p style={{ color: '#222', fontSize: '1.08rem', margin: 0 }}>Make sure the printer and your computer are connected to the same wireless network. If the printer was connected previously but stopped printing, the network may have changed or the printer may have disconnected.</p>
                            <p style={{ color: '#222', fontSize: '1.08rem', margin: '10px 0 0 0' }}>Check: whether the wireless light is solid, whether the network name on the printer matches your current Wi-Fi, and whether the router was recently restarted.</p>
                        </div>
                        <div style={{ marginTop: 16 }}>
                            <div style={{ fontWeight: 700, color: '#1565d8', fontSize: '1.08rem', marginBottom: 8 }}>If You Are Using USB</div>
                            <p style={{ color: '#222', fontSize: '1.08rem', margin: 0, marginBottom: 0 }}>Check that the cable is firmly connected and not damaged. Try another USB port if needed. A weak or broken connection may allow the printer to appear installed while still preventing successful printing.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Step 3: Make Sure the Correct Printer Is Selected</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Sometimes the printer is working, but the document is being sent to the wrong device. This can happen if:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>another printer is installed on the computer</li>
                            <li>a virtual PDF printer is set as default</li>
                            <li>the printer was reinstalled and appears twice</li>
                            <li>an older offline printer entry is still saved</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>Open your print dialog and confirm that the intended printer is selected. Then check the printer settings on your system and set your preferred printer as the default printer. This is a simple step, but it solves more issues than many users expect, especially on computers that have multiple saved printing options.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Step 4: Check Whether the Printer Is Offline or Paused</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>A printer that is marked as offline or paused will not print even if it is powered on and connected.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Open the printer queue and review its status. If the printer is paused or set to offline mode, disable that status and try printing again.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>A paused or offline state may happen after:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>a failed print job</li>
                            <li>a restart</li>
                            <li>a connection interruption</li>
                            <li>a manual setting change</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>If the status is not corrected, the system may continue sending jobs to a blocked printer queue without printing anything.</p>
                    </div>

                    {/* Step 5 */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Step 5: Clear Stuck Print Jobs From the Queue</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>A blocked print queue is one of the most common causes of an <span style={{ fontWeight: 600 }}>hp printer not printing</span> problem. If an earlier print job failed or got stuck, it can prevent all later documents from printing.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Open the queue and remove all pending jobs. After clearing the queue, restart the printer and send a small test page instead of a large document.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>This helps because:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>old failed jobs no longer block the queue</li>
                            <li>the printer receives a fresh print request</li>
                            <li>you can test the connection without document-specific issues</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>If the queue refuses to clear or jobs stay stuck, restarting the print spooler service may be necessary, which is covered later in this page.</p>
                    </div>

                    {/* Step 6 */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Step 6: Check Paper Loading and Paper Feed Path</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Sometimes the printer is not printing because it cannot pick up paper correctly. Even when there is paper in the tray, issues such as misaligned guides, curled sheets, overfilled trays, or hidden scraps from a previous jam can stop printing.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Remove the paper stack and reload it neatly. Adjust the guides so they are snug but not too tight. Inspect the tray and feed path for any visible obstructions.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Paper-related issues can cause:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>blank response when printing</li>
                            <li>partial feed and stopping in the middle of a job</li>
                            <li>repeated attempts to start printing without output</li>
                            <li>error lights or attention messages</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>A clean reload often fixes issues that users mistake for software problems.</p>
                    </div>

                    {/* Step 7 */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Step 7: Check Ink or Toner Cartridge Status</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>A printer may stop printing or refuse certain print jobs if cartridges are empty, low, improperly installed, or not recognized correctly.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Check whether:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>the cartridges are seated securely</li>
                            <li>protective tape was fully removed on newer cartridges</li>
                            <li>the printer display shows an ink warning</li>
                            <li>print quality has recently faded or become inconsistent</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>If cartridges are very low or not detected, the printer may not complete print jobs normally. Some models may still print certain pages while refusing others, depending on the content and color use. If needed, reseat the cartridges carefully and test again. If the printer still does not recognize them, a replacement may be required.</p>
                    </div>

                    {/* Step 8 */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Step 8: Restart the Printer, Computer, and Router</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>A full restart is one of the most effective ways to fix temporary communication problems.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Turn off the printer, restart your computer, and if you are using Wi-Fi, restart your router as well. Once the network is fully back online, turn the printer on again and wait until it reaches ready status.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>This step refreshes:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>network communication</li>
                            <li>temporary system conflicts</li>
                            <li>printer memory state</li>
                            <li>queue handling</li>
                            <li>device detection</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>A restart is especially useful when the printer was printing earlier but suddenly stopped without any obvious hardware issue.</p>
                    </div>

                    {/* Step 9 */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Step 9: Print a Test Page Directly From Printer Settings</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Testing with your original document does not always reveal whether the problem is the printer or the file itself. A test page is better because it isolates the issue.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Printing a test page can confirm:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>whether the printer is communicating with the system</li>
                            <li>whether the driver is responding</li>
                            <li>whether paper feed works normally</li>
                            <li>whether cartridges are producing output</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>If the test page prints successfully, the problem may be related to a specific application, file, or document settings rather than the printer itself. If the test page does not print, the issue is more likely related to printer setup, connection, or software.</p>
                    </div>

                    {/* Step 10 */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Step 10: Update or Reinstall the Printer Driver</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>A damaged, incomplete, or outdated printer driver can cause the printer to stop printing even if it appears installed.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Driver problems often occur after:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>operating system updates</li>
                            <li>network changes</li>
                            <li>interrupted installation</li>
                            <li>switching between USB and wireless</li>
                            <li>restoring old system settings</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>Reinstalling the proper driver helps refresh the communication path between your system and the printer. It can also restore missing features, correct false status reporting, and improve device response. If the printer was working before a recent update and then stopped printing, a driver issue becomes even more likely.</p>
                    </div>

                    {/* Step 11 */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Step 11: Restart the Print Spooler Service</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>The print spooler is the system service that manages print jobs before they are sent to the printer. If it becomes stuck or stops responding, the printer may appear connected but still not print anything.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Restarting the spooler helps when:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>the print queue will not clear</li>
                            <li>jobs remain in the queue indefinitely</li>
                            <li>new jobs disappear without printing</li>
                            <li>printer status does not update correctly</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>This step is especially important on Windows systems where print management depends heavily on spooler activity. When users keep retrying documents but nothing happens, spooler interruption is often part of the issue.</p>
                    </div>

                    {/* Step 12 */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Step 12: Check for Printer-Specific Error Messages</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>If the printer still does not print after the previous steps, review the printer display or software utility for specific warnings. Generic troubleshooting can only go so far if the device is already telling you the exact problem.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Look for messages related to:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>door open</li>
                            <li>paper jam</li>
                            <li>carriage jam</li>
                            <li>cartridge missing</li>
                            <li>incompatible cartridge</li>
                            <li>low supply</li>
                            <li>service required</li>
                            <li>connection lost</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>Specific error messages should always be addressed directly because they often explain why printing is blocked even when everything else seems fine.</p>
                    </div>

                    {/* Step 13 */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Step 13: Test Printing From Another Application or Device</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>If the printer appears ready but one file or one program will not print, test from a different source. Try printing:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>a plain text document</li>
                            <li>a browser page</li>
                            <li>a PDF</li>
                            <li>a test page from system settings</li>
                            <li>a simple document from another device on the same network</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>This helps determine whether the issue is:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>printer-wide</li>
                            <li>application-specific</li>
                            <li>file-specific</li>
                            <li>network-specific</li>
                            <li>user-profile-specific</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>If another device can print successfully, the problem may be with the original computer rather than the printer itself.</p>
                    </div>

                    {/* Common Reasons Connected But Not Printing */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>Common Reasons an HP Printer Is Not Printing Even Though It Is Connected</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>One of the most confusing situations is when the printer looks connected but still does not print. In many of these cases, the problem is caused by a hidden software or settings issue rather than the connection itself.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>This can happen when:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: 22, marginBottom: 0, color: '#222', fontSize: '1.08rem' }}>
                            <li>the system has the wrong default printer</li>
                            <li>the queue is blocked</li>
                            <li>the driver is partially installed</li>
                            <li>the printer is technically online but not fully detected</li>
                            <li>a background service has stalled</li>
                            <li>the document contains corrupted print instructions</li>
                        </ul>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>This is why a full troubleshooting flow is more effective than checking only the connection.</p>
                    </div>

                    {/* Prevention Tips */}
                    <div className="info-box-modern card-hover-animate fade-in delay-4" style={{ background: '#f6eced', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.10)', borderLeft: '5px solid #1976d2', padding: '32px 36px 28px 36px', margin: '32px 0 24px 0' }}>
                        <div className="info-box-header">
                            <h2 style={{ color: '#1565d8', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>How to Prevent Printing Problems in the Future</h2>
                        </div>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6 }}>Once the printer is working again, a few good habits can help reduce the chance of the same issue returning.</p>
                        <p style={{ color: '#222', fontSize: '1.08rem', margin: '18px 0 0 0', fontWeight: 400, lineHeight: 1.6, marginBottom: 0 }}>Keep the printer software up to date, especially after operating system changes. Use a stable wireless network and avoid switching the printer between different networks too often. Keep paper loaded correctly and use clean, flat sheets. Replace low cartridges before they become completely empty if your printing volume is important. Restart the printer occasionally if it stays on for long periods. Preventive maintenance does not solve every problem, but it can significantly reduce repeated interruptions.</p>
                    </div>

                </section>

                <section className="w-full max-w-5xl mx-auto px-4 py-8 support-footer fade-in delay-4 card-hover-animate">
                    <div className="support-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                        <div style={{ fontWeight: 700, color: '#1565d8', fontSize: '1.18rem', marginBottom: 18 }}>
                            Struggling with your printer? Talk To A Technician Now.
                        </div>
                        <div style={{ fontSize: '1.08rem', color: '#222', marginBottom: 32, maxWidth: 520 }}>
                            If you're still facing issues after completing these steps, our certified support team is ready to help. Connect with our online experts for real-time troubleshooting, personalized guidance, and fast solutions to get your printer running perfectly again.
                        </div>
                        <button className="btn-primary" style={{ marginTop: 0, fontWeight: 700, fontSize: '.8rem', borderRadius: 10, padding: '14px 32px', width: '50%', minWidth: 180, maxWidth: 320, textAlign: 'left', alignSelf: 'flex-start' }}>
                            Click for Live Chat Assistance
                        </button>
                    </div>
                    <div className="support-img">
                        <img src="/assets/setupguide/printer-setup-guide.webp" alt="Support Expert" style={{ width: 440, height: 340, objectFit: 'cover', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }} />
                    </div>
                </section>

                {/* Navigation Buttons */}
                <div className="w-full flex justify-between items-center mt-8 mb-12 px-4 max-w-5xl mx-auto">
                    <Link to="/hp-printer-troubleshooting" className="btn-primary" style={{ fontWeight: 700, fontSize: '1rem', borderRadius: 10, padding: '12px 32px', minWidth: 140, textAlign: 'center', background: '#1565d8', color: '#fff', textDecoration: 'none' }}>
                        &larr; Previous
                    </Link>
                    <Link to="/step-by-step-setup-guide/" className="btn-primary" style={{ fontWeight: 700, fontSize: '1rem', borderRadius: 10, padding: '12px 32px', minWidth: 140, textAlign: 'center', background: '#1565d8', color: '#fff', textDecoration: 'none' }}>
                        Next &rarr;
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default SetupGuide5;