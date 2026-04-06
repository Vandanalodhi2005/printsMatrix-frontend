import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone, Monitor, Tablet, Printer,
  ChevronRight, ChevronLeft, Wifi, MessageSquare,
  X, Send, CheckCircle2, Power, XCircle, Hourglass
} from 'lucide-react';

// ── Custom SVG Icons ───────────────────────────────────────────────────────
const PrinterSVGIcon = ({ badge: Badge, color = "#0045acff" }) => (
  <div className="relative inline-block">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
    {Badge && (
      <div className="absolute -bottom-1 -right-1 bg-white p-[2px] rounded-full">
        <Badge size={14} color={color} strokeWidth={2.5} />
      </div>
    )}
  </div>
);

const PaperSVGIcon = ({ badge: Badge, color = "#0045acff" }) => (
  <div className="relative inline-block">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
    {Badge && (
      <div className="absolute -bottom-1 -right-1 bg-white p-[2px] rounded-full">
        <Badge size={14} color={color} strokeWidth={2.5} />
      </div>
    )}
  </div>
);

const ScannerSVGIcon = ({ color = "#0045acff" }) => (
  <div className="relative inline-block">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="10" width="18" height="12" rx="2" />
      <path d="M7 2h10l4 8H3l4-8z" />
      <line x1="8" y1="14" x2="16" y2="14" />
    </svg>
    <div className="absolute -bottom-1 -right-1 bg-white p-[2px] rounded-full">
      <XCircle size={14} color={color} strokeWidth={2.5} />
    </div>
  </div>
);

