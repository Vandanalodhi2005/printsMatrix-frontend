import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Clock,
  HeadphonesIcon,
  Laptop,
  Monitor,
  Smartphone,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
  PhoneCall,
  Mail,
  AlertCircle,
  Info,
  Download,
  RefreshCcw,
} from 'lucide-react';

/* ─── Color tokens ──────────────────────────────────────────────── */
// Primary navy:  #0a2558   Brand blue: #0045ac   Light bg: #f4f8ff
// Body text:     #1e293b   Muted text: #64748b   Border: #e2e8f0

const PrinterSetupGuide = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const pageParam = params.get('page');
    if (pageParam) {
      const p = parseInt(pageParam);
      if (!isNaN(p) && p >= 1 && p <= 5) {
        setCurrentPage(p);
      }
    }
  }, [search]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const pageContents = {
    1: {
      heading: 'Easy 123 Printer Setup',
      subheading: 'Start your printer setup in minutes.',
      description:
        'Follow our step-by-step 123 hp com setup guide to install drivers, connect your printer to Wi-Fi, and complete the setup process smoothly. Get your printer ready for first-time use without confusion.',
      cta: 'Start Printer Setup & Install',
      image: '/guide/setup.jpg',
    },
    2: {
      heading: 'Printer Setup & Install',
      subheading: 'Quick and simple installation process.',
      description:
        'Complete your HP printer setup & install with easy instructions. Learn how to configure your printer, install drivers, connect via Wi-Fi or USB, and start printing without delays.',
      cta: 'Start Printer Setup & Install',
      image: '/guide/install.jpg',
    },
    3: {
      heading: 'Fix Printer Offline Issue',
      subheading: 'Bring your printer back online quickly.',
      description:
        'Resolve HP printer offline problems with step-by-step solutions. Restore connection, fix network issues, clear print queue, and get your printer working again smoothly.',
      cta: 'Fix Your Offline Printer',
      image: '/guide/offline.jpg',
    },
    4: {
      heading: 'HP Printer Troubleshooting',
      subheading: 'Fix common printer issues easily.',
      description:
        'Use our complete HP printer troubleshooting guide to fix printing errors, connection issues, driver problems, and scanner malfunctions with simple steps.',
      cta: 'Start Troubleshooting',
      image: '/guide/repair.jpg',
    },
    5: {
      heading: 'HP Printer Not Printing Fix',
      subheading: 'Get your printer working again.',
      description:
        'Fix HP printer not printing issues with easy troubleshooting steps. Check connection, clear print queue, resolve driver errors, and restore printing quickly.',
      cta: 'Fix Printing Issue',
      image: '/guide/output.jpg',
    },
  };

  const phases = [
    { id: 1, label: 'Identify', pageMatch: [1] },
    { id: 2, label: 'Download', pageMatch: [2] },
    { id: 3, label: 'Install', pageMatch: [3, 4, 5] },
  ];

  const troubleshootingItems = [
    { id: '01', title: 'Printer Setup', icon: Printer },
    { id: '02', title: 'Printer Offline', icon: XCircle },
    { id: '03', title: 'WiFi Connectivity', icon: Wifi },
    { id: '04', title: 'Paper Jam Error', icon: FileText },
    { id: '05', title: 'Jobs in Queue', icon: Hourglass },
    { id: '06', title: 'Scanner Issues', icon: Activity },
  ];

  const trustBadges = [
    { icon: ShieldCheck, label: 'Expert Verified Guide' },
    { icon: Clock, label: 'Step-by-Step Process' },
    { icon: HeadphonesIcon, label: '24/7 Support Available' },
  ];

  // ── PAGE 1: 123 HP COM SETUP (100% WORD-FOR-WORD) ──────────────────

  const renderPage1Text = () => (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* ── Header Section ── */}
      <div className="relative p-8 rounded-[2rem] bg-gradient-to-br from-blue-50/50 to-white border border-blue-100/50 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/20 rounded-full blur-3xl -mr-16 -mt-16" />
        <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-4 leading-tight">
          123 HP Com Setup – <span className="text-[#0045ac]">Complete Step-by-Step Guide</span> for New Printer Installation
        </h2>
        <div className="flex flex-wrap gap-4 pt-2 border-t border-blue-100/50">
           <div className="flex flex-col gap-1">
             <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Meta Title</span>
             <span className="text-xs font-medium text-slate-600">123 HP Com Setup Guide | Step-by-Step HP Printer Setup</span>
           </div>
           <div className="hidden sm:block w-px h-8 bg-blue-100/50 my-auto" />
           <div className="flex flex-col gap-1 max-w-lg">
             <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Meta Description</span>
             <span className="text-xs font-medium text-slate-600 leading-relaxed">Learn how to complete 123 HP com setup with step-by-step instructions for printer installation...</span>
           </div>
        </div>
      </div>

      {/* ── Intro Content ── */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        <div className="space-y-6 text-slate-600 text-[17px] leading-relaxed font-medium pb-8 border-b border-slate-100">
          <p>Setting up a new printer should be simple, clear, and frustration-free. If you are searching for <span className="text-[#0045ac] font-bold">123 hp com setup</span>, you are most likely trying to install your HP printer for the first time, connect it to Wi-Fi, download the correct software, and start printing without delays.</p>
          <p>This guide explains the full setup process in detail so users can understand not only what to do, but also why each step matters. A properly completed printer setup helps prevent later issues such as printer offline errors, driver conflicts, connection failures, and incomplete installation.</p>
          <p>Whether you are setting up a printer for home use, student work, remote office use, or everyday business printing, following the correct sequence can improve performance from the beginning.</p>
        </div>
      </div>

      {/* ── Information Blocks ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-blue-200 transition-colors group">
          <h3 className="text-lg font-black text-[#0a2558] mb-5 flex items-center gap-3">
            <div className="w-2 h-6 bg-[#0045ac] rounded-full" /> What Is 123 HP Com Setup?
          </h3>
          <p className="text-slate-600 mb-6 leading-relaxed">The term 123 hp com setup is commonly used by users looking for the HP printer setup process. It usually refers to the installation flow for a new HP printer, including driver download, software configuration, wireless setup, and first-time alignment.</p>
          <p className="font-black text-[11px] uppercase tracking-widest text-[#0045ac] mb-4">Common User Objectives:</p>
          <ul className="space-y-3">
            {['setting up a brand-new printer', 'installing printer software on Windows or Mac', 'connecting the printer to Wi-Fi', 'printing a test page', 'fixing setup errors during installation'].map((li, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2.5 flex-shrink-0" /> {li}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
          <h3 className="text-lg font-black text-[#0a2558] mb-5 flex items-center gap-3">
            <div className="w-2 h-6 bg-[#0045ac] rounded-full" /> Preparation Checklist
          </h3>
          <p className="text-slate-600 mb-6 leading-relaxed">Before beginning the installation process, it is important to make sure everything needed for setup is ready. Skipping small preparation steps often leads to unnecessary setup interruptions later.</p>
          <p className="font-black text-[11px] uppercase tracking-widest text-[#0045ac] mb-4">Required Items:</p>
          <ul className="space-y-3">
            {['the printer and power cable', 'setup ink or toner cartridges', 'plain white paper', 'a stable Wi-Fi connection', 'the printer model number', 'a computer or mobile device'].map((li, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                <ShieldCheck size={14} className="text-green-500" /> {li}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Steps Section ── */}
      <div className="space-y-8">
        <div className="flex items-center gap-4 mb-10">
           <div className="w-12 h-12 rounded-2xl bg-[#0045ac] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-blue-200">1</div>
           <h3 className="text-xl font-black text-[#0a2558] uppercase tracking-tighter">The Setup Deployment Sequence</h3>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {[
            {s: "Step 1", t: "Unbox and Physical Preparation", d: "The first step in the 123 hp com setup process is physical preparation of the printer. Carefully open the box and remove all protective packaging. Most printers include tape, foam inserts, cardboard supports, and internal locks that protect the device during shipping. These materials must be removed fully before the printer is turned on. Pay close attention to: the scanner lid area, paper tray packaging, cartridge access section, any orange or blue setup tapes, or plastic guards inside moving parts. This step matters because even one small internal packing piece can prevent the printer from initializing properly. If the printer makes unusual noise during startup, it often means something inside was not removed. After unpacking, place the printer on a flat and stable surface with enough room for paper loading and ventilation."},
            {s: "Step 2", t: "Power Configuration", d: "Once the printer has been unpacked, connect the power cable directly to a reliable wall outlet. It is usually better to avoid loose adapters or unstable power strips during the first setup. Turn the printer on using the power button. The printer may take a few moments to initialize. On models with a display screen, you will usually be asked to select: language, country or region, time or basic preferences. This initial configuration helps the device prepare for software pairing and network setup. If the screen does not respond immediately, give the printer a little time to complete startup. During this stage, the printer may also move internal components into position for cartridge installation."},
            {s: "Step 3", t: "Cartridge Integration", d: "After powering on the printer, the next step is installing the cartridges included in the box. New printers are typically shipped with setup cartridges that are meant specifically for first-time installation. Open the cartridge access door and wait until the carriage stops moving. Insert each cartridge into the correct slot, making sure it clicks into place securely. When the cartridges are installed correctly: the printer usually confirms installation on screen, internal priming may begin automatically, and the printer may ask for paper if it is not already loaded. This step is important because incorrect cartridge placement can cause setup interruptions, cartridge recognition errors, or poor initial print quality. If the printer requests alignment after cartridge installation, continue to the next step rather than skipping it."},
            {s: "Step 4", t: "Calibration & Alignment", d: "Most printers require paper to be loaded before the setup can finish. Use plain white letter or A4 paper, depending on your region. Adjust the paper guides so the stack is secure but not too tight. Once paper is loaded, the printer may automatically print an alignment page. An alignment page helps the device calibrate print quality and cartridge positioning. On some models, you may be asked to place the page on the scanner glass and scan it. This helps improve text sharpness, color placement, and print consistency. This step may feel small, but it is a key part of first-time printer setup. If skipped or done incorrectly, the printer may still install but produce poor output or setup warnings."},
            {s: "Step 5", t: "Network Connectivity", d: "Open the wireless or network settings on the printer control panel. Choose the wireless setup wizard or network setup option. Select your Wi-Fi network name. Enter the wireless password carefully. Wait for the confirmation that the connection was successful. On many printers, a solid wireless light indicates the connection is active. A blinking wireless light often means the device is still attempting to connect or has lost connection. A successful network connection is essential because the software installation on your computer usually depends on detecting the printer over the same network. For best results, keep the printer and computer on the same Wi-Fi network during setup."},
            {s: "Step 6", t: "Software Acquisition", d: "Once the printer is connected to the network, the next stage is software installation. This software helps your computer communicate with the printer correctly. It also enables features like: printing, scanning, device management, ink level monitoring, firmware updates, or wireless setup assistance. During installation, users are often given the option to use either a simplified app-based setup or the full printer software package. Using the correct driver is important because a generic or outdated printer driver can lead to limited functionality, connection issues, or printing errors later."},
            {s: "Step 7", t: "Device Finalization", d: "After downloading the software, open the setup file and start the installation wizard. The installer will usually ask you to admit terms, choose connection type, and detect your printer. If the printer is detected properly, continue until the setup is complete. If not, the software may offer troubleshooting steps such as checking the connection, restarting the printer, or trying a different method. At the end of the installation, most systems offer a test print option. It is a good idea to use it immediately. A successful test page confirms that the device, driver, and connection are all working together correctly."}
          ].map((step, i) => (
            <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-slate-100 bg-white text-slate-800 flex items-center justify-center font-bold text-xs ring-4 ring-slate-50 group-hover:bg-[#0045ac] group-hover:text-white group-hover:border-[#0045ac] transition-all">
                        {i + 1}
                    </div>
                    {i < 6 && <div className="w-px h-full bg-slate-100 my-2" />}
                </div>
                <div className="pb-10">
                    <h4 className="text-lg font-black text-[#0a2558] mb-3 group-hover:text-[#0045ac] transition-colors">{step.t}</h4>
                    <p className="text-slate-600 leading-relaxed font-medium">{step.d}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Problem Solving ── */}
      <div className="p-10 rounded-[2.5rem] bg-[#0a2558] text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mb-32 -mr-32" />
        <h3 className="text-2xl font-black mb-8">Installation Diagnostics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {[
             {t: "Printer Not Detected", d: "This usually happens when the printer and computer are not on the same network or the wireless connection is incomplete."},
             {t: "Wi-Fi Setup Failed", d: "Double-check the network password and make sure you are using the correct network."},
             {t: "Installation Stuck", d: "This can happen because of interrupted download, operating system restrictions, or older software files."},
             {t: "Alignment/Cartridge Error", d: "Make sure the cartridges are fully seated and the printer is using the setup cartridges."}
           ].map((problem, i) => (
             <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <p className="font-black text-blue-300 mb-2 uppercase tracking-widest text-[10px]">{problem.t}</p>
                <p className="text-sm text-blue-50 leading-relaxed opacity-80">{problem.d}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white text-[#0045ac] flex items-center justify-center shadow-md flex-shrink-0">
            <Zap fill="currentColor" size={24} />
          </div>
          <div>
            <h4 className="font-black text-[#0a2558] mb-1">Architectural Tips for Setup</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">Keep the printer near the router during first-time wireless setup. Avoid using guest Wi-Fi networks or unstable mobile hotspots. Make sure your operating system is updated. If installing on multiple devices, finish setup on one main computer first before adding phones or other systems. These small details help reduce setup errors and improve long-term reliability.</p>
          </div>
      </div>
    </div>
  );

  // ── PAGE 2: HP PRINTER SETUP & INSTALL (100% WORD-FOR-WORD) ────────

  const renderPage2Text = () => (
    <div className="space-y-16">
      <div className="p-8 rounded-[2rem] bg-gradient-to-br from-indigo-50/50 to-white border border-indigo-100/50 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-4 leading-tight">HP Printer Setup & Install – <span className="text-indigo-600">Complete Guide</span> for First-Time Installation</h2>
        <div className="flex flex-wrap gap-4 pt-4 border-t border-indigo-100/30 text-[11px] font-bold text-slate-400 tracking-widest uppercase">
           <span>Meta Title: HP Printer Setup and Install Guide | Complete Installation Steps</span>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 text-lg leading-relaxed font-medium">If you are searching for <span className="text-indigo-600">hp printer setup & install</span>, you most likely want a complete guide that explains how to prepare your printer, connect it to your device, install the correct software, and start using it without confusion.</p>
        <p className="text-slate-600 text-lg leading-relaxed font-medium">Printer installation is not only about turning the device on and downloading a driver. A successful setup includes physical preparation, connection setup, software installation, system detection, and a final test to confirm everything is working as expected.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-black text-[#0a2558] mb-4">The Definition of Success</h3>
          <p className="text-slate-600 leading-relaxed mb-4 font-medium">Printer setup and printer installation are closely related, but they are not exactly the same thing. Understanding the difference helps streamline your workflow.</p>
          <div className="space-y-4">
             <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-400">
                <p className="text-sm font-black text-slate-800 mb-1">Hardware Setup</p>
                <p className="text-xs text-slate-600 leading-relaxed">Preparing hardware, adding cartridges, loading paper, and network configuration.</p>
             </div>
             <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-indigo-400">
                <p className="text-sm font-black text-slate-800 mb-1">Software Installation</p>
                <p className="text-xs text-slate-600 leading-relaxed">Adding the printer to a computer, downloading drivers, and enabling functions.</p>
             </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
           {[
             {t: "Wireless Mode", d: "Ideal for users who want to print from laptops, smartphones, or multiple devices in the same environment. Provides maximum flexibility.", c: "bg-blue-600"},
             {t: "USB Mode", d: "Preferred when the printer is located close to a computer or when network stability is low. Helpful for initial troubleshooting.", c: "bg-indigo-600"}
           ].map((mode, i) => (
             <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <div className={`w-8 h-8 ${mode.c} rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xs`}>{i+1}</div>
                <h4 className="font-black text-[#0a2558] mb-2">{mode.t}</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{mode.d}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="space-y-12">
        <h3 className="text-2xl font-black text-[#0a2558] flex items-center gap-4">
          <div className="w-1.5 h-8 bg-indigo-600 rounded-full" />
          Execution Steps
        </h3>
        <div className="grid grid-cols-1 gap-10">
          {[
            {s: "Step 1", t: "Physical Preparation", d: "Start by unpacking the printer and removing all internal and external packaging materials. Place the printer on a stable surface and connect the power cable. When the printer turns on for the first time, it usually prompts you to confirm basic preferences such as language and region. These settings are part of the setup process and should be completed before trying to install the software on your device."},
            {s: "Step 2", t: "Supply Initialization", d: "Open the cartridge access area and insert the setup cartridges or toner included with the device. Wait for the printer to recognize them and complete any automatic initialization. After that, load plain white paper into the input tray. Some printers will print an alignment page automatically during first-time setup. This stage is essential because incomplete cartridge installation or missing paper can interrupt the rest of the setup process."},
            {s: "Step 3", t: "Connectivity Deployment", d: "Use the printer control panel to open network settings and connect the printer to your Wi-Fi network. Enter the password carefully and wait until the connection is confirmed. During wireless installation, make sure the computer or phone you are using is connected to the same network. If they are on different networks, the software may not detect the printer. If you are using USB, connect the cable only when the installation software asks you to. Plugging it in too early can sometimes cause the system to install a generic driver instead of the intended software package."},
            {s: "Step 4", t: "Software Integration", d: "Printer software allows the operating system to communicate with the printer correctly. Without the right software, the printer might appear installed but not work properly for advanced features such as scanning, device status reporting, or wireless management. The installation package typically includes: print driver, scan software, printer utility tools, device management options, and update tools. This step is one of the most important parts of the hp printer setup & install process because driver compatibility directly affects performance."},
            {s: "Step 5", t: "System Recognition", d: "After downloading the software, open the setup file and start the installation wizard. The installer will usually ask you to admit terms, choose connection type, and detect your printer. If the printer is detected properly, continue until the setup is complete. If not, the software may offer troubleshooting steps such as checking the connection, restarting the printer, or trying a different method."},
            {s: "Step 6", t: "Quality Verification", d: "After installation, it is always a good idea to print a test page to confirm: the driver is installed correctly, the printer can communicate with the computer, paper handling is normal, and print output looks correct. If your printer also supports scanning, open the printer software or scanning utility and test a basic scan. This confirms that the installation is complete for both printing and scanning functions."}
          ].map((step, i) => (
            <div key={i} className="relative pl-12 sm:pl-16 border-l-2 border-slate-100 hover:border-indigo-200 transition-colors group">
              <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-white border-4 border-slate-100 group-hover:border-indigo-600 transition-colors" />
              <div className="space-y-2 pb-2">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{step.s}</span>
                <h4 className="text-lg font-black text-[#0a2558]">{step.t}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.5),transparent_50%)]" />
        <h3 className="text-xl font-black mb-8">Post-Setup Optimization</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
             {t: "Discovery Errors", d: "Restarting the router, printer, and computer often refreshes the discovery path."},
             {t: "Cabling Logic", d: "Restarting installation and reconnecting the cable only when prompted usually helps."},
             {t: "Priority Check", d: "Check that the printer is set as Default in system settings."},
             {t: "Feature Gaps", d: "A more complete software package may be needed instead of only a basic driver."}
           ].map((item, i) => (
             <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 size={16} className="text-indigo-400 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-sm font-black text-indigo-300">{item.t}</p>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{item.d}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );

  // ── PAGE 3: HP PRINTER OFFLINE FIX (100% WORD-FOR-WORD) ────────────

  const renderPage3Text = () => (
    <div className="space-y-16 animate-in intro-fade duration-700">
      {/* ── Header Section ── */}
      <div className="p-8 rounded-[2rem] bg-gradient-to-br from-slate-50 to-[#f0f6ff] border border-blue-100/50 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
           <Wifi size={120} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-4 leading-tight">HP Printer Offline Fix – <span className="text-[#0045ac]">Status Restoration</span> Protocol</h2>
        <div className="flex flex-wrap gap-4 pt-4 border-t border-blue-200/30 text-[11px] font-black text-slate-400 tracking-widest uppercase">
           <span>Meta Title: HP Printer Offline Fix | Restoration Steps</span>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 text-[17px] leading-relaxed font-medium">Seeing an offline printer message can be frustrating, especially when the printer appears powered on and ready. If you are searching for <span className="text-[#0045ac] font-bold underline decoration-blue-200 underline-offset-4">hp printer offline fix</span>, you are likely dealing with a situation where the printer is not communicating properly with your computer or network.</p>
        <p className="text-slate-600 text-[17px] leading-relaxed font-medium">This issue can happen even when the device was working earlier. In many cases, the cause is not the printer itself but a communication problem between the printer, operating system, Wi-Fi network, or print queue.</p>
      </div>

      <div className="p-10 rounded-3xl bg-blue-50/50 border border-blue-100 relative overflow-hidden group">
         <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0045ac] group-hover:w-2 transition-all" />
         <h3 className="text-xl font-black text-[#0a2558] mb-4">Diagnostic: What Does "Printer Offline" Mean?</h3>
         <p className="text-slate-600 leading-relaxed font-medium">When a printer shows as offline, it usually means the computer cannot send print jobs to it successfully. The printer may be turned on, connected to power, and even connected to Wi-Fi, but the system still treats it as unavailable. This can happen because of network interruptions, incorrect status settings, a stuck print queue, outdated drivers, router reconnection issues, or IP address changes.</p>
         <p className="mt-6 p-4 rounded-xl bg-white border border-blue-100 text-sm font-bold text-[#0045ac] italic shadow-sm">
           Understanding the cause helps you apply the right fix instead of repeatedly reinstalling the printer.
         </p>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-black text-[#0a2558] flex items-center gap-4">
           <Activity size={24} className="text-[#0045ac]" /> Restoration Sequence
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {s: "Phase 1", t: "Hardware Pulse Check", d: "Before changing any settings, check the printer itself. Look at the control panel display and confirm that: the printer is on, there are no visible error messages, paper and cartridges are installed properly, and the wireless light is active. A printer that is paused, stuck on an error screen, or still restarting may appear offline on the computer even though the real issue is on the device side."},
            {s: "Phase 2", t: "Connection Path Audit", d: "If Using Wi-Fi: Make sure the printer is connected to the same Wi-Fi network as your computer. A very common reason for offline errors is that the printer reconnects to a different network after the router restarts. If Using USB: Check whether the cable is firmly connected on both ends. Try another USB port if needed."},
            {s: "Phase 3", t: "Priority Assignment", d: "Sometimes the system tries to send print jobs to another printer entry instead of the intended device. Open the printer settings on your computer and set the intended printer as the default printer. This is especially useful if multiple printers were installed before or the system recently updated."},
            {s: "Phase 4", t: "Status Correction", d: "In some systems, the printer queue settings include an option called Use Printer Offline. If this option is enabled, the operating system intentionally holds the printer in offline mode even when the printer is available. Open the printer queue and review its settings. If offline mode is enabled, turn it off."},
            {s: "Phase 5", t: "Queue Decongestion", d: "A stuck or corrupted print job can cause communication problems. Open the print queue and cancel all pending jobs. Once the queue is empty, restart the printer and try sending a fresh test page. This step helps because old failed print jobs can block the system."},
            {s: "Phase 6", t: "Network Power Cycle", d: "One of the most effective offline fixes is a full power cycle. Turn off the printer. Restart the computer. Unplug the router for a short period, then reconnect it. Once the network is back online, power the printer on again and wait for it to reconnect fully."},
            {s: "Phase 7", t: "IP Address Verification", d: "Wireless printers often receive an IP address automatically. Sometimes that address changes after a restart. If the computer is still trying to reach the old one, the printer shows as offline. Printing a network configuration page can help confirm the current IP address."},
            {s: "Phase 8", t: "Driver Refresh", d: "If the printer connection is fine but the offline message continues, the driver may be outdated or corrupted. Driver issues can happen after system updates or incomplete installation. Installing the correct driver can restore proper communication."},
            {s: "Phase 9", t: "Spooler Service Pulse", d: "The print spooler is the service that manages print jobs. If it becomes stuck, the printer may seem offline even when hardware is fine. Restarting the spooler helps clear print processing issues. This is particularly useful when documents remain stuck."}
          ].map((step, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
               <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-1">{step.s}</span>
               <h4 className="text-lg font-black text-[#0a2558] mb-3">{step.t}</h4>
               <p className="text-slate-600 leading-relaxed text-sm font-medium">{step.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0a2558] rounded-[2.5rem] p-10 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
         <h3 className="text-xl font-black mb-4">Persistence & Stability</h3>
         <p className="text-blue-100 text-base leading-relaxed font-medium max-w-3xl">Keep the printer on a stable network and avoid frequent Wi-Fi changes. If possible, assign a static IP address. Keep your printer driver updated. Make sure the printer remains the default device. Restart the printer and router occasionally if the network environment is unstable. These preventive steps help improve long-term reliability.</p>
      </div>
    </div>
  );

  // ── PAGE 4: HP PRINTER TROUBLESHOOTING (100% WORD-FOR-WORD) ────────

  const renderPage4Text = () => (
    <div className="space-y-16 animate-in slide-in-from-left-4 duration-500 border border-slate-100">
      {/* ── Header Section ── */}
      <div className="p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 to-[#0a2558] text-white border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full -mb-24 -mr-24 blur-3xl shadow-inner" />
        <h2 className="text-2xl sm:text-3xl font-black mb-4 leading-tight">HP Printer Troubleshooting – <span className="text-blue-400">Master Fix Directory</span></h2>
        <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-[10px] font-black text-slate-400 tracking-widest uppercase">
           <span>Meta Title: HP Printer Troubleshooting Guide | Categorized Fixes</span>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 text-lg leading-relaxed font-medium">Printers are essential for daily work, school tasks, office paperwork, shipping labels, scanning, and document handling. When a printer stops working as expected, even a small issue can interrupt productivity.</p>
        <p className="text-slate-600 text-lg leading-relaxed font-medium">If you are searching for <span className="text-[#0045ac] font-bold">hp printer troubleshooting</span>, you likely need a detailed guide that explains how to identify and solve common printer problems such as printing failures, poor print quality, connection errors, scanner issues, or software conflicts.</p>
      </div>

      <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-inner">
         <h3 className="text-lg font-black text-[#0a2558] mb-4 flex items-center gap-3">
           <div className="w-1.5 h-6 bg-slate-400 rounded-full" /> Methodical Approach
         </h3>
         <p className="text-slate-600 leading-relaxed font-medium text-sm">Good troubleshooting begins with identifying the category of the problem: setup/installation, printer not printing, print quality, network/wireless, offline status, scan feature, driver/software, or hardware errors. When users understand the category, they can solve it faster and avoid unnecessary resets.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {[
          { t: "Problem 1: Printer Not Printing", d: "Check whether the printer is powered on and ready. Verify that the correct printer is selected. Make sure paper is loaded and the queue is not full. If the printer still does not print, restart it and send a new test page." },
          { t: "Problem 2: Poor Print Quality", d: "Poor quality is often related to: low ink, clogged printheads, alignment issues, or incorrect paper type. To improve quality, check supply levels and run the built-in printhead cleaning. Review your print settings as well." },
          { t: "Problem 3: Offline or Unavailable", d: "Troubleshooting involves verifying the network connection, setting the printer as default, removing offline mode in queue settings, and clearing blocked jobs. Offline troubleshooting is an important part of a complete guide." },
          { t: "Problem 4: Wireless Issues", d: "Confirm the printer is connected to the correct network and that the signal is strong. If the router has separate bands, make sure the printer and computer connect on the same network." },
          { t: "Problem 5: Driver or Software", d: "If the driver is missing or damaged, features like scanning may stop working. Reinstalling the full printer software package often helps restore normal performance after updates." },
          { t: "Problem 6: Scanner Not Working", d: "This can happen because scan software is not installed or the scanner was disabled during setup. Testing the scan function separately helps confirm if the issue is isolated." },
          { t: "Problem 7: Paper Jams", d: "Carefully remove jammed paper without tearing it. Inspect the feed path for leftover pieces. Reload paper neatly and adjust the guides so the stack is secure." },
          { t: "Problem 8: Stuck Print Queue", d: "A stuck print queue can make the printer seem broken even when the hardware is fine. Clearing the queue and restarting the print service can solve many cases." },
          { t: "Problem 9: Slow Response", d: "This can result from: wireless signal delays, large print files, high-resolution settings, or busy network traffic. Improving speed often involves checking network stability." }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group">
             <h4 className="text-[15px] font-black text-[#0a2558] mb-3 group-hover:text-[#0045ac] transition-colors">{item.t}</h4>
             <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.d}</p>
          </div>
        ))}
      </div>

      <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-blue-700 text-white relative shadow-2xl overflow-hidden shadow-blue-900/20">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
         <h3 className="text-xl font-black mb-6">Master Troubleshooting Protocol</h3>
         <p className="text-blue-50 leading-relaxed font-medium max-w-2xl text-base">Start by checking the printer's physical status. Confirm power, paper, and cartridges. Then verify the connection. Next, check the print queue and settings. Restart the devices if needed. After that, review the driver and software. If the problem continues, reinstall the printer software and test again. This layered approach prevents skipping the simple fix.</p>
      </div>
    </div>
  );

  // ── PAGE 5: HP PRINTER NOT PRINTING (100% WORD-FOR-WORD) ──────────

  const renderPage5Text = () => (
    <div className="space-y-16">
      <div className="p-8 rounded-[2rem] bg-gradient-to-br from-red-50/50 to-white border border-red-100/50 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-black text-[#0a2558] mb-4 leading-tight">HP Printer Not Printing – <span className="text-red-600">Complete Restoration Guide</span></h2>
        <div className="flex flex-wrap gap-4 pt-4 border-t border-red-100/30 text-[11px] font-bold text-slate-400 tracking-widest uppercase">
           <span>Meta Title: HP Printer Not Printing | Step-by-Step Fix Guide</span>
        </div>
      </div>

      <div className="prose prose-slate max-w-none space-y-8">
        <div className="p-6 rounded-2xl bg-amber-50 border-l-4 border-amber-400">
          <p className="text-slate-800 text-lg leading-relaxed font-black mb-2 italic">Essential Analysis:</p>
          <p className="text-slate-600 leading-relaxed font-medium">If you are searching for <span className="text-red-600 font-bold">hp printer not printing</span>, you are likely dealing with one of the most common printer issues users face. The printer may be powered on, connected to your computer or Wi-Fi, and appear ready, but when you send a document, nothing prints. In some cases, the print job stays stuck in the queue. In others, the printer acts as if it received the command but does not respond.</p>
        </div>
        <p className="text-slate-600 text-[17px] leading-relaxed font-medium">This issue can happen for many reasons, including connection problems, incorrect printer settings, low or unrecognized cartridges, paper feed issues, software conflicts, or print spooler errors. The good news is that most of these problems can be fixed by following the right troubleshooting sequence.</p>
      </div>

      <div className="space-y-12">
        <h3 className="text-xl font-black text-[#0a2558] flex items-center gap-3">
          <div className="w-1.5 h-6 bg-red-600 rounded-full" /> Specialized Troubleshooting Sequence
        </h3>
        <div className="grid grid-cols-1 gap-6">
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
            <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-red-200 hover:bg-red-50/10 transition-all duration-300 shadow-sm relative group">
              <div className="absolute top-6 left-0 w-1 h-8 bg-red-100 group-hover:bg-red-600 transition-colors rounded-r-full" />
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-[17px] font-black text-[#0a2558] group-hover:text-red-700 transition-colors">{step.t}</h4>
                  <span className="text-[10px] font-black text-slate-300 group-hover:text-red-400 transition-colors uppercase tracking-widest">{`0${i+1}`.slice(-2)}</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0a2558] rounded-[2.5rem] p-10 text-white relative overflow-hidden text-center">
         <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/10 rounded-full -ml-16 -mt-16 blur-3xl" />
         <h4 className="text-lg font-black mb-4 flex items-center justify-center gap-3">
            <ShieldCheck className="text-green-400" /> Systemic Prevention
         </h4>
         <p className="text-blue-100 text-base leading-relaxed font-medium max-w-2xl mx-auto">Keep software updated. Use stable Wi-Fi. Avoid network switching. Load paper correctly. Replace low cartridges early. Restart occasionally. Preventive maintenance does not solve every problem, but it can significantly reduce repeated interruptions.</p>
      </div>
    </div>
  );

  const current = pageContents[currentPage];

  return (
    <div
      className="min-h-screen font-sans text-slate-800 overflow-x-hidden"
      style={{ background: 'linear-gradient(155deg, #f8fbff 0%, #eef4ff 45%, #f2f7ff 100%)' }}
    >
      {/* ── HP-STYLE NAVIGATION ─────────────────────────────────── */}
      <nav
        className="sticky top-0 z-[100] border-b border-gray-200"
        style={{
          background: '#f8f9fa',
          boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Stepper (Left) */}
          <div className="flex items-center gap-4 sm:gap-8">
            {phases.map((phase, idx) => {
              const isActive = phase.pageMatch.includes(currentPage);
              return (
                <button
                  key={phase.id}
                  onClick={() => setCurrentPage(phase.pageMatch[0])}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors
                      ${isActive ? 'bg-[#0045ac] text-white shadow-sm' : 'bg-[#0045ac] text-white'}`}
                  >
                    {phase.id}
                  </div>
                  <span className={`text-[11px] font-bold transition-colors ${isActive ? 'text-black' : 'text-gray-500'}`}>
                    {phase.label}
                  </span>
                  {idx < phases.length - 1 && (
                    <span className="text-gray-400 text-[10px] ml-1">{'>'}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Product Type Selector (Right) */}
          <div className="flex items-center gap-3 sm:gap-5 pb-2 sm:pb-0">
            <span className="text-[11px] font-bold text-gray-700 hidden md:block">Select a different product type:</span>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#0045ac] text-white flex items-center justify-center shadow-md">
                <Printer size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center cursor-pointer hover:bg-[#0045ac] hover:text-white hover:border-transparent transition-all shadow-sm">
                <Laptop size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center cursor-pointer hover:bg-[#0045ac] hover:text-white hover:border-transparent transition-all shadow-sm">
                <Monitor size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center cursor-pointer hover:bg-[#0045ac] hover:text-white hover:border-transparent transition-all shadow-sm">
                <Smartphone size={18} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section
          className="relative pt-14 sm:pt-20 pb-36 sm:pb-40 px-4 sm:px-6 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f6ff 55%, #e4eeff 100%)' }}
        >
          {/* Decorative blobs */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,133,255,0.08) 0%, transparent 70%)',
              transform: 'translate(25%, -25%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,69,172,0.06) 0%, transparent 70%)',
              transform: 'translate(-25%, 25%)',
            }}
          />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left: Text */}
            <motion.div
              key={`hero-text-${currentPage}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-7 text-center lg:text-left"
            >
              {/* Step badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-blue-200 text-[#0045ac] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0045ac] animate-pulse flex-shrink-0" />
                Guide — Part {currentPage} of 5
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#0a2558]">
                  {current.heading}
                </h1>
                <p className="text-lg sm:text-xl text-[#0045ac] font-semibold">{current.subheading}</p>
              </div>

              <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {current.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <button
                  className="inline-flex items-center justify-center gap-3 text-white px-8 sm:px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-300/40 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  style={{ background: 'linear-gradient(135deg, #0045ac 0%, #0a2558 100%)' }}
                >
                  {current.cta} <Zap size={16} fill="currentColor" />
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                {trustBadges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <badge.icon size={14} className="text-[#0045ac] flex-shrink-0" />
                    {badge.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(0,133,255,0.08), transparent 70%)' }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={`hero-img-${currentPage}`}
                  initial={{ opacity: 0, scale: 0.93, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.93, y: -20 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="relative z-10 w-full max-w-md lg:max-w-lg"
                >
                  <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-2xl shadow-blue-200/30 bg-white">
                    <img
                      src={current.image}
                      className="w-full h-auto object-contain"
                      alt={current.heading}
                    />
                  </div>
                  {/* Floating step pill */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white border border-blue-100 rounded-full px-6 py-2.5 shadow-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Part {currentPage} — {phases.find(p => p.pageMatch.includes(currentPage))?.label || phases[phases.length-1].label}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ── DIAGNOSTIC GRID STRIP ─────────────────────────────────── */}
        <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-24">
          <div
            className="bg-white rounded-[2.5rem] border border-blue-100/50 shadow-[0_20px_60px_-15px_rgba(0,69,172,0.12)] p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 px-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#0045ac] rounded-full" />
                <p className="text-[12px] font-black text-slate-800 uppercase tracking-[0.2em]">Diagnostic Command Center</p>
              </div>
              <p className="text-[10px] font-bold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full uppercase tracking-widest border border-blue-100 shadow-sm shadow-blue-100/50">System Diagnostic Active</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {troubleshootingItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative cursor-pointer"
                >
                  <div className="relative bg-white/90 backdrop-blur-sm border border-slate-100 group-hover:border-[#0045ac]/30 p-5 rounded-[2rem] transition-all duration-500 shadow-[0_12px_30px_-10px_rgba(0,69,172,0.1)] hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,69,172,0.25)] flex flex-col items-center text-center gap-4 overflow-hidden">
                    {/* Subtle corner glow */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-full translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="w-14 h-14 rounded-2xl bg-[#0045ac] text-white flex items-center justify-center transition-all duration-500 shadow-lg shadow-blue-200/60 ring-4 ring-transparent group-hover:ring-blue-50 group-hover:scale-110">
                      <item.icon size={24} strokeWidth={2} />
                    </div>
                    
                    <div className="space-y-1 relative z-10">
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-tighter">{item.id}</p>
                      <h3 className="text-[11px] sm:text-[12px] font-black text-[#0a2558] tracking-tight leading-tight group-hover:text-[#0045ac] transition-colors">{item.title}</h3>
                    </div>

                    <div className="pt-1 flex items-center justify-center gap-1 text-[#0045ac] font-black uppercase text-[8px] tracking-widest opacity-60 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                      <span>Launch</span>
                      <ArrowRight size={10} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTENT AREA ─────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentPage}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-blue-50 p-8 sm:p-12 lg:p-16"
              style={{ boxShadow: '0 8px 60px rgba(0,69,172,0.07)' }}
            >
              {currentPage === 1 && renderPage1Text()}
              {currentPage === 2 && renderPage2Text()}
              {currentPage === 3 && renderPage3Text()}
              {currentPage === 4 && renderPage4Text()}
              {currentPage === 5 && renderPage5Text()}

              {/* ── Pagination ── */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-14 border-t border-gray-100 mt-16 gap-6">
                <div className="flex gap-3">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all
                      ${currentPage === 1
                        ? 'opacity-30 cursor-not-allowed bg-gray-100 text-gray-400'
                        : 'bg-gray-100 text-slate-700 hover:bg-gray-200 hover:-translate-y-0.5 active:translate-y-0'}`}
                  >
                    <ChevronLeft size={16} /> Back
                  </button>
                  <button
                    disabled={currentPage === 5}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all
                      ${currentPage === 5
                        ? 'opacity-30 cursor-not-allowed bg-gray-100 text-gray-400'
                        : 'text-white shadow-lg shadow-blue-300/40 hover:-translate-y-0.5 active:translate-y-0'}`}
                    style={currentPage !== 5 ? { background: 'linear-gradient(135deg, #0045ac, #0a2558)' } : {}}
                  >
                    Next Part <ChevronRight size={16} />
                  </button>
                </div>

                {/* Dot progress indicator */}
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((p) => (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        p === currentPage
                          ? 'w-8 bg-[#0045ac]'
                          : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                      }`}
                      aria-label={`Go to part ${p}`}
                    />
                  ))}
                  <span className="ml-3 text-[11px] font-bold text-slate-300 uppercase tracking-widest">
                    {currentPage} / 5
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ── SUPPORT RELAY ─────────────────────────────────────────── */}
        <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto relative group">
          <div
            className="p-10 sm:p-16 md:p-20 rounded-3xl relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center justify-between"
            style={{
              background: 'linear-gradient(135deg, #0a2558 0%, #0045ac 100%)',
              boxShadow: '0 24px 80px rgba(0,69,172,0.25)',
            }}
          >
            {/* Decorative circles */}
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)',
                transform: 'translate(30%, -30%)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)',
                transform: 'translate(-30%, 30%)',
              }}
            />

            <div className="relative z-10 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <span className="inline-block text-[11px] font-bold uppercase text-blue-300 tracking-[0.4em] border border-blue-400/30 rounded-full px-4 py-1.5">
                  Support Relay
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                  Still Encountering Friction?
                </h2>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed max-w-md">
                Connect with our elite diagnostic team for real-time architectural optimization. Avoid unnecessary hardware downtime with specialized remote assistance.
              </p>
              <button
                className="inline-flex items-center gap-3 bg-white text-[#0045ac] px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200"
              >
                Establish Live Connection <ArrowRight size={16} />
              </button>
            </div>

            <div className="relative z-10 w-full lg:w-[360px]">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <img src="/guide/banner5.jpg" alt="Support Specialist" className="w-full grayscale opacity-60" />
              </div>
              <div className="absolute -bottom-8 -left-6 sm:-left-10 bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-100 flex items-center gap-5 group-hover:scale-105 transition-transform duration-500">
                <div
                  className="w-14 h-14 rounded-2xl text-white flex items-center justify-center text-xl font-bold shadow-md"
                  style={{ background: 'linear-gradient(135deg, #0045ac, #0a2558)' }}
                >
                  24
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold text-[#0045ac] uppercase tracking-widest leading-none mb-1">Status</p>
                  <p className="text-sm font-bold text-slate-800 uppercase leading-snug mt-1">
                    Active <br />Optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── LEGAL DISCLAIMER ─────────────────────────────────────────── */}
      <div
        className="mt-16 px-4 sm:px-6 py-16"
        style={{ background: 'linear-gradient(135deg, #0a2558 0%, #0045ac 100%)' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-100 text-sm font-medium leading-loose tracking-wide opacity-90">
            Prints Matrix operates as an independent third-party retailer. Manufacturer warranties, where applicable, are provided directly by the respective brands. Prints Matrix does not claim authorization or official partnership with any manufacturer unless explicitly stated.
          </p>
        </div>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="py-14 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center border-t border-blue-50">
        <div className="text-center md:text-left">
          <span className="text-[10px] font-bold uppercase text-[#0045ac] tracking-[0.5em] mb-2 block">
            Prints Matrix Network
          </span>
          <p className="text-xs text-gray-400">Technical Architecture v2.9.5_Stable</p>
        </div>
      </footer>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default PrinterSetupGuide;
