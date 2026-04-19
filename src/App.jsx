import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { AuthProvider } from './context/AuthContext';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeaderSetup from './components/Setup/HeaderSetup';
import ScrollToTop from './components/ScrollToTop';
import { useLocation } from 'react-router-dom';
import useHeaderSettings from './hooks/useHeaderSettings';

/**
 * Wraps React.lazy() with automatic page-reload recovery.
 * When a deployment replaces chunk filenames, the browser's cached index.html
 * references old hashes → 404. One silent reload fetches the new index.html
 * and the correct chunks, avoiding the "Failed to fetch dynamically imported module" error.
 */
function lazyWithRetry(importFn) {
  return lazy(async () => {
    const hasRefreshed = sessionStorage.getItem('chunk_reload') === 'true';
    try {
      const mod = await importFn();
      sessionStorage.removeItem('chunk_reload'); // reset on success
      return mod;
    } catch (err) {
      if (!hasRefreshed) {
        sessionStorage.setItem('chunk_reload', 'true');
        window.location.reload();
        return { default: () => null }; // placeholder while reloading
      }
      throw err; // second failure → let ErrorBoundary handle
    }
  });
}

// Utility to scroll to top on route change (including query param changes)
const ScrollToTopOnNavigation = () => {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
};

import Home from './pages/Home';
import Printers from './components/Printers';
const SetupSelect = lazyWithRetry(() => import('./components/Setup/SetupSelect'));

// ── Lazy-loaded pages (code-split into separate chunks) ──────────────────────
const About = lazyWithRetry(() => import('./pages/About'));
const FAQs = lazyWithRetry(() => import('./pages/FAQs'));
const Contact = lazyWithRetry(() => import('./pages/Contact'));
const ProductDetails = lazyWithRetry(() => import('./pages/ProductDetails'));
const Cart = lazyWithRetry(() => import('./pages/Cart'));