// ── PAGE CONTENT DATA ──────────────────────────────────────────────────────
const pages = [
  {
    id: 1,
    label: "123 HP Com Setup",
    content: (
      <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          123 HP Com Setup – Complete Step-by-Step Guide for New Printer Installation
        </h2>
        <p>Setting up a new printer should be simple, clear, and frustration-free. If you are searching for 123 hp com setup, you are most likely trying to install your HP printer for the first time, connect it to Wi-Fi, download the correct software, and start printing without delays.</p>
        <p>This guide explains the full setup process in detail so users can understand not only what to do, but also why each step matters. A properly completed printer setup helps prevent later issues such as printer offline errors, driver conflicts, connection failures, and incomplete installation.</p>
        <p>Whether you are setting up a printer for home use, student work, remote office use, or everyday business printing, following the correct sequence can improve performance from the beginning.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">What Is 123 HP Com Setup?</h2>
        <p>The term 123 hp com setup is commonly used by users looking for the HP printer setup process. It usually refers to the installation flow for a new HP printer, including driver download, software configuration, wireless setup, and first-time alignment.</p>
        <p>Most users search this keyword when they need help with:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>setting up a brand-new printer</li>
          <li>installing printer software on Windows or Mac</li>
          <li>connecting the printer to Wi-Fi</li>
          <li>printing a test page</li>
          <li>fixing setup errors during installation</li>
        </ul>
        <p>The goal of this page is to help users complete that setup smoothly with clear step-by-step instructions.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Before You Start the Printer Setup</h2>
        <p>Before beginning the installation process, it is important to make sure everything needed for setup is ready. Skipping small preparation steps often leads to unnecessary setup interruptions later.</p>
        <p>You should have:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the printer and power cable</li>
          <li>setup ink or toner cartridges</li>
          <li>plain white paper</li>
          <li>a stable Wi-Fi connection if setting up wirelessly</li>
          <li>the printer model number</li>
          <li>a computer, laptop, tablet, or smartphone for installation</li>
        </ul>
        <p>If the device is being installed in a home or office environment with multiple Wi-Fi networks, it is also a good idea to confirm which network the printer should use before starting.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 1: Unbox the Printer and Remove All Packaging Materials</h2>
        <p>The first step in the 123 hp com setup process is physical preparation of the printer.</p>
        <p>Carefully open the box and remove all protective packaging. Most printers include tape, foam inserts, cardboard supports, and internal locks that protect the device during shipping. These materials must be removed fully before the printer is turned on.</p>
        <p>Pay close attention to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the scanner lid area</li>
          <li>paper tray packaging</li>
          <li>cartridge access section</li>
          <li>any orange or blue setup tapes</li>
          <li>plastic guards inside moving parts</li>
        </ul>
        <p>This step matters because even one small internal packing piece can prevent the printer from initializing properly. If the printer makes unusual noise during startup, it often means something inside was not removed.</p>
        <p>After unpacking, place the printer on a flat and stable surface with enough room for paper loading and ventilation.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 2: Connect the Power Cable and Turn the Printer On</h2>
        <p>Once the printer has been unpacked, connect the power cable directly to a reliable wall outlet. It is usually better to avoid loose adapters or unstable power strips during the first setup.</p>
        <p>Turn the printer on using the power button. The printer may take a few moments to initialize. On models with a display screen, you will usually be asked to select:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>language</li>
          <li>country or region</li>
          <li>time or basic preferences</li>
        </ul>
        <p>This initial configuration helps the device prepare for software pairing and network setup. If the screen does not respond immediately, give the printer a little time to complete startup.</p>
        <p>During this stage, the printer may also move internal components into position for cartridge installation.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 3: Install the Setup Ink or Toner Cartridges</h2>
        <p>After powering on the printer, the next step is installing the cartridges included in the box. New printers are typically shipped with setup cartridges that are meant specifically for first-time installation.</p>
        <p>Open the cartridge access door and wait until the carriage stops moving. Insert each cartridge into the correct slot, making sure it clicks into place securely.</p>
        <p>When the cartridges are installed correctly:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the printer usually confirms installation on screen</li>
          <li>internal priming may begin automatically</li>
          <li>the printer may ask for paper if it is not already loaded</li>
        </ul>
        <p>This step is important because incorrect cartridge placement can cause setup interruptions, cartridge recognition errors, or poor initial print quality.</p>
        <p>If the printer requests alignment after cartridge installation, continue to the next step rather than skipping it.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 4: Load Paper and Complete Alignment</h2>
        <p>Most printers require paper to be loaded before the setup can finish.</p>
        <p>Use plain white letter or A4 paper, depending on your region. Adjust the paper guides so the stack is secure but not too tight. Once paper is loaded, the printer may automatically print an alignment page.</p>
        <p>An alignment page helps the device calibrate print quality and cartridge positioning. On some models, you may be asked to place the page on the scanner glass and scan it. This helps improve text sharpness, color placement, and print consistency.</p>
        <p>This step may feel small, but it is a key part of first-time printer setup. If skipped or done incorrectly, the printer may still install but produce poor output or setup warnings.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 5: Connect the Printer to Wi-Fi</h2>
        <p>For most users, wireless setup is the preferred option because it allows printing from multiple devices without keeping the printer connected by cable.</p>
        <p>To connect the printer to Wi-Fi:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Open the wireless or network settings on the printer control panel.</li>
          <li>Choose the wireless setup wizard or network setup option.</li>
          <li>Select your Wi-Fi network name.</li>
          <li>Enter the wireless password carefully.</li>
          <li>Wait for the confirmation that the connection was successful.</li>
        </ul>
        <p>On many printers, a solid wireless light indicates the connection is active. A blinking wireless light often means the device is still attempting to connect or has lost connection.</p>
        <p>A successful network connection is essential because the software installation on your computer usually depends on detecting the printer over the same network.</p>
        <p>For best results, keep the printer and computer on the same Wi-Fi network during setup.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 6: Download the Printer Software and Driver</h2>
        <p>Once the printer is connected to the network, the next stage of the 123 hp com setup process is software installation.</p>
        <p>This software helps your computer communicate with the printer correctly. It also enables features like:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>printing</li>
          <li>scanning</li>
          <li>device management</li>
          <li>ink level monitoring</li>
          <li>firmware updates</li>
          <li>wireless setup assistance</li>
        </ul>
        <p>During installation, users are often given the option to use either a simplified app-based setup or the full printer software package, depending on the device and operating system.</p>
        <p>Using the correct driver is important because a generic or outdated printer driver can lead to limited functionality, connection issues, or printing errors later.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 7: Install the Printer on Your Computer or Mobile Device</h2>
        <p>After downloading the software, open the installer and follow the on-screen instructions. The setup program will usually ask how you want to connect the printer, such as:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>wireless</li>
          <li>USB</li>
          <li>network</li>
        </ul>
        <p>Choose the connection type that matches how your printer is set up. If the printer is already connected to Wi-Fi, the installer should search for available printers on the network.</p>
        <p>Once your printer appears, select it and continue. The installer may:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>finish driver installation</li>
          <li>add the printer to your device</li>
          <li>configure printing preferences</li>
          <li>install scanner utilities if supported</li>
        </ul>
        <p>At the end of the installation, most systems offer a test print option. It is a good idea to use it immediately. A successful test page confirms that the device, driver, and connection are all working together correctly.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-8 pb-1">Common Problems During 123 HP Com Setup</h2>
        <p>Even when the overall process is simple, some users may still run into setup issues. Understanding the reason behind each problem makes troubleshooting easier.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">Printer Not Detected During Setup</h3>
        <p>This usually happens when the printer and computer are not on the same network, the wireless connection is incomplete, or the printer software was opened before the printer finished connecting.</p>
        <p>Restarting the printer, router, and computer often helps refresh the connection.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">Wi-Fi Setup Failed</h3>
        <p>If the printer does not connect to Wi-Fi, double-check the network password and make sure you are using the correct network. A weak signal can also interrupt the setup.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">Driver Installation Stuck or Incomplete</h3>
        <p>This can happen because of an interrupted download, operating system restrictions, or older software files on the computer. Closing the installer, restarting the device, and reinstalling the software can often solve it.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">Alignment or Cartridge Error</h3>
        <p>Make sure the cartridges are fully seated and the printer is using the setup cartridges intended for initial installation. If alignment fails, repeat the alignment process using clean paper and a properly placed page.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-8 pb-1">Tips for a Smoother Printer Setup Experience</h2>
        <p>A few simple practices can make the setup process much easier.</p>
        <p>Keep the printer near the router during first-time wireless setup if possible. Avoid using guest Wi-Fi networks or unstable mobile hotspots during installation. Make sure your operating system is updated enough to support the latest printer software. If you are installing on multiple devices, finish setup on one main computer first before adding phones or other systems.</p>
        <p>These small details help reduce setup errors and improve long-term reliability.</p>
      </div>
    ),
  },
  {
    id: 2,
    label: "HP Printer Setup & Install",
    content: (
      <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          HP Printer Setup &amp; Install – Complete Guide for First-Time Installation
        </h2>
        <p>If you are searching for hp printer setup &amp; install, you most likely want a complete guide that explains how to prepare your printer, connect it to your device, install the correct software, and start using it without confusion.</p>
        <p>Printer installation is not only about turning the device on and downloading a driver. A successful setup includes physical preparation, connection setup, software installation, system detection, and a final test to confirm everything is working as expected.</p>
        <p>This page is written as a complete standalone installation guide for users who want a clear and detailed explanation from start to finish.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Understanding HP Printer Setup and Installation</h2>
        <p>Printer setup and printer installation are closely related, but they are not exactly the same thing.</p>
        <p>Printer setup usually refers to preparing the hardware, adding cartridges, loading paper, connecting the printer to Wi-Fi or USB, and completing the printer's on-device configuration.</p>
        <p>Printer installation usually refers to adding the printer to a computer, downloading the correct software, installing the driver, and enabling print and scan functions.</p>
        <p>A good landing page for this keyword should cover both, because users searching hp printer setup &amp; install generally want the complete process, not just one part of it.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Choose the Right Installation Method Before You Begin</h2>
        <p>Before you start, decide how you want to connect the printer. Most users choose between wireless setup and USB setup.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">Wireless Setup</h3>
        <p>Wireless setup is ideal for users who want to print from laptops, smartphones, or multiple devices in the same home or office. It gives more flexibility and avoids physical cable dependence.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">USB Setup</h3>
        <p>USB setup is often preferred when the printer is located close to a computer or when the network connection is unstable. It can also be helpful during first-time troubleshooting if wireless setup is failing.</p>
        <p>Knowing which method you want to use helps make the installation process smoother and more focused.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 1: Prepare the Printer for Setup</h2>
        <p>Start by unpacking the printer and removing all internal and external packaging materials. Place the printer on a stable surface and connect the power cable.</p>
        <p>When the printer turns on for the first time, it usually prompts you to confirm basic preferences such as language and region. These settings are part of the setup process and should be completed before trying to install the software on your device.</p>
        <p>You should also check that:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>cartridges are ready to install</li>
          <li>paper is available</li>
          <li>your computer or mobile device is nearby</li>
          <li>you know the Wi-Fi password if doing wireless setup</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 2: Install Ink or Toner and Load Paper</h2>
        <p>The next stage of hp printer setup &amp; install is preparing the printer internally.</p>
        <p>Open the cartridge access area and insert the setup cartridges or toner included with the device. Wait for the printer to recognize them and complete any automatic initialization.</p>
        <p>After that, load plain white paper into the input tray. Some printers will print an alignment page automatically during first-time setup. This page may need to be scanned or confirmed depending on the printer model.</p>
        <p>This stage is essential because incomplete cartridge installation or missing paper can interrupt the rest of the setup process.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 3: Connect the Printer Using Wireless or USB</h2>
        <p>Now it is time to connect the printer using your chosen setup method.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">Wireless Connection Setup</h3>
        <p>Use the printer control panel to open network settings and connect the printer to your Wi-Fi network. Enter the password carefully and wait until the connection is confirmed.</p>
        <p>During wireless installation, make sure the computer or phone you are using is connected to the same network. If they are on different networks, the software may not detect the printer.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">USB Connection Setup</h3>
        <p>If you are using USB, connect the cable only when the installation software asks you to. Plugging it in too early can sometimes cause the system to install a generic driver instead of the intended software package.</p>
        <p>The connection method you choose affects how the rest of the installation proceeds, so it is important to follow the right instructions for that method.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 4: Download the Printer Driver and Software</h2>
        <p>Printer software allows the operating system to communicate with the printer correctly. Without the right software, the printer might appear installed but not work properly for advanced features such as scanning, device status reporting, or wireless management.</p>
        <p>The installation package typically includes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>print driver</li>
          <li>scan software</li>
          <li>printer utility tools</li>
          <li>device management options</li>
          <li>update tools</li>
        </ul>
        <p>This step is one of the most important parts of the hp printer setup &amp; install process because driver compatibility directly affects printer performance.</p>
        <p>If possible, use the latest available version for your operating system so the printer can work smoothly with current Windows or macOS versions.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 5: Run the Installer and Add the Printer</h2>
        <p>After downloading the software, open the setup file and start the installation wizard.</p>
        <p>The installer will usually ask you to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>accept terms</li>
          <li>choose connection type</li>
          <li>detect your printer</li>
          <li>confirm installation settings</li>
          <li>complete printer registration or optional configuration steps</li>
        </ul>
        <p>If the printer is detected properly, continue until the setup is complete. If not, the software may offer troubleshooting steps such as checking the connection, restarting the printer, or trying a different method.</p>
        <p>When the installation is successful, the printer should be added to your system and available in the print dialog for normal use.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 6: Print a Test Page and Confirm Scanner Setup</h2>
        <p>After installation, it is always a good idea to print a test page. This helps confirm:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the driver is installed correctly</li>
          <li>the printer can communicate with the computer</li>
          <li>paper handling is normal</li>
          <li>print output looks correct</li>
        </ul>
        <p>If your printer also supports scanning, open the printer software or scanning utility and test a basic scan. This confirms that the installation is complete for both printing and scanning functions.</p>
        <p>A test page is not just a final check. It also helps catch small issues before the printer is used for important documents.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-8 pb-1">Common HP Printer Installation Issues</h2>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">Printer Software Cannot Find the Device</h3>
        <p>This often happens when the network connection is incomplete, the printer is still initializing, or the computer is on another Wi-Fi network.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">USB Setup Does Not Continue</h3>
        <p>Sometimes the USB cable is connected too early or the system tries to use a default driver. Restarting the installation and reconnecting the cable only when prompted usually helps.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">Driver Installed but Printing Does Not Work</h3>
        <p>This may happen if the wrong printer is set as default, the connection is unstable, or the installation completed only partially.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">Scanner Feature Is Missing</h3>
        <p>Some users install only a basic print driver. A more complete software package may be needed for scanning and device utility features.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-8 pb-1">Best Practices After Setup and Install</h2>
        <p>Once your printer is installed, a few best practices can help maintain smooth performance.</p>
        <p>Keep the printer software updated when system changes occur. Use the same stable Wi-Fi network for wireless printing. Avoid frequently switching the printer between multiple temporary networks. If multiple users need access, add the printer only after the main installation is fully complete.</p>
        <p>These habits help reduce connection drops, offline errors, and repeated installation problems.</p>
      </div>
    ),
  },
  {
    id: 3,
    label: "HP Printer Offline Fix",
    content: (
      <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          HP Printer Offline Fix – Step-by-Step Guide to Restore Printer Connection
        </h2>
        <p>Seeing an offline printer message can be frustrating, especially when the printer appears powered on and ready. If you are searching for hp printer offline fix, you are likely dealing with a situation where the printer is not communicating properly with your computer or network.</p>
        <p>This issue can happen even when the device was working earlier. In many cases, the cause is not the printer itself but a communication problem between the printer, operating system, Wi-Fi network, or print queue.</p>
        <p>This page explains the offline problem in detail and gives clear steps to bring the printer back online.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">What Does "Printer Offline" Mean?</h2>
        <p>When a printer shows as offline, it usually means the computer cannot send print jobs to it successfully. The printer may be turned on, connected to power, and even connected to Wi-Fi, but the system still treats it as unavailable.</p>
        <p>This can happen because of:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>network interruptions</li>
          <li>incorrect printer status settings</li>
          <li>a stuck print queue</li>
          <li>outdated drivers</li>
          <li>router reconnection issues</li>
          <li>changes in printer IP address</li>
          <li>system confusion after sleep or restart</li>
        </ul>
        <p>Understanding the cause helps you apply the right fix instead of repeatedly reinstalling the printer without solving the actual issue.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 1: Confirm the Printer Is Powered On and Ready</h2>
        <p>Before changing any settings, check the printer itself.</p>
        <p>Look at the control panel or display and confirm that:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the printer is on</li>
          <li>there are no visible error messages</li>
          <li>paper and cartridges are installed properly</li>
          <li>the wireless or network light is active if using Wi-Fi</li>
        </ul>
        <p>A printer that is paused, stuck on an error screen, or still restarting may appear offline on the computer even though the real issue is on the device side.</p>
        <p>Starting with a basic status check avoids unnecessary troubleshooting later.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 2: Check the Wi-Fi or Cable Connection</h2>
        <p>The next step in any hp printer offline fix process is connection verification.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">If Using Wi-Fi</h3>
        <p>Make sure the printer is connected to the same Wi-Fi network as your computer. If the printer has a display, review the network status. If it shows disconnected or not ready, reconnect it through the printer's wireless settings.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">If Using USB</h3>
        <p>Check whether the cable is firmly connected on both ends. Try another USB port if needed.</p>
        <p>A very common reason for offline errors is that the printer reconnects to a different network after the router restarts, or the computer switches to another saved Wi-Fi network. When the two devices are on different networks, the printer may appear offline even though both are technically connected.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 3: Set the Printer as the Default Printer</h2>
        <p>Sometimes the system tries to send print jobs to another saved printer or virtual printer instead of the intended device. This makes users think the printer is offline when the real issue is incorrect printer selection.</p>
        <p>Open the printer settings on your computer and set the intended printer as the default printer. Once this is done, print jobs are more likely to route correctly.</p>
        <p>This step is especially useful if:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>multiple printers were installed before</li>
          <li>the system recently updated</li>
          <li>a PDF or virtual printer became the default</li>
          <li>the printer was reinstalled and duplicated</li>
        </ul>
        <p>Default printer confusion is more common than most users realize.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 4: Make Sure "Use Printer Offline" Is Not Enabled</h2>
        <p>In some systems, the printer queue settings include an option called Use Printer Offline. If this option is enabled, the operating system intentionally holds the printer in offline mode even when the printer is available.</p>
        <p>Open the printer queue and review its settings. If offline mode is enabled, turn it off and try printing again.</p>
        <p>This is one of the simplest but most effective fixes because users often do not notice when the setting has been changed accidentally.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 5: Clear the Print Queue</h2>
        <p>A stuck or corrupted print job can cause communication problems between the computer and printer. When the queue is blocked, the printer may appear unresponsive or offline.</p>
        <p>Open the print queue and cancel all pending jobs. Once the queue is empty, restart the printer and try sending a fresh test page.</p>
        <p>This step helps because old failed print jobs can keep the system from sending new ones correctly.</p>
        <p>If the queue does not clear normally, restarting the print spooler service may also be necessary.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 6: Restart the Printer, Computer, and Router</h2>
        <p>One of the most effective offline fixes is a full power cycle.</p>
        <p>Turn off the printer. Restart the computer. Unplug the router for a short period, then reconnect it. Once the network is back online, power the printer on again and wait for it to reconnect fully.</p>
        <p>This works because a restart refreshes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>network communication</li>
          <li>temporary memory errors</li>
          <li>printer session conflicts</li>
          <li>device detection processes</li>
          <li>router IP assignments</li>
        </ul>
        <p>Many offline errors are temporary communication failures that disappear after a clean restart of all connected devices.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 7: Check the Printer's IP Address</h2>
        <p>On wireless networks, printers often receive an IP address from the router automatically. Sometimes that address changes after a restart or network reset. If the computer is still trying to reach the printer using the old IP address, the printer may show as offline.</p>
        <p>Printing a network configuration page or checking the printer display can help confirm the current IP address.</p>
        <p>If the IP address changed, the printer may need to be re-added or updated in the system settings. In some cases, assigning a manual or static IP can help prevent the problem from repeating.</p>
        <p>This is one of the more technical but very important parts of a long-term hp printer offline fix strategy.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 8: Update or Reinstall the Printer Driver</h2>
        <p>If the printer connection is fine but the offline message continues, the driver may be outdated, incomplete, or corrupted.</p>
        <p>Driver issues can happen after:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>system updates</li>
          <li>incomplete installation</li>
          <li>network configuration changes</li>
          <li>switching between USB and wireless</li>
          <li>restoring a backup or moving the printer to another computer</li>
        </ul>
        <p>Installing the correct and current driver can restore proper communication and remove false offline reporting.</p>
        <p>In many cases, a full reinstall helps more than a partial repair because it refreshes the connection settings completely.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 9: Restart the Print Spooler Service</h2>
        <p>The print spooler is the service that manages print jobs on many systems. If it becomes stuck, crashes, or stops responding, the printer may seem offline even when the hardware is fine.</p>
        <p>Restarting the spooler can help clear print processing issues and restore printer availability. This is particularly useful when:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the print queue will not clear</li>
          <li>documents remain stuck</li>
          <li>the printer status does not update</li>
          <li>print jobs disappear without printing</li>
        </ul>
        <p>This step is often overlooked, but it can resolve many persistent offline cases.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-8 pb-1">How to Prevent the Printer From Going Offline Again</h2>
        <p>Once the printer is back online, it is a good idea to reduce the chance of the same issue happening again.</p>
        <p>Keep the printer on a stable network and avoid frequent Wi-Fi changes. If possible, assign the printer a static IP address. Keep your printer driver updated when your operating system changes. Make sure the printer remains the default device if it is your main printer. Restart the printer and router occasionally if the network environment is unstable.</p>
        <p>These preventive steps help reduce repeated interruptions and improve printer reliability over time.</p>
      </div>
    ),
  },
  {
    id: 4,
    label: "HP Printer Troubleshooting",
    content: (
      <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          HP Printer Troubleshooting – Complete Guide to Fix Common Printer Problems
        </h2>
        <p>Printers are essential for daily work, school tasks, office paperwork, shipping labels, scanning, and document handling. When a printer stops working as expected, even a small issue can interrupt productivity.</p>
        <p>If you are searching for hp printer troubleshooting, you likely need a detailed guide that explains how to identify and solve common printer problems such as printing failures, poor print quality, connection errors, scanner issues, or software conflicts.</p>
        <p>This page is built as a complete troubleshooting resource, organized by problem type so users can quickly understand the issue and follow the right fix.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">How to Approach Printer Troubleshooting Effectively</h2>
        <p>Good troubleshooting begins with identifying the type of problem before jumping into random fixes.</p>
        <p>Printer problems usually fall into one of these categories:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>setup or installation issue</li>
          <li>printer not printing</li>
          <li>print quality problem</li>
          <li>network or wireless problem</li>
          <li>offline status problem</li>
          <li>scan feature not working</li>
          <li>driver or software issue</li>
          <li>paper feed or hardware error</li>
        </ul>
        <p>When users understand which category the issue belongs to, they can solve it faster and avoid unnecessary reinstallation or repeated resets.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Problem 1: Printer Not Printing</h2>
        <p>One of the most common printer issues is when the printer appears ready, but nothing prints.</p>
        <p>This can happen because:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the wrong printer is selected</li>
          <li>the print queue is stuck</li>
          <li>the printer is paused</li>
          <li>the connection is incomplete</li>
          <li>the driver is not responding properly</li>
        </ul>
        <p>Start by checking whether the printer is powered on and ready. Then verify that the correct printer is selected in the print window. Make sure paper is loaded and the queue is not full of pending documents.</p>
        <p>If the printer still does not print, restart the printer and send a new test page. A fresh test page is often more useful than retrying an old document because it removes the possibility that the document itself is causing the issue.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Problem 2: Poor Print Quality</h2>
        <p>Another frequent reason users search hp printer troubleshooting is print quality trouble. This includes faded text, blurry output, missing colors, streaks, lines, or smudges.</p>
        <p>Poor print quality is often related to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>low ink or toner</li>
          <li>clogged printheads</li>
          <li>alignment issues</li>
          <li>incorrect paper type</li>
          <li>print settings mismatch</li>
        </ul>
        <p>To improve quality, start by checking supply levels. Then run the built-in printhead cleaning or maintenance function if available. If the printer offers cartridge alignment, complete that step as well.</p>
        <p>Also review your print settings. Draft mode, incorrect paper settings, or low-resolution output options can affect print appearance even when the printer hardware is fine.</p>
        <p>If the issue continues after maintenance, replacing the cartridges may be necessary.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Problem 3: Printer Shows Offline or Unavailable</h2>
        <p>Offline status is one of the most frustrating printer problems because the printer may appear normal physically while the system cannot send print jobs.</p>
        <p>Troubleshooting this problem usually involves:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>verifying the network or cable connection</li>
          <li>setting the printer as default</li>
          <li>removing offline mode in queue settings</li>
          <li>clearing blocked print jobs</li>
          <li>restarting the printer and router</li>
          <li>checking for IP changes</li>
          <li>updating the driver</li>
        </ul>
        <p>Offline troubleshooting deserves its own focused page, but it is also an important part of a complete troubleshooting guide because many users encounter it as part of broader printer performance issues.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Problem 4: Wireless Connection Problems</h2>
        <p>Wireless printing is convenient, but it also introduces more variables than a cable-based connection. A printer may disconnect if the network changes, the signal becomes weak, or the router resets.</p>
        <p>Common signs of wireless trouble include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>printer not appearing during setup</li>
          <li>connection drops after sleep or restart</li>
          <li>slow printer detection</li>
          <li>repeated offline messages</li>
          <li>printer works one day and disappears the next</li>
        </ul>
        <p>To troubleshoot wireless problems, confirm that the printer is connected to the correct network and that the signal is strong enough where the printer is placed. If the router has both separate network bands or guest access, make sure the printer and computer are still communicating on the same usable network.</p>
        <p>A printer that frequently drops off the network may benefit from being placed closer to the router or given a more stable connection configuration.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Problem 5: Driver or Software Issues</h2>
        <p>Printer drivers act as the communication bridge between the operating system and the printer. If the driver is missing, outdated, incomplete, or damaged, printing and scanning features may stop working correctly.</p>
        <p>Driver-related symptoms can include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>printer not responding</li>
          <li>incomplete installation</li>
          <li>missing scan functions</li>
          <li>advanced settings not appearing</li>
          <li>random connection failures after updates</li>
        </ul>
        <p>This kind of hp printer troubleshooting usually requires reviewing whether the correct software package is installed. A basic driver may allow simple printing but not scanning or utility features.</p>
        <p>If the problem started after a system update or operating system change, reinstalling the full printer software often helps restore normal performance.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Problem 6: Scanner Not Working</h2>
        <p>Many multifunction printers are used for both printing and scanning. Sometimes printing works fine while scanning does not.</p>
        <p>This can happen because:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the scan software is not installed</li>
          <li>the scanner was disabled during setup</li>
          <li>the printer software is only partially installed</li>
          <li>network communication is incomplete</li>
          <li>scan permissions or local settings are missing</li>
        </ul>
        <p>Testing the scan function separately helps confirm whether the issue is isolated to scanning or part of a larger software problem. If scanning is unavailable, reinstalling the full software package or enabling scan-related features may be necessary.</p>
        <p>Since scanning often depends more on full software support than simple printing does, this issue is common when users install only a minimal driver.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Problem 7: Paper Jams and Paper Feed Errors</h2>
        <p>Paper handling issues can interrupt normal printing and create frustration even when the rest of the printer setup is working fine.</p>
        <p>Paper jams and feed problems may result from:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>overloaded tray</li>
          <li>curled or damp paper</li>
          <li>small scraps left inside the printer</li>
          <li>misaligned paper guides</li>
          <li>mixed paper sizes in one tray</li>
        </ul>
        <p>Carefully remove jammed paper without tearing it. Then inspect the feed path for leftover pieces. Reload paper neatly and adjust the guides so the stack is secure.</p>
        <p>Paper feed errors often return when the underlying loading method has not been corrected, so a clean reload is just as important as removing the visible jam.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Problem 8: Print Jobs Stuck in Queue</h2>
        <p>A stuck print queue can make the printer seem broken even when the hardware is fine. Users may notice that one document stays in the queue and prevents all others from printing.</p>
        <p>This usually happens because:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>a previous job failed</li>
          <li>communication dropped mid-job</li>
          <li>the spooler service stopped responding</li>
          <li>the queue was not cleared after an error</li>
        </ul>
        <p>Clearing the queue and restarting the print service can solve many cases. Then send a small test page instead of a large document to confirm that the queue is working again.</p>
        <p>This type of issue often affects office users or anyone printing multiple jobs one after another.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Problem 9: Slow Printing or Delayed Response</h2>
        <p>Sometimes the printer works, but it responds slowly, takes too long to wake up, or delays before starting a print job.</p>
        <p>This can result from:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>wireless signal delays</li>
          <li>large print files</li>
          <li>high-resolution settings</li>
          <li>outdated firmware</li>
          <li>busy network traffic</li>
          <li>system resource limitations</li>
        </ul>
        <p>A troubleshooting page should not only address complete failures but also performance issues like this. Improving speed often involves checking network stability, reducing file complexity, or reviewing print quality settings.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-8 pb-1">Best General Troubleshooting Routine</h2>
        <p>When the exact issue is not obvious, follow a simple troubleshooting routine in order.</p>
        <p>Start by checking the printer's physical status. Confirm power, paper, and cartridges. Then verify the connection. Next, check the print queue and printer settings. Restart the devices if needed. After that, review the driver and software installation. If the problem continues, reinstall the printer software and test again.</p>
        <p>This layered approach prevents users from skipping the simple fix and jumping straight into unnecessary steps.</p>
      </div>
    ),
  },
  {
    id: 5,
    label: "HP Printer Not Printing",
    content: (
      <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          HP Printer Not Printing – Complete Step-by-Step Guide to Fix the Problem
        </h2>
        <p>If you are searching for hp printer not printing, you are likely dealing with one of the most common printer issues users face. The printer may be powered on, connected to your computer or Wi-Fi, and appear ready, but when you send a document, nothing prints. In some cases, the print job stays stuck in the queue. In others, the printer acts as if it received the command but does not respond.</p>
        <p>This issue can happen for many reasons, including connection problems, incorrect printer settings, low or unrecognized cartridges, paper feed issues, software conflicts, or print spooler errors. The good news is that most of these problems can be fixed by following the right troubleshooting sequence.</p>
        <p>This page explains the issue in detail and gives a full step-by-step process to help restore printing properly.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Why Is My HP Printer Not Printing?</h2>
        <p>When a printer stops printing, the cause is not always obvious right away. Some users assume the printer is broken, but in reality, the issue is often caused by communication or configuration problems rather than hardware failure.</p>
        <p>A printer may stop printing because of:</p>
        <ul className="list-disc pl-6 space-y-2">
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
        <p>Understanding the possible causes helps you fix the problem more efficiently instead of repeating random steps that may not address the real issue.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Start With the Basics Before Advanced Troubleshooting</h2>
        <p>Before moving into detailed fixes, it is important to check a few basic things. Sometimes a simple physical or status issue prevents printing and can be corrected quickly.</p>
        <p>Make sure:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the printer is powered on</li>
          <li>there are no error lights or warning messages</li>
          <li>paper is loaded properly</li>
          <li>cartridges or toner are installed correctly</li>
          <li>the printer is connected to Wi-Fi or USB</li>
          <li>the printer screen does not show an error state</li>
        </ul>
        <p>If the printer display shows a paper jam, cartridge issue, or attention warning, solve that first before checking computer settings. Many printing failures begin with a basic device-side problem.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 1: Confirm the Printer Is Ready to Print</h2>
        <p>The first step in fixing hp printer not printing is checking whether the printer itself is actually ready. A printer can appear powered on but still not be in a usable state.</p>
        <p>Look for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>blinking warning lights</li>
          <li>low ink alerts</li>
          <li>cartridge access door not fully closed</li>
          <li>empty or misaligned paper tray</li>
          <li>maintenance or setup prompt on the display</li>
        </ul>
        <p>If the printer is still finishing startup, cleaning, alignment, or internal preparation, it may not respond to print jobs yet. Wait until the printer shows a ready status before testing again.</p>
        <p>This step matters because software troubleshooting will not help if the printer is paused by a hardware or setup condition.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 2: Check the Connection Between Printer and Device</h2>
        <p>A very common reason a printer does not print is that the device sending the print command cannot communicate properly with the printer.</p>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">If You Are Using Wi-Fi</h3>
        <p>Make sure the printer and your computer are connected to the same wireless network. If the printer was connected previously but stopped printing, the network may have changed or the printer may have disconnected.</p>
        <p>Check:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>whether the wireless light is solid</li>
          <li>whether the network name on the printer matches your current Wi-Fi</li>
          <li>whether the router was recently restarted</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-900 pt-3 pb-1">If You Are Using USB</h3>
        <p>Check that the cable is firmly connected and not damaged. Try another USB port if needed.</p>
        <p>A weak or broken connection may allow the printer to appear installed while still preventing successful printing.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 3: Make Sure the Correct Printer Is Selected</h2>
        <p>Sometimes the printer is working, but the document is being sent to the wrong device. This can happen if:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>another printer is installed on the computer</li>
          <li>a virtual PDF printer is set as default</li>
          <li>the printer was reinstalled and appears twice</li>
          <li>an older offline printer entry is still saved</li>
        </ul>
        <p>Open your print dialog and confirm that the intended printer is selected. Then check the printer settings on your system and set your preferred printer as the default printer.</p>
        <p>This is a simple step, but it solves more issues than many users expect, especially on computers that have multiple saved printing options.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 4: Check Whether the Printer Is Offline or Paused</h2>
        <p>A printer that is marked as offline or paused will not print even if it is powered on and connected.</p>
        <p>Open the printer queue and review its status. If the printer is paused or set to offline mode, disable that status and try printing again.</p>
        <p>A paused or offline state may happen after:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>a failed print job</li>
          <li>a restart</li>
          <li>a connection interruption</li>
          <li>a manual setting change</li>
        </ul>
        <p>If the status is not corrected, the system may continue sending jobs to a blocked printer queue without printing anything.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 5: Clear Stuck Print Jobs From the Queue</h2>
        <p>A blocked print queue is one of the most common causes of an hp printer not printing problem. If an earlier print job failed or got stuck, it can prevent all later documents from printing.</p>
        <p>Open the queue and remove all pending jobs. After clearing the queue, restart the printer and send a small test page instead of a large document.</p>
        <p>This helps because:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>old failed jobs no longer block the queue</li>
          <li>the printer receives a fresh print request</li>
          <li>you can test the connection without document-specific issues</li>
        </ul>
        <p>If the queue refuses to clear or jobs stay stuck, restarting the print spooler service may be necessary, which is covered later in this page.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 6: Check Paper Loading and Paper Feed Path</h2>
        <p>Sometimes the printer is not printing because it cannot pick up paper correctly. Even when there is paper in the tray, issues such as misaligned guides, curled sheets, overfilled trays, or hidden scraps from a previous jam can stop printing.</p>
        <p>Remove the paper stack and reload it neatly. Adjust the guides so they are snug but not too tight. Inspect the tray and feed path for any visible obstructions.</p>
        <p>Paper-related issues can cause:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>blank response when printing</li>
          <li>partial feed and stopping in the middle of a job</li>
          <li>repeated attempts to start printing without output</li>
          <li>error lights or attention messages</li>
        </ul>
        <p>A clean reload often fixes issues that users mistake for software problems.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 7: Check Ink or Toner Cartridge Status</h2>
        <p>A printer may stop printing or refuse certain print jobs if cartridges are empty, low, improperly installed, or not recognized correctly.</p>
        <p>Check whether:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the cartridges are seated securely</li>
          <li>protective tape was fully removed on newer cartridges</li>
          <li>the printer display shows an ink warning</li>
          <li>print quality has recently faded or become inconsistent</li>
        </ul>
        <p>If cartridges are very low or not detected, the printer may not complete print jobs normally. Some models may still print certain pages while refusing others, depending on the content and color use.</p>
        <p>If needed, reseat the cartridges carefully and test again. If the printer still does not recognize them, a replacement may be required.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 8: Restart the Printer, Computer, and Router</h2>
        <p>A full restart is one of the most effective ways to fix temporary communication problems.</p>
        <p>Turn off the printer, restart your computer, and if you are using Wi-Fi, restart your router as well. Once the network is fully back online, turn the printer on again and wait until it reaches ready status.</p>
        <p>This step refreshes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>network communication</li>
          <li>temporary system conflicts</li>
          <li>printer memory state</li>
          <li>queue handling</li>
          <li>device detection</li>
        </ul>
        <p>A restart is especially useful when the printer was printing earlier but suddenly stopped without any obvious hardware issue.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 9: Print a Test Page Directly From Printer Settings</h2>
        <p>Testing with your original document does not always reveal whether the problem is the printer or the file itself. A test page is better because it isolates the issue.</p>
        <p>Printing a test page can confirm:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>whether the printer is communicating with the system</li>
          <li>whether the driver is responding</li>
          <li>whether paper feed works normally</li>
          <li>whether cartridges are producing output</li>
        </ul>
        <p>If the test page prints successfully, the problem may be related to a specific application, file, or document settings rather than the printer itself.</p>
        <p>If the test page does not print, the issue is more likely related to printer setup, connection, or software.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 10: Update or Reinstall the Printer Driver</h2>
        <p>A damaged, incomplete, or outdated printer driver can cause the printer to stop printing even if it appears installed.</p>
        <p>Driver problems often occur after:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>operating system updates</li>
          <li>network changes</li>
          <li>interrupted installation</li>
          <li>switching between USB and wireless</li>
          <li>restoring old system settings</li>
        </ul>
        <p>Reinstalling the proper driver helps refresh the communication path between your system and the printer. It can also restore missing features, correct false status reporting, and improve device response.</p>
        <p>If the printer was working before a recent update and then stopped printing, a driver issue becomes even more likely.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 11: Restart the Print Spooler Service</h2>
        <p>The print spooler is the system service that manages print jobs before they are sent to the printer. If it becomes stuck or stops responding, the printer may appear connected but still not print anything.</p>
        <p>Restarting the spooler helps when:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the print queue will not clear</li>
          <li>jobs remain in the queue indefinitely</li>
          <li>new jobs disappear without printing</li>
          <li>printer status does not update correctly</li>
        </ul>
        <p>This step is especially important on Windows systems where print management depends heavily on spooler activity.</p>
        <p>When users keep retrying documents but nothing happens, spooler interruption is often part of the issue.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 12: Check for Printer-Specific Error Messages</h2>
        <p>If the printer still does not print after the previous steps, review the printer display or software utility for specific warnings. Generic troubleshooting can only go so far if the device is already telling you the exact problem.</p>
        <p>Look for messages related to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>door open</li>
          <li>paper jam</li>
          <li>carriage jam</li>
          <li>cartridge missing</li>
          <li>incompatible cartridge</li>
          <li>low supply</li>
          <li>service required</li>
          <li>connection lost</li>
        </ul>
        <p>Specific error messages should always be addressed directly because they often explain why printing is blocked even when everything else seems fine.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Step 13: Test Printing From Another Application or Device</h2>
        <p>If the printer appears ready but one file or one program will not print, test from a different source. Try printing:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>a plain text document</li>
          <li>a browser page</li>
          <li>a PDF</li>
          <li>a test page from system settings</li>
          <li>a simple document from another device on the same network</li>
        </ul>
        <p>This helps determine whether the issue is:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>printer-wide</li>
          <li>application-specific</li>
          <li>file-specific</li>
          <li>network-specific</li>
          <li>user-profile-specific</li>
        </ul>
        <p>If another device can print successfully, the problem may be with the original computer rather than the printer itself.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-6 pb-1">Common Reasons an HP Printer Is Not Printing Even Though It Is Connected</h2>
        <p>One of the most confusing situations is when the printer looks connected but still does not print. In many of these cases, the problem is caused by a hidden software or settings issue rather than the connection itself.</p>
        <p>This can happen when:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>the system has the wrong default printer</li>
          <li>the queue is blocked</li>
          <li>the driver is partially installed</li>
          <li>the printer is technically online but not fully detected</li>
          <li>a background service has stalled</li>
          <li>the document contains corrupted print instructions</li>
        </ul>
        <p>This is why a full troubleshooting flow is more effective than checking only the connection.</p>

        <h2 className="text-2xl font-bold text-gray-900 pt-8 pb-1">How to Prevent Printing Problems in the Future</h2>
        <p>Once the printer is working again, a few good habits can help reduce the chance of the same issue returning.</p>
        <p>Keep the printer software up to date, especially after operating system changes. Use a stable wireless network and avoid switching the printer between different networks too often. Keep paper loaded correctly and use clean, flat sheets. Replace low cartridges before they become completely empty if your printing volume is important. Restart the printer occasionally if it stays on for long periods.</p>
        <p>Preventive maintenance does not solve every problem, but it can significantly reduce repeated interruptions.</p>
      </div>
    ),
  },
];

