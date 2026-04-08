import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Printer, 
  Wifi,
  FileText,
  Hourglass,
  Activity,
  XCircle,
  Settings,
  CircleHelp,
  Zap
} from 'lucide-react';

const PrinterSetupGuide = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const pageContents = {
    1: {
      heading: "Easy 123 Printer Setup",
      subheading: "Start your printer setup in minutes.",
      description: "Follow our step-by-step 123 hp com setup guide to install drivers, connect your printer to Wi-Fi, and complete the setup process smoothly. Get your printer ready for first-time use without confusion.",
      cta: "Start Printer Setup & Install",
      gradient: "from-blue-600 via-blue-500 to-indigo-400",
      image: "/guide/guide1.png"
    },
    2: {
      heading: "Printer Setup & Install",
      subheading: "Quick and simple installation process.",
      description: "Complete your HP printer setup & install with easy instructions. Learn how to configure your printer, install drivers, connect via Wi-Fi or USB, and start printing without delays.",
      cta: "Start Printer Setup & Install",
      gradient: "from-blue-700 via-blue-600 to-cyan-500",
      image: "/guide/banner1.jpg"
    },
    3: {
      heading: "Fix Printer Offline Issue",
      subheading: "Bring your printer back online quickly.",
      description: "Resolve HP printer offline problems with step-by-step solutions. Restore connection, fix network issues, clear print queue, and get your printer working again smoothly.",
      cta: "Fix Your Offline Printer",
      gradient: "from-blue-800 via-blue-700 to-purple-500",
      image: "/guide/banner2.jpg"
    },
    4: {
      heading: "HP Printer Troubleshooting",
      subheading: "Fix common printer issues easily.",
      description: "Use our complete HP printer troubleshooting guide to fix printing errors, connection issues, driver problems, and scanner malfunctions with simple steps.",
      cta: "Start Troubleshooting",
      gradient: "from-blue-900 via-blue-800 to-slate-700",
      image: "/guide/banner3.jpg"
    },
    5: {
      heading: "HP Printer Not Printing Fix",
      subheading: "Get your printer working again.",
      description: "Fix HP printer not printing issues with easy troubleshooting steps. Check connection, clear print queue, resolve driver errors, and restore printing quickly.",
      cta: "Fix Printing Issue",
      gradient: "from-indigo-600 via-blue-600 to-blue-400",
      image: "/guide/banner4.jpg"
    }
  };

  const phases = [
    { id: 1, label: '123 Setup', active: currentPage === 1 },
    { id: 2, label: 'Install', active: currentPage === 2 },
    { id: 3, label: 'Offline', active: currentPage === 3 },
    { id: 4, label: 'Repair', active: currentPage === 4 },
    { id: 5, label: 'Output', active: currentPage === 5 },
  ];

  const troubleshootingItems = [
    { id: '01', title: 'Printer Setup Issues', icon: Printer },
    { id: '02', title: 'Printer Offline Issues', icon: XCircle },
    { id: '03', title: 'WiFi Connection Errors', icon: Wifi },
    { id: '04', title: 'Paper Jam Errors', icon: FileText },
    { id: '05', title: 'Print Jobs Stuck in Queue', icon: Hourglass },
    { id: '06', title: 'Scanner Malfunctions', icon: Activity },
  ];

  // ── PAGE 1: 123 HP COM SETUP (100% WORD-FOR-WORD) ──────────────────

  const renderPage1Text = () => (
    <div className="space-y-10">
      <div className="border-l-4 border-blue-500 pl-6 mb-10">
        <h2 className="text-2xl font-bold text-[#0045ac] mb-2 font-sans">123 HP Com Setup – Complete Step-by-Step Guide for New Printer Installation</h2>
        <div className="text-[10px] text-gray-400 font-normal uppercase tracking-widest leading-loose">
           <span>Meta Title: 123 HP Com Setup Guide | Step-by-Step HP Printer Setup</span><br/>
           <span>Meta Description: Learn how to complete 123 HP com setup with step-by-step instructions for printer installation, Wi-Fi connection, driver download, and first-time setup.</span>
        </div>
      </div>

      <div className="space-y-4 text-gray-700 text-lg font-normal leading-relaxed">
        <p>Setting up a new printer should be simple, clear, and frustration-free. If you are searching for 123 hp com setup, you are most likely trying to install your HP printer for the first time, connect it to Wi-Fi, download the correct software, and start printing without delays.</p>
        <p>This guide explains the full setup process in detail so users can understand not only what to do, but also why each step matters. A properly completed printer setup helps prevent later issues such as printer offline errors, driver conflicts, connection failures, and incomplete installation.</p>
        <p>Whether you are setting up a printer for home use, student work, remote office use, or everyday business printing, following the correct sequence can improve performance from the beginning.</p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800">What Is 123 HP Com Setup?</h3>
        <p className="text-gray-700">The term 123 hp com setup is commonly used by users looking for the HP printer setup process. It usually refers to the installation flow for a new HP printer, including driver download, software configuration, wireless setup, and first-time alignment.</p>
        <p className="font-bold text-slate-800">Most users search this keyword when they need help with:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 font-normal">
          <li>setting up a brand-new printer</li>
          <li>installing printer software on Windows or Mac</li>
          <li>connecting the printer to Wi-Fi</li>
          <li>printing a test page</li>
          <li>fixing setup errors during installation</li>
        </ul>
        <p className="text-gray-700">The goal of this page is to help users complete that setup smoothly with clear step-by-step instructions.</p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800">Before You Start the Printer Setup</h3>
        <p className="text-gray-700">Before beginning the installation process, it is important to make sure everything needed for setup is ready. Skipping small preparation steps often leads to unnecessary setup interruptions later.</p>
        <p className="font-bold text-slate-800">You should have:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>the printer and power cable</li>
          <li>setup ink or toner cartridges</li>
          <li>plain white paper</li>
          <li>a stable Wi-Fi connection if setting up wirelessly</li>
          <li>the printer model number</li>
          <li>a computer, laptop, tablet, or smartphone for installation</li>
        </ul>
        <p className="text-gray-700">If the device is being installed in a home or office environment with multiple Wi-Fi networks, it is also a good idea to confirm which network the printer should use before starting.</p>
      </div>

      <div className="space-y-12 pt-6">
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 1: Unbox the Printer and Remove All Packaging Materials</h4>
          <p className="text-gray-700">The first step in the 123 hp com setup process is physical preparation of the printer. Carefully open the box and remove all protective packaging. Most printers include tape, foam inserts, cardboard supports, and internal locks that protect the device during shipping. These materials must be removed fully before the printer is turned on. Pay close attention to: the scanner lid area, paper tray packaging, cartridge access section, any orange or blue setup tapes, or plastic guards inside moving parts. This step matters because even one small internal packing piece can prevent the printer from initializing properly. If the printer makes unusual noise during startup, it often means something inside was not removed. After unpacking, place the printer on a flat and stable surface with enough room for paper loading and ventilation.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 2: Connect the Power Cable and Turn the Printer On</h4>
          <p className="text-gray-700">Once the printer has been unpacked, connect the power cable directly to a reliable wall outlet. It is usually better to avoid loose adapters or unstable power strips during the first setup. Turn the printer on using the power button. The printer may take a few moments to initialize. On models with a display screen, you will usually be asked to select: language, country or region, time or basic preferences. This initial configuration helps the device prepare for software pairing and network setup. If the screen does not respond immediately, give the printer a little time to complete startup. During this stage, the printer may also move internal components into position for cartridge installation.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 3: Install the Setup Ink or Toner Cartridges</h4>
          <p className="text-gray-700">After powering on the printer, the next step is installing the cartridges included in the box. New printers are typically shipped with setup cartridges that are meant specifically for first-time installation. Open the cartridge access door and wait until the carriage stops moving. Insert each cartridge into the correct slot, making sure it clicks into place securely. When the cartridges are installed correctly: the printer usually confirms installation on screen, internal priming may begin automatically, and the printer may ask for paper if it is not already loaded. This step is important because incorrect cartridge placement can cause setup interruptions, cartridge recognition errors, or poor initial print quality. If the printer requests alignment after cartridge installation, continue to the next step rather than skipping it.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 4: Load Paper and Complete Alignment</h4>
          <p className="text-gray-700">Most printers require paper to be loaded before the setup can finish. Use plain white letter or A4 paper, depending on your region. Adjust the paper guides so the stack is secure but not too tight. Once paper is loaded, the printer may automatically print an alignment page. An alignment page helps the device calibrate print quality and cartridge positioning. On some models, you may be asked to place the page on the scanner glass and scan it. This helps improve text sharpness, color placement, and print consistency. This step may feel small, but it is a key part of first-time printer setup. If skipped or done incorrectly, the printer may still install but produce poor output or setup warnings.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 5: Connect the Printer to Wi-Fi</h4>
          <p className="text-gray-700 font-normal">Open the wireless or network settings on the printer control panel. Choose the wireless setup wizard or network setup option. Select your Wi-Fi network name. Enter the wireless password carefully. Wait for the confirmation that the connection was successful. On many printers, a solid wireless light indicates the connection is active. A blinking wireless light often means the device is still attempting to connect or has lost connection. A successful network connection is essential because the software installation on your computer usually depends on detecting the printer over the same network. For best results, keep the printer and computer on the same Wi-Fi network during setup.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 6: Download the Printer Software and Driver</h4>
          <p className="text-gray-700">Once the printer is connected to the network, the next stage is software installation. This software helps your computer communicate with the printer correctly. It also enables features like: printing, scanning, device management, ink level monitoring, firmware updates, or wireless setup assistance. During installation, users are often given the option to use either a simplified app-based setup or the full printer software package. Using the correct driver is important because a generic or outdated printer driver can lead to limited functionality, connection issues, or printing errors later.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 7: Install the Printer on Your Computer or Mobile Device</h4>
          <p className="text-gray-700">After downloading the software, open the installer and follow the on-screen instructions. Choose the connection type that matches how your printer is set up (wireless, USB, or network). If the printer is already connected to Wi-Fi, the installer should search for available printers on the network. Once your printer appears, select it and continue. At the end of the installation, most systems offer a test print option. It is a good idea to use it immediately. A successful test page confirms that the device, driver, and connection are all working together correctly.</p>
        </div>
      </div>

      <div className="space-y-6 pt-10">
        <h3 className="text-xl font-bold text-slate-800">Common Problems During 123 HP Com Setup</h3>
        <p className="text-gray-700">Understand the reason behind each problem to make troubleshooting easier:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
             {t: "Printer Not Detected", d: "This usually happens when the printer and computer are not on the same network or the wireless connection is incomplete."},
             {t: "Wi-Fi Setup Failed", d: "Double-check the network password and make sure you are using the correct network. A weak signal can also interrupt the setup."},
             {t: "Installation Stuck", d: "This can happen because of interrupted download, operating system restrictions, or older software files on the computer."},
             {t: "Alignment/Cartridge Error", d: "Make sure the cartridges are fully seated and the printer is using the setup cartridges intended for initial installation."}
           ].map((problem, i) => (
             <div key={i} className="bg-gray-50 p-6 rounded-2xl">
                <p className="font-bold text-[#0045ac] mb-2">{problem.t}</p>
                <p className="text-sm text-gray-600">{problem.d}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white p-10 rounded-3xl mt-12">
         <h3 className="text-lg font-bold mb-4">Tips for a Smoother Printer Setup Experience</h3>
         <p className="text-slate-400 text-sm leading-relaxed">Keep the printer near the router during first-time wireless setup. Avoid using guest Wi-Fi networks or unstable mobile hotspots. Make sure your operating system is updated. If installing on multiple devices, finish setup on one main computer first before adding phones or other systems. These small details help reduce setup errors and improve long-term reliability.</p>
      </div>
    </div>
  );

  // ── PAGE 2: HP PRINTER SETUP & INSTALL (100% WORD-FOR-WORD) ────────

  const renderPage2Text = () => (
    <div className="space-y-10">
      <div className="border-l-4 border-blue-500 pl-6 mb-10">
        <h2 className="text-2xl font-bold text-[#0045ac] mb-2 uppercase">HP Printer Setup & Install – Complete Guide for First-Time Installation</h2>
        <div className="text-[10px] text-gray-400 font-normal uppercase tracking-widest leading-loose">
           <span>Meta Title: HP Printer Setup and Install Guide | Complete Installation Steps</span><br/>
           <span>Meta Description: Learn how to complete HP printer setup and install correctly with detailed steps for wireless setup, USB setup, driver installation, and first-time configuration.</span>
        </div>
      </div>

      <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
        <p>If you are searching for hp printer setup & install, you most likely want a complete guide that explains how to prepare your printer, connect it to your device, install the correct software, and start using it without confusion.</p>
        <p>Printer installation is not only about turning the device on and downloading a driver. A successful setup includes physical preparation, connection setup, software installation, system detection, and a final test to confirm everything is working as expected.</p>
        <p>This page is written as a complete standalone installation guide for users who want a clear and detailed explanation from start to finish.</p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800">Understanding HP Printer Setup and Installation</h3>
        <p className="text-gray-700">Printer setup and printer installation are closely related, but they are not exactly the same thing.</p>
        <p className="text-gray-700"><strong>Printer setup</strong> usually refers to preparing the hardware, adding cartridges, loading paper, connecting the printer to Wi-Fi or USB, and completing the printer’s on-device configuration.</p>
        <p className="text-gray-700"><strong>Printer installation</strong> usually refers to adding the printer to a computer, downloading the correct software, installing the driver, and enabling print and scan functions.</p>
        <p className="text-gray-700 font-medium italic text-sm">A good landing page for this keyword should cover both, because users searching hp printer setup & install generally want the complete process, not just one part of it.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-50 p-8 rounded-3xl">
         <div>
           <h4 className="font-bold text-[#0045ac] mb-3">Wireless Setup</h4>
           <p className="text-sm text-gray-700">Ideal for users who want to print from laptops, smartphones, or multiple devices in the same home or office. It gives more flexibility and avoids physical cable dependence.</p>
         </div>
         <div>
           <h4 className="font-bold text-[#0045ac] mb-3">USB Setup</h4>
           <p className="text-sm text-gray-700">Preferred when the printer is located close to a computer or when the network connection is unstable. It can also be helpful during first-time troubleshooting if wireless setup is failing.</p>
         </div>
      </div>

      <div className="space-y-12 pt-6">
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 1: Prepare the Printer for Setup</h4>
          <p className="text-gray-700">Start by unpacking the printer and removing all internal and external packaging materials. Place the printer on a stable surface and connect the power cable. When the printer turns on for the first time, it usually prompts you to confirm basic preferences such as language and region. These settings are part of the setup process and should be completed before trying to install the software on your device.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 2: Install Ink or Toner and Load Paper</h4>
          <p className="text-gray-700">Open the cartridge access area and insert the setup cartridges or toner included with the device. Wait for the printer to recognize them and complete any automatic initialization. After that, load plain white paper into the input tray. Some printers will print an alignment page automatically during first-time setup. This stage is essential because incomplete cartridge installation or missing paper can interrupt the rest of the setup process.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 3: Connect the Printer Using Wireless or USB</h4>
          <p className="text-gray-700 font-bold mb-2">Wireless Connection Setup</p>
          <p className="text-gray-700 mb-4">Use the printer control panel to open network settings and connect the printer to your Wi-Fi network. Enter the password carefully and wait until the connection is confirmed. During wireless installation, make sure the computer or phone you are using is connected to the same network. If they are on different networks, the software may not detect the printer.</p>
          <p className="text-gray-700 font-bold mb-2">USB Connection Setup</p>
          <p className="text-gray-700">If you are using USB, connect the cable only when the installation software asks you to. Plugging it in too early can sometimes cause the system to install a generic driver instead of the intended software package.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 4: Download the Printer Driver and Software</h4>
          <p className="text-gray-700 font-normal">Printer software allows the operating system to communicate with the printer correctly. Without the right software, the printer might appear installed but not work properly for advanced features such as scanning, device status reporting, or wireless management. The installation package typically includes: print driver, scan software, printer utility tools, device management options, and update tools. This step is one of the most important parts of the hp printer setup & install process because driver compatibility directly affects performance.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 5: Run the Installer and Add the Printer</h4>
          <p className="text-gray-700">After downloading the software, open the setup file and start the installation wizard. The installer will usually ask you to admit terms, choose connection type, and detect your printer. If the printer is detected properly, continue until the setup is complete. If not, the software may offer troubleshooting steps such as checking the connection, restarting the printer, or trying a different method.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 6: Print a Test Page and Confirm Scanner Setup</h4>
          <p className="text-gray-700 font-normal">After installation, it is always a good idea to print a test page to confirm: the driver is installed correctly, the printer can communicate with the computer, paper handling is normal, and print output looks correct. If your printer also supports scanning, open the printer software or scanning utility and test a basic scan. This confirms that the installation is complete for both printing and scanning functions.</p>
        </div>
      </div>

      <div className="space-y-6 pt-10">
        <h3 className="text-xl font-bold text-slate-800">Common HP Printer Installation Issues</h3>
        <ul className="space-y-4 text-gray-700 font-normal">
          <li><strong>Software Cannot Find Device:</strong> Restarting the router, printer, and computer often refreshes the discovery path.</li>
          <li><strong>USB Setup stuck:</strong> Restarting installation and reconnecting the cable only when prompted usually helps.</li>
          <li><strong>Driver Installed but No Printing:</strong> Check that the printer is set as Default in settings.</li>
          <li><strong>Scanner Feature Missing:</strong> A more complete software package may be needed instead of only a basic driver.</li>
        </ul>
      </div>

      <div className="bg-slate-900 text-white p-10 rounded-3xl mt-12">
         <h3 className="text-lg font-bold mb-4 uppercase">Best Practices After Setup and Install</h3>
         <p className="text-slate-400 text-sm leading-relaxed">Keep the printer software updated when system changes occur. Use the same stable Wi-Fi network for wireless printing. Avoid frequently switching the printer between multiple temporary networks. These habits help reduce connection drops, offline errors, and repeated installation problems.</p>
      </div>
    </div>
  );

  // ── PAGE 3: HP PRINTER OFFLINE FIX (100% WORD-FOR-WORD) ────────────

  const renderPage3Text = () => (
    <div className="space-y-10">
      <div className="border-l-4 border-blue-500 pl-6 mb-10">
        <h2 className="text-2xl font-bold text-[#0045ac] mb-2 uppercase">HP Printer Offline Fix – Step-by-Step Guide to Restore Printer Connection</h2>
        <div className="text-[10px] text-gray-400 font-normal uppercase tracking-widest leading-loose">
           <span>Meta Title: HP Printer Offline Fix | Step-by-Step Guide to Bring Printer Online</span><br/>
           <span>Meta Description: Fix HP printer offline issues with step-by-step guidance. Learn how to restore connection, check settings, clear queue problems, and keep your printer online.</span>
        </div>
      </div>

      <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
        <p>Seeing an offline printer message can be frustrating, especially when the printer appears powered on and ready. If you are searching for hp printer offline fix, you are likely dealing with a situation where the printer is not communicating properly with your computer or network.</p>
        <p>This issue can happen even when the device was working earlier. In many cases, the cause is not the printer itself but a communication problem between the printer, operating system, Wi-Fi network, or print queue.</p>
        <p>This page explains the offline problem in detail and gives clear steps to bring the printer back online.</p>
      </div>

      <div className="space-y-6 bg-gray-50 p-8 rounded-3xl">
        <h3 className="text-xl font-bold text-slate-800">What Does “Printer Offline” Mean?</h3>
        <p className="text-gray-700">When a printer shows as offline, it usually means the computer cannot send print jobs to it successfully. The printer may be turned on, connected to power, and even connected to Wi-Fi, but the system still treats it as unavailable. This can happen because of network interruptions, incorrect status settings, a stuck print queue, outdated drivers, router reconnection issues, or IP address changes.</p>
        <p className="text-gray-700 font-normal italic text-sm">Understanding the cause helps you apply the right fix instead of repeatedly reinstalling the printer without solving the actual issue.</p>
      </div>

      <div className="space-y-12 pt-6">
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 1: Confirm the Printer Is Powered On and Ready</h4>
          <p className="text-gray-700">Before changing any settings, check the printer itself. Look at the control panel display and confirm that: the printer is on, there are no visible error messages, paper and cartridges are installed properly, and the wireless light is active. A printer that is paused, stuck on an error screen, or still restarting may appear offline on the computer even though the real issue is on the device side.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 2: Check the Wi-Fi or Cable Connection</h4>
          <p className="text-gray-700 font-bold mb-2">If Using Wi-Fi</p>
          <p className="text-gray-700 mb-4">Make sure the printer is connected to the same Wi-Fi network as your computer. A very common reason for offline errors is that the printer reconnects to a different network after the router restarts, or the computer switches to another saved Wi-Fi network. If they are on different networks, the printer may appear offline.</p>
          <p className="text-gray-700 font-bold mb-2">If Using USB</p>
          <p className="text-gray-700">Check whether the cable is firmly connected on both ends. Try another USB port if needed.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 3: Set the Printer as the Default Printer</h4>
          <p className="text-gray-700">Sometimes the system tries to send print jobs to another printer entry instead of the intended device. Open the printer settings on your computer and set the intended printer as the default printer. This is especially useful if multiple printers were installed before or the system recently updated. Default printer confusion is more common than most users realize.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 4: Make Sure “Use Printer Offline” Is Not Enabled</h4>
          <p className="text-gray-700">In some systems, the printer queue settings include an option called Use Printer Offline. If this option is enabled, the operating system intentionally holds the printer in offline mode even when the printer is available. Open the printer queue and review its settings. If offline mode is enabled, turn it off and try printing again.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 5: Clear the Print Queue</h4>
          <p className="text-gray-700">A stuck or corrupted print job can cause communication problems. Open the print queue and cancel all pending jobs. Once the queue is empty, restart the printer and try sending a fresh test page. This step helps because old failed print jobs can keep the system from sending new ones correctly.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 6: Restart the Printer, Computer, and Router</h4>
          <p className="text-gray-700">One of the most effective offline fixes is a full power cycle. Turn off the printer. Restart the computer. Unplug the router for a short period, then reconnect it. Once the network is back online, power the printer on again and wait for it to reconnect fully. This refreshes network communication, IP assignments, and temporary memory errors.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 7: Check the Printer’s IP Address</h4>
          <p className="text-gray-700 font-normal">Wireless printers often receive an IP address automatically. Sometimes that address changes after a restart. If the computer is still trying to reach the old one, the printer shows as offline. Printing a network configuration page can help confirm the current IP address. In some cases, assigning a manual or static IP can help prevent the problem from repeating.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 8: Update or Reinstall the Printer Driver</h4>
          <p className="text-gray-700">If the printer connection is fine but the offline message continues, the driver may be outdated or corrupted. Driver issues can happen after system updates or incomplete installation. Installing the correct and current driver can restore proper communication and remove false offline reporting.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Step 9: Restart the Print Spooler Service</h4>
          <p className="text-gray-700 text-normal">The print spooler is the service that manages print jobs. If it becomes stuck, the printer may seem offline even when hardware is fine. Restarting the spooler helps clear print processing issues. This is particularly useful when documents remain stuck or the printer status does not update normally.</p>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-10 rounded-3xl mt-12">
         <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter">How to Prevent the Printer From Going Offline Again</h3>
         <p className="text-slate-400 text-sm leading-relaxed">Keep the printer on a stable network and avoid frequent Wi-Fi changes. If possible, assign a static IP address. Keep your printer driver updated. Make sure the printer remains the default device. Restart the printer and router occasionally if the network environment is unstable. These preventive steps help improve long-term reliability.</p>
      </div>
    </div>
  );

  // ── PAGE 4: HP PRINTER TROUBLESHOOTING (100% WORD-FOR-WORD) ────────

  const renderPage4Text = () => (
    <div className="space-y-10">
      <div className="border-l-4 border-blue-500 pl-6 mb-10">
        <h2 className="text-2xl font-bold text-[#0045ac] mb-2 uppercase">HP Printer Troubleshooting – Complete Guide to Fix Common Printer Problems</h2>
        <div className="text-[10px] text-gray-400 font-normal uppercase tracking-widest leading-loose">
           <span>Meta Title: HP Printer Troubleshooting Guide | Fix Printing, Driver, and Connection Issues</span><br/>
           <span>Meta Description: Complete HP printer troubleshooting guide with detailed fixes for printing issues, connection errors, poor print quality, scanner problems, and driver conflicts.</span>
        </div>
      </div>

      <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
        <p>Printers are essential for daily work, school tasks, office paperwork, shipping labels, scanning, and document handling. When a printer stops working as expected, even a small issue can interrupt productivity.</p>
        <p>If you are searching for hp printer troubleshooting, you likely need a detailed guide that explains how to identify and solve common printer problems such as printing failures, poor print quality, connection errors, scanner issues, or software conflicts.</p>
        <p>This page is built as a complete troubleshooting resource, organized by problem type so users can quickly understand the issue and follow the right fix.</p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800">How to Approach Printer Troubleshooting Effectively</h3>
        <p className="text-gray-700 font-normal">Good troubleshooting begins with identifying the category of the problem: setup/installation, printer not printing, print quality, network/wireless, offline status, scan feature, driver/software, or hardware errors. When users understand the category, they can solve it faster and avoid unnecessary resets.</p>
      </div>

      <div className="space-y-10 pt-6">
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Problem 1: Printer Not Printing</h4>
          <p className="text-gray-700">Check whether the printer is powered on and ready. Verify that the correct printer is selected. Make sure paper is loaded and the queue is not full. If the printer still does not print, restart it and send a new test page. A fresh test page removes the possibility that the document itself is causing the issue.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Problem 2: Poor Print Quality</h4>
          <p className="text-gray-700">Poor quality is often related to: low ink, clogged printheads, alignment issues, or incorrect paper type. To improve quality, check supply levels and run the built-in printhead cleaning. Review your print settings as well—Draft mode or low-resolution options can affect appearance even when hardware is fine.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Problem 3: Printer Shows Offline or Unavailable</h4>
          <p className="text-gray-700">Troubleshooting involves verifying the network connection, setting the printer as default, removing offline mode in queue settings, and clearing blocked jobs. Offline troubleshooting is an important part of a complete guide because many users encounter it during broader performance issues.</p>
        </div>
        <div>
           <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Problem 4: Wireless Connection Problems</h4>
           <p className="text-gray-700">Confirm the printer is connected to the correct network and that the signal is strong. If the router has separate bands, make sure the printer and computer connect on the same usable network. A printer that frequently drops off may benefit from a more stable connection configuration.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Problem 5: Driver or Software Issues</h4>
          <p className="text-gray-700">If the driver is missing or damaged, features like scanning may stop working. Reinstalling the full printer software package often helps restore normal performance after system updates. A basic driver may allow simple printing but not advanced utility features.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Problem 6: Scanner Not Working</h4>
          <p className="text-gray-700">This can happen because scan software is not installed or the scanner was disabled during setup. Testing the scan function separately helps confirm if the issue is isolated. Since scanning depends on full software support, this issue is common when users install only a minimal driver.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Problem 7: Paper Jams and Paper Feed Errors</h4>
          <p className="text-gray-700">Carefully remove jammed paper without tearing it. Inspect the feed path for leftover pieces. Reload paper neatly and adjust the guides so the stack is secure. A clean reload is just as important as removing the visible jam to prevent feed errors from returning.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Problem 8: Print Jobs Stuck in Queue</h4>
          <p className="text-gray-700">A stuck print queue can make the printer seem broken even when the hardware is fine. Clearing the queue and restarting the print service can solve many cases. This type of issue often affects anyone printing multiple jobs one after another.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#0045ac] mb-2 text-lg">Problem 9: Slow Printing or Delayed Response</h4>
          <p className="text-gray-700">This can result from: wireless signal delays, large print files, high-resolution settings, or busy network traffic. Improving speed often involves checking network stability, reducing file complexity, or reviewing print quality settings.</p>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-10 rounded-3xl mt-12">
         <h3 className="text-lg font-bold mb-4 uppercase">Best General Troubleshooting Routine</h3>
         <p className="text-slate-400 text-sm leading-relaxed">Start by checking the printer’s physical status. Confirm power, paper, and cartridges. Then verify the connection. Next, check the print queue and settings. Restart the devices if needed. After that, review the driver and software. If the problem continues, reinstall the printer software and test again. This layered approach prevents users from skipping the simple fix.</p>
      </div>
    </div>
  );

  // ── PAGE 5: HP PRINTER NOT PRINTING (100% WORD-FOR-WORD) ──────────

  const renderPage5Text = () => (
    <div className="space-y-10">
      <div className="border-l-4 border-blue-500 pl-6 mb-10">
        <h2 className="text-2xl font-bold text-[#0045ac] mb-2 uppercase">HP Printer Not Printing – Complete Step-by-Step Guide to Fix the Problem</h2>
        <div className="text-[10px] text-gray-400 font-normal uppercase tracking-widest leading-loose">
           <span>Meta Title: HP Printer Not Printing | Step-by-Step Fix Guide</span><br/>
           <span>Meta Description: Learn how to fix an HP printer not printing with step-by-step solutions for connection issues, print queue errors, driver problems, cartridge checks, and printer troubleshooting.</span>
        </div>
      </div>

      <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
        <p>If you are searching for hp printer not printing, you are likely dealing with one of the most common printer issues users face. The printer may be powered on, connected to your computer or Wi-Fi, and appear ready, but when you send a document, nothing prints. In some cases, the print job stays stuck in the queue. In others, the printer acts as if it received the command but does not respond.</p>
        <p>This issue can happen for many reasons, including connection problems, incorrect printer settings, low or unrecognized cartridges, paper feed issues, software conflicts, or print spooler errors. The good news is that most of these problems can be fixed by following the right troubleshooting sequence.</p>
        <p>This page explains the issue in detail and gives a full step-by-step process to help restore printing properly.</p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800">Why Is My HP Printer Not Printing?</h3>
        <p className="text-gray-700">A printer may stop printing because of: an unstable Wi-Fi or USB connection, the wrong printer being selected, a stuck print queue, an offline printer status, low supply, paper jam, outdated printer drivers, or spooler service interruptions. Understanding the possible causes helps you fix the problem more efficiently instead of repeating random steps.</p>
      </div>

      <div className="space-y-6 p-8 bg-blue-50/50 rounded-3xl">
        <h3 className="text-xl font-bold text-slate-800">Start With the Basics Before Advanced Troubleshooting</h3>
        <p className="text-gray-700 mb-4">Make sure: the printer is powered on, there are no error lights, paper is loaded properly, cartridges are installed correctly, and the connection is active. If the printer display shows an attention warning, solve that first before checking computer settings.</p>
      </div>

      <div className="space-y-12 pt-6">
        {[
          { t: "Step 1: Confirm the Printer Is Ready to Print", d: "The first step in fixing hp printer not printing is checking whether the printer itself is actually ready. Look for: blinking warning lights, low ink alerts, cartridge access door not fully closed, empty or misaligned paper tray, maintenance or setup prompt. If the printer is still finishing startup, cleaning, alignment, or internal preparation, it may not respond to print jobs yet. Wait until the printer shows a ready status before testing again. This step matters because software troubleshooting will not help if the printer is paused by a hardware condition." },
          { t: "Step 2: Check the Connection Between Printer and Device", d: "Make sure the printer and your computer are connected to the same wireless network. If using USB, check that the cable is firmly connected and not damaged. Try another USB port if needed. A weak or broken connection may allow the printer to appear installed while still preventing successful printing." },
          { t: "Step 3: Make Sure the Correct Printer Is Selected", d: "Sometimes the printer is working, but the document is being sent to the wrong device. Open your print dialog and confirm that the intended printer is selected. Then check the printer settings on your system and set your preferred printer as the default printer. This is a simple step, but it solves more issues than many users expect." },
          { t: "Step 4: Check Whether the Printer Is Offline or Paused", d: "A printer that is marked as offline or paused will not print even if it is powered on and connected. Open the printer queue and review its status. If the printer is paused or set to offline mode, disable that status and try printing again. A paused or offline state may happen after a failed job, a restart, or a connection interruption." },
          { t: "Step 5: Clear Stuck Print Jobs From the Queue", d: "A blocked print queue is one of the most common causes of an hp printer not printing problem. Open the queue and remove all pending jobs. After clearing the queue, restart the printer and send a small test page. This helps because old failed jobs no longer block the queue and the printer receives a fresh print request." },
          { t: "Step 6: Check Paper Loading and Paper Feed Path", d: "Sometimes the printer is not picking up paper correctly. Even when there is paper in the tray, issues such as misaligned guides, curled sheets, or hidden scraps from a previous jam can stop printing. Remove the paper stack and reload it neatly. Adjust the guides so they are snug but not too tight. A clean reload often fixes issues mistake for software problems." },
          { t: "Step 7: Check Ink or Toner Cartridge Status", d: "A printer may stop printing if cartridges are empty, low, improperly installed, or not recognized. Check whether: the cartridges are seated securely, protective tape was removed, or the display shows an ink warning. If needed, reseat the cartridges carefully and test again. If the printer still does not recognize them, a replacement may be required." },
          { t: "Step 8: Restart the Printer, Computer, and Router", d: "A full restart is one of the most effective ways to fix temporary communication problems. Turn off the printer, restart your computer, and if you are using Wi-Fi, restart your router as well. Once the network is fully back online, turn the printer on again and wait until it reaches ready status. This step refreshes network communication and device detection." },
          { t: "Step 9: Print a Test Page Directly From Printer Settings", d: "Testing with your original document does not always reveal whether the problem is the printer or the file itself. Printing a test page can confirm: whether the printer is communicating with the system, if the driver is responding, and if paper feed works normally. If the test page prints successfully, the problem may be related to a specific application or file." },
          { t: "Step 10: Update or Reinstall the Printer Driver", d: "A damaged or outdated printer driver can cause the printer to stop printing even if it appears installed. Reinstalling the proper driver helps refresh the communication path after system updates. It can also restore missing features, correct false status reporting, and improve device response." },
          { t: "Step 11: Restart the Print Spooler Service", d: "The print spooler manages all print jobs on many systems. If it stops responding, the printer may appear connected but still not print anything. Restarting the spooler helps when the print queue will not clear or jobs remain in the queue indefinitely. This step is especially important on Windows systems." },
          { t: "Step 12: Check for Printer-Specific Error Messages", d: "Review the printer display or software utility for specific warnings: door open, paper jam, cartridge missing, or service required. Specific error messages should always be addressed directly because they often explain why printing is blocked even when everything else seems fine." },
          { t: "Step 13: Test Printing From Another Application or Device", d: "If the printer appears ready but one file will not print, test from a different source. Try printing a plain text document or a browser page. This helps determine whether the issue is printer-wide, application-specific, or network-specific. If another device can print successfully, the problem is with the original computer." }
        ].map((step, i) => (
          <div key={i} className="group border-l-4 border-blue-50 pl-6 hover:border-[#0045ac] transition-all">
            <h4 className="text-xl font-bold text-[#0045ac] mb-2">{step.t}</h4>
            <p className="text-gray-700">{step.d}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white p-10 rounded-3xl mt-12">
         <h3 className="text-lg font-bold mb-4 uppercase">How to Prevent Printing Problems in the Future</h3>
         <p className="text-slate-400 text-sm leading-relaxed">Keep software updated. Use stable Wi-Fi. Avoid network switching. Load paper correctly. Replace low cartridges early. Restart occasionally. Preventive maintenance does not solve every problem, but it can significantly reduce repeated interruptions.</p>
      </div>
    </div>
  );

  const current = pageContents[currentPage];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-100 pb-12 overflow-x-hidden">
      
      {/* ── NAVIGATION ────────────────────────────────────────── */}
      <nav className="sticky top-0 z-[100] bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {phases.map((phase) => (
              <button 
                key={phase.id} 
                onClick={() => setCurrentPage(phase.id)} 
                className={`relative flex flex-col items-center gap-2 group transition-all ${phase.active ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] ${phase.active ? 'bg-[#0045ac] text-white' : 'bg-gray-100'}`}>
                  {phase.id}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest hidden md:block ${phase.active ? 'text-[#0045ac]' : 'text-gray-600'}`}>
                  {phase.label}
                </span>
              </button>
            ))}
          </div>
          <div className="flex gap-3">
             <div className="w-10 h-10 rounded bg-gray-50 flex items-center justify-center text-[#0045ac] hover:bg-gray-100 cursor-pointer"><Settings size={16}/></div>
             <div className="w-10 h-10 rounded bg-[#0045ac] text-white flex items-center justify-center cursor-pointer"><CircleHelp size={16}/></div>
          </div>
        </div>
      </nav>

      <main>
        {/* ── HERO (CONTENT-SPECIFIC 3D ASSETS) ───────────────────── */}
        <section className={`relative pt-20 pb-24 px-6 transition-all bg-gradient-to-br ${current.gradient} overflow-hidden`}>
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              <motion.div key={`text-${currentPage}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                   <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight shadow-sm">{current.heading}</h1>
                   <h3 className="text-xl font-medium opacity-90">{current.subheading}</h3>
                </div>
                <p className="text-lg opacity-80 leading-relaxed max-w-xl mx-auto lg:mx-0">{current.description}</p>
                <div className="flex pt-6 justify-center lg:justify-start">
                   <button className="bg-white text-blue-700 px-10 py-4 rounded-lg font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-gray-50 transition-all flex items-center gap-3">
                     {current.cta} <Zap size={16} fill="currentColor" />
                   </button>
                </div>
              </motion.div>
              <div className="relative flex items-center justify-center">
                 <AnimatePresence mode="wait">
                    <motion.div 
                        key={`img-${currentPage}`} 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }} 
                        animate={{ opacity: 1, scale: 1, y: 0 }} 
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-lg"
                    >
                       <img src={current.image} className="w-full h-auto object-contain drop-shadow-2xl z-20 relative" alt={current.heading} />
                    </motion.div>
                 </AnimatePresence>
              </div>
           </div>
        </section>

        {/* ── STRIP ────────────────────────────────────────────────── */}
        <section className="relative z-20 mt-[-40px] max-w-7xl mx-auto px-6">
           <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100">
              <div className="flex gap-10 overflow-x-auto pb-2 scrollbar-hide">
                {troubleshootingItems.map((item) => (
                  <div key={item.id} className="flex-none w-[220px] group cursor-pointer border border-transparent hover:border-blue-100 p-4 rounded-2xl transition-all">
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0045ac] flex items-center justify-center group-hover:bg-[#0045ac] group-hover:text-white transition-all"><item.icon size={18}/></div>
                      <span className="text-[11px] font-bold text-gray-200">{item.id}</span>
                    </div>
                    <h3 className="text-xs font-bold uppercase text-slate-700 tracking-wider leading-tight">{item.title}</h3>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* ── CONTENT AREA (Equal to above icon div) ────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-20">
           <AnimatePresence mode="wait">
              <motion.div key={`content-${currentPage}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-10 md:p-14 lg:p-20 rounded-[3rem] border border-gray-100 shadow-sm transition-all duration-500">
                  {currentPage === 1 && renderPage1Text()}
                  {currentPage === 2 && renderPage2Text()}
                  {currentPage === 3 && renderPage3Text()}
                  {currentPage === 4 && renderPage4Text()}
                  {currentPage === 5 && renderPage5Text()}

                  <div className="flex items-center justify-between pt-16 border-t border-gray-50 mt-20">
                     <div className="flex gap-6">
                        <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)} className={`px-10 py-3 rounded font-bold text-[10px] uppercase tracking-widest transition-all ${currentPage === 1 ? 'opacity-20 translate-y-1' : 'bg-gray-100 text-slate-700 hover:bg-gray-200'}`}>Back</button>
                        <button disabled={currentPage === 5} onClick={() => setCurrentPage(prev => prev + 1)} className={`px-10 py-3 rounded font-bold text-[10px] uppercase tracking-widest transition-all ${currentPage === 5 ? 'opacity-20 translate-y-1' : 'bg-[#0045ac] text-white shadow-xl'}`}>Next Part</button>
                     </div>
                     <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Stage {currentPage} of 5</p>
                  </div>
              </motion.div>
           </AnimatePresence>
        </section>

        {/* ── SUPPORT RELAY ────────────────────────────────────────── */}
        <section className="py-20 px-6 max-w-7xl mx-auto relative group">
           <div className="p-16 md:p-20 rounded-[4rem] bg-slate-900 relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center justify-between shadow-2xl">
              <div className="relative z-10 space-y-10 text-center lg:text-left">
                 <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase text-[#0045ac] tracking-[0.5em]">Support Relay</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tighter">Still Encountering Friction?</h2>
                 </div>
                 <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">Connect with our elite diagnostic team for real-time architectural optimization. Avoid unnecessary hardware downtime with specialized remote assistance.</p>
                 <button className="bg-[#0045ac] text-white px-10 py-5 rounded font-bold text-xs uppercase tracking-widest shadow-2xl">Establish Live Connection</button>
              </div>

              <div className="relative z-10 w-full lg:w-[380px]">
                 <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl">
                    <img src="/guide/banner5.jpg" alt="Support Specialist" className="w-full grayscale opacity-60" />
                 </div>
                 <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 flex items-center gap-6 group-hover:scale-110 transition-transform duration-700">
                    <div className="w-14 h-14 rounded-2xl bg-[#0045ac] text-white flex items-center justify-center text-xl font-bold">24</div>
                    <div className="text-left">
                       <p className="text-[9px] font-bold text-[#0045ac] uppercase tracking-widest leading-none mb-1">Status</p>
                       <p className="text-sm font-bold text-slate-800 uppercase leading-none mt-1">Active <br />Optimization</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      {/* ── LEGAL DISCLAIMER (Styled & Centered) ────────────────────────── */}
      <div className="bg-[#0045ac] py-20 px-6 mt-20">
         <div className="max-w-5xl mx-auto text-center">
            <p className="text-white text-[11px] font-bold uppercase tracking-[0.3em] leading-loose opacity-90">
              Prints Matrix operates as an independent third-party retailer. Manufacturer warranties, where applicable, are provided directly by the respective brands. Prints Matrix does not claim authorization or official partnership with any manufacturer unless explicitly stated.
            </p>
         </div>
      </div>

      <footer className="pt-20 pb-10 px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 opacity-30 text-center">
         <div className="text-center md:text-left">
            <span className="text-[10px] font-bold uppercase text-[#0045ac] tracking-[0.5em] mb-4 block">Prints Matrix Network</span>
            <p className="text-xs font-bold text-slate-500">Technical Architecture v2.9.5_Stable</p>
         </div>
      </footer>
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div>
  );
};

export default PrinterSetupGuide;