const Checkout = lazyWithRetry(() => import('./pages/Checkout'));
const Login = lazyWithRetry(() => import('./pages/Login'));
const Signup = lazyWithRetry(() => import('./pages/Signup'));
const ForgotPassword = lazyWithRetry(() => import('./pages/ForgotPassword'));
const ResetPassword = lazyWithRetry(() => import('./pages/ResetPassword'));
const TrackOrder = lazyWithRetry(() => import('./pages/TrackOrder'));
const MyOrders = lazyWithRetry(() => import('./pages/MyOrders'));
const OrderDetails = lazyWithRetry(() => import('./pages/OrderDetails'));
const Profile = lazyWithRetry(() => import('./pages/Profile'));
const PrivacyPolicy = lazyWithRetry(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazyWithRetry(() => import('./pages/TermsConditions'));
const RefundPolicy = lazyWithRetry(() => import('./pages/RefundPolicy'));
const ShippingPolicy = lazyWithRetry(() => import('./pages/ShippingPolicy'));
const CookiePolicy = lazyWithRetry(() => import('./pages/CookiePolicy'));
const Disclaimer = lazyWithRetry(() => import('./pages/Disclaimer'));
const DoNotSell = lazyWithRetry(() => import('./pages/DoNotSell'));
const Accessibility = lazyWithRetry(() => import('./pages/Accessibility'));
const BuyingGuide = lazyWithRetry(() => import('./pages/BuyingGuide'));
const Resources = lazyWithRetry(() => import('./pages/Resources'));
const ReturnExchange = lazyWithRetry(() => import('./pages/ReturnExchange'));
const PrinterSetupGuide = lazyWithRetry(() => import('./pages/PrinterSetupGuide'));
const FindPrinter = lazyWithRetry(() => import('./pages/FindPrinter'));
const Blog = lazyWithRetry(() => import('./pages/Blog'));
const BlogDetails = lazyWithRetry(() => import('./pages/BlogDetails'));

// ── Admin (lazily loaded — never downloaded by regular users) ────────────────
const AdminLogin = lazyWithRetry(() => import('./components/admin/Auth/AdminLogin'));
const AdminLayout = lazyWithRetry(() => import('./components/admin/Layout/AdminLayout'));
const AdminDashboard = lazyWithRetry(() => import('./components/admin/Pages/AdminDashboard'));
const AdminCategories = lazyWithRetry(() => import('./components/admin/Pages/AdminCategories'));
const AdminProducts = lazyWithRetry(() => import('./components/admin/Pages/AdminProducts'));
const AdminCustomers = lazyWithRetry(() => import('./components/admin/Pages/AdminCustomers'));
const AdminOrders = lazyWithRetry(() => import('./components/admin/Pages/AdminOrders'));
const AdminChat = lazyWithRetry(() => import('./components/admin/Pages/AdminChat'));
const AdminAnalytics = lazyWithRetry(() => import('./components/admin/Pages/AdminAnalytics'));
const AdminSettings = lazyWithRetry(() => import('./components/admin/Pages/AdminSettings'));
// const SetupSelect = lazyWithRetry(() => import('./components/Setup/SetupSelect'));
const ModelSearch = lazyWithRetry(() => import('./components/Setup/ModelSearch'));
const CompleteSetup = lazyWithRetry(() => import('./components/Setup/CompleteSetup'));
const InstallationFailed = lazyWithRetry(() => import('./components/Setup/InstallationFailedPage'));
const AdminLoginHeader = lazyWithRetry(() => import('./components/Setup/AdminLoginHeader'));
const SettingsManagement = lazyWithRetry(() => import('./components/Setup/SettingsManagement'));
// ── Loading fallback ─────────────────────────────────────────────────────────
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-10 w-10 border-4 border-[#0075be] border-t-transparent" />
  </div>
);

import './App.css';

function App() {
  return (
    <AuthProvider>
      <ShopProvider>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <InnerApp />
        </Router>
      </ShopProvider>
    </AuthProvider>
  );
}

const InnerApp = () => {
  const location = useLocation();
  const { showHeader, showLogo, allowInstallationFailed, allowCompleteSetup, loading: settingsLoading } = useHeaderSettings();
  const path = location.pathname.toLowerCase().replace(/\/$/, '');

  // Always hide main Navbar on all setup-flow routes. 
  // /model-search, /complete-setup, & /installation-failed will render 
  // their own specialized HeaderSetup component internally.
  const hideNavbar = ['/printer-setup-guide', '/model-search', '/complete-setup', '/installation-failed'].includes(path);
  const isSetupRoute = ['/model-search', '/complete-setup', '/installation-failed'].includes(path);
  const hideFooter = hideNavbar;

  // Redirection is handled directly in the <Route> components for zero-flicker transitions.
  // The index.html guard handles the pre-mount hard redirect.

  return (
    <>
      <ScrollToTopOnNavigation />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {!hideNavbar && <Navbar />}
        {isSetupRoute && !settingsLoading && showHeader && <HeaderSetup showLogo={showLogo} />}
        <main className="flex-grow min-h-[70vh]">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Printers />} />
              <Route path="/shop/:category" element={<Printers />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/orders" element={<MyOrders />} />
              <Route path="/order/:id" element={<OrderDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/return-refund" element={<RefundPolicy />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/cookies-policy" element={<CookiePolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/do-not-sell" element={<DoNotSell />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/buying-guide" element={<BuyingGuide />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/return-exchange" element={<ReturnExchange />} />
              <Route path="/printer-setup-guide" element={<SetupSelect />} />
              <Route path="/model-search" element={<ModelSearch />} />
              <Route
                path="/complete-setup"
                element={
                  settingsLoading
                    ? <PageLoader />
                    : (allowCompleteSetup === true
                      ? <CompleteSetup />
                      : <Navigate to="/printer-setup-guide/" replace />)
                }
              />
              <Route
                path="/installation-failed"
                element={
                  settingsLoading
                    ? <PageLoader />
                    : (allowInstallationFailed === true
                      ? <InstallationFailed />
                      : <Navigate to="/printer-setup-guide/" replace />)
                }
              />
              {/* <Route path="/find-printer" element={<FindPrinter />} /> */}
              <Route path='/header/login' element={<AdminLoginHeader />} />
              <Route path='/settings' element={<SettingsManagement />} />
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="categories" element={<AdminCategories />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="customers" element={<AdminCustomers />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route path="chat" element={<AdminChat />} />
                <Route path="analytics" element={<AdminAnalytics />} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
        {!hideFooter && <Footer />}
        <ScrollToTop />

      </div>
    </>
  );
};

export default App;
