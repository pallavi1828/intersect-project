import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Main layout components
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import SiteFooter from './components/SiteFooter';
import Chatbot from './components/Chatbot';  // Chatbot component

// Top-level pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import Solutions from './pages/Solutions';
import Accolades from './pages/Accolades';
import Partners from './pages/Partners';
import Customers from './pages/Customers';
// Solution subpages
import StructuredCabling from './pages/solutions/StructuredCabling';
import RoutingSwitching from './pages/solutions/RoutingSwitching';
import Wireless from './pages/solutions/Wireless';
import BackhaulRF from './pages/solutions/BackhaulRF';
import NetworkGatewaySDWAN from './pages/solutions/NetworkGatewaySDWAN';
import VideoConferencing from './pages/solutions/VideoConferencingAndSmartBoards';
import IPSurveillance from './pages/solutions/IPSurveillance';
import Storage from './pages/solutions/Storage';
import Endpoints from './pages/solutions/Endpoints';
import SystemSecurity from './pages/solutions/SystemSecurity';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/accolades" element={<Accolades />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* Solution Subpages */}
        <Route path="/solutions/structured-cabling" element={<StructuredCabling />} />
        <Route path="/solutions/routing-switching" element={<RoutingSwitching />} />
        <Route path="/solutions/secured-wireless" element={<Wireless />} />
        <Route path="/solutions/backhaul-rf" element={<BackhaulRF />} />
        <Route path="/solutions/network-gateway-sdwan" element={<NetworkGatewaySDWAN />} />
        <Route path="/solutions/video-conferencing" element={<VideoConferencing />} />
        <Route path="/solutions/ip-surveillance" element={<IPSurveillance />} />
        <Route path="/solutions/storage" element={<Storage />} />
        <Route path="/solutions/endpoints" element={<Endpoints />} />
        <Route path="/solutions/system-security" element={<SystemSecurity />} />
      </Routes>
<Chatbot />
      <SiteFooter />
    </>
  );
}

export default App;