// ── Main Component ─────────────────────────────────────────────────────────
const PrinterSetupGuide = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const contentRef = useRef(null);

  // Read ?page=N from URL and activate that content panel
  useEffect(() => {
    const pageParam = searchParams.get('page');
    if (pageParam !== null) {
      const pageIndex = parseInt(pageParam, 10);
      if (!isNaN(pageIndex) && pageIndex >= 0 && pageIndex < pages.length) {
        setCurrentPage(pageIndex);
        // Small delay to let DOM settle, then scroll to content
        setTimeout(() => {
          contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    document.title = "123 HP Com Setup Guide | Step-by-Step HP Printer Setup";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn how to complete 123 HP com setup with step-by-step instructions for printer installation, Wi-Fi connection, driver download, and first-time setup.");
    }
  }, []);

  const goToPage = (index) => {
    setCurrentPage(index);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const heroImages = ["/type/p-type1.jpg", "/type/p-type2.jpg", "/type/p-type3.jpg"];

  const productTypes = [
    { icon: Printer, active: true },
    { icon: Monitor },
    { icon: Tablet },
    { icon: Smartphone },
  ];

  const troubleshootingLinks = [
    { icon: () => <PrinterSVGIcon badge={CheckCircle2} />, label: 'Printer Setup Issues' },
    { icon: () => <PrinterSVGIcon badge={Power} />, label: 'Printer Offline Issues' },
    { icon: () => <Wifi size={48} strokeWidth={1.5} color="#0045acff" />, label: 'WiFi Connection Errors' },
    { icon: () => <PaperSVGIcon badge={XCircle} />, label: 'Paper Jam Errors' },
    { icon: () => <PrinterSVGIcon badge={Hourglass} />, label: 'Print Jobs Stuck in Queue' },
    { icon: ScannerSVGIcon, label: 'Scanner Malfunctions' },
  ];

  const setupBanners = [
    { id: 'b1', title: 'Download the Latest Software', description: 'Get the newest drivers and printer software optimized for compatibility with your system.', image: '/guide/banner1.jpg' },
    { id: 'b2', title: 'Connect Your Printer', description: "Establish a connection using a USB cable or set up wireless access through the printer's Wi-Fi setup options.", image: '/guide/banner2.jpg' },
    { id: 'b3', title: 'Install the Printer Drivers', description: 'Proceed with the on-screen instructions to finalize the installation and complete the setup process.', image: '/guide/banner3.jpg' },
    { id: 'b4', title: 'Test the Printer', description: 'After installation, print a test page to verify that your printer is functioning correctly.', image: '/guide/banner4.jpg' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f6f8] font-sans text-gray-800">

      {/* ── 1. PROGRESS BAR + PRODUCT TYPE ──────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-5 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#0045acff] text-white flex items-center justify-center text-xs font-bold">1</span>
              <span className="font-semibold text-gray-800">Identify</span>
              <ChevronRight size={14} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-2 opacity-50">
              <span className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs font-bold">2</span>
              <span className="font-semibold text-gray-500">Download</span>
              <ChevronRight size={14} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-2 opacity-50">
              <span className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs font-bold">3</span>
              <span className="font-semibold text-gray-500">Install</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 font-medium">Select a different product type:</span>
            <div className="flex gap-2">
              {productTypes.map((type, idx) => (
                <button key={idx} className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${type.active ? 'bg-[#0045acff] text-white border-[#0045acff] shadow-md' : 'bg-white text-gray-400 border-gray-200 hover:border-[#0045acff] hover:text-[#0045acff]'}`}>
                  <type.icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f6f8] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 max-w-xl">
            <h1 className="text-2xl md:text-3xl font-bold text-[#0045acff] mb-4">Easy Printer Setup</h1>
            <p className="text-gray-600 mb-4 leading-relaxed">Power on your printer to get started.</p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Next, select <strong>Printer Setup</strong> to follow an easy, step-by-step guide for setting up, customizing, and registering your device.
            </p>
            <button onClick={() => navigate('/find-printer')} className="bg-[#0045acff] hover:bg-[#003a8c] text-white px-7 py-3 rounded-lg font-bold transition-colors shadow-md">
              Click Here for Printer Setup
            </button>
          </div>

          <div className="flex-1 max-w-lg w-full relative group flex items-center justify-center h-[280px] md:h-[320px]">
            <button onClick={() => setCurrentSlide((p) => (p - 1 + heroImages.length) % heroImages.length)} className="absolute left-0 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all">
              <ChevronLeft className="text-gray-500" size={22} />
            </button>
            <AnimatePresence mode="wait">
              <motion.img key={currentSlide} src={heroImages[currentSlide]} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.4 }} alt="HP Printer" className="w-full h-full object-contain drop-shadow-xl" />
            </AnimatePresence>
            <button onClick={() => setCurrentSlide((p) => (p + 1) % heroImages.length)} className="absolute right-0 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all">
              <ChevronRight className="text-gray-500" size={22} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentSlide(idx)} className={`h-2 rounded-full transition-all ${currentSlide === idx ? 'w-6 bg-[#0045acff]' : 'w-2 bg-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. TROUBLESHOOTING GRID ──────────────────────────────────────── */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {troubleshootingLinks.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -4 }} className="flex flex-col items-center justify-center p-6 py-8 rounded-2xl bg-white border border-gray-100 shadow-sm cursor-pointer transition-all min-h-[140px]">
                <div className="mb-4"><item.icon /></div>
                <p className="text-[12px] font-bold text-[#0045acff] text-center leading-tight max-w-[100px]">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SETUP BANNERS ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {setupBanners.map((banner, idx) => (
            <motion.div key={banner.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="h-44 overflow-hidden">
                <img src={banner.image} alt={banner.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-gray-800 mb-2">{banner.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{banner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 5. DYNAMIC PAGE CONTENT ──────────────────────────────────────── */}
      <section ref={contentRef} className="bg-white py-16 scroll-mt-4">
        <div className="max-w-4xl mx-auto px-6">

          {/* Page indicator pills */}
          {/* Animated content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {pages[currentPage].content}
            </motion.div>
          </AnimatePresence>

          {/* ── PREVIOUS / NEXT NAVIGATION ───────────────────────────── */}
          <div className="flex items-center justify-between mt-16 pt-8 border-t border-gray-100">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold border transition-all ${
                currentPage === 0
                  ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                  : 'text-gray-700 border-gray-200 hover:border-[#0045acff] hover:text-[#0045acff]'
              }`}
            >
              <ChevronLeft size={20} />
              Previous
              {currentPage > 0 && (
                <span className="hidden sm:inline text-xs font-normal text-gray-400 ml-1">
                  — {pages[currentPage - 1].label}
                </span>
              )}
            </button>

            {/* Page count */}
            <span className="text-sm text-gray-400 font-medium">
              Page {currentPage + 1} of {pages.length}
            </span>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === pages.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold border transition-all ${
                currentPage === pages.length - 1
                  ? 'text-gray-300 border-gray-100 cursor-not-allowed'
                  : 'bg-[#0045acff] text-white border-[#0045acff] hover:bg-[#003a8c]'
              }`}
            >
              Next
              {currentPage < pages.length - 1 && (
                <span className="hidden sm:inline text-xs font-normal opacity-80 ml-1">
                  — {pages[currentPage + 1].label}
                </span>
              )}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ── 6. SUPPORT CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#f5f6f8] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex-1 space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Still Need Help? Connect with Online Printer Experts</h2>
              <p className="text-gray-600 leading-relaxed">If you're still experiencing issues after following these steps, our certified support experts are here to assist you. Connect online for real-time troubleshooting, personalized guidance, and quick solutions to get your printer up and running smoothly.</p>
              <button onClick={() => setIsChatOpen(true)} className="bg-[#0045acff] hover:bg-[#003a8c] text-white px-8 py-3.5 rounded-lg font-bold shadow-md transition-all">
                Click for Live Chat Assistance
              </button>
            </div>
            <div className="flex-1 w-full max-w-sm">
              <img src="/guide/banner5.jpg" alt="Printer Support Expert" className="w-full h-auto rounded-2xl shadow-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER BAR ───────────────────────────────────────────────── */}
      <div className="bg-[#0045acff] py-6 px-6">
        <p className="text-white text-sm text-center max-w-4xl mx-auto leading-relaxed">
          Prints Matrix operates as an independent third-party retailer. Manufacturer warranties, where applicable, are provided directly by the respective brands. Prints Matrix does not claim authorization or official partnership with any manufacturer unless explicitly stated.
        </p>
      </div>


      {/* ── 8. CHAT WIDGET ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div initial={{ opacity: 0, y: 80, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 80, scale: 0.95 }} className="fixed bottom-8 right-8 z-[100] w-[340px] max-w-[92vw] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
            <div className="bg-[#0045acff] p-5 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><MessageSquare size={18} /></div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-[#0045acff] rounded-full" />
                </div>
                <div>
                  <p className="font-bold text-sm">Live Support</p>
                  <p className="text-xs opacity-75">We're online &amp; ready to help</p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white"><X size={18} /></button>
            </div>
            <div className="h-64 p-5 bg-gray-50 overflow-y-auto">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100">
                Hi! Thanks for reaching out. How can we help you with your printer setup today?
              </div>
            </div>
            <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input type="text" placeholder="Type your message..." className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm outline-none" />
              <button className="w-9 h-9 rounded-full bg-[#0045acff] text-white flex items-center justify-center"><Send size={16} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrinterSetupGuide;
