import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PublicAssociate from './pages/PublicAssociate';
import OurTeam from './pages/OurTeam';
import AboutUs from './pages/AboutUs';
import OurHistory from './pages/OurHistory';
import OurSponsor from './pages/OurSponsor';
import CohenSchool from './pages/CohenSchool';
import Donate from './pages/Donate';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import PagePlaceholder from './pages/PagePlaceholder';
import Impact from './pages/Impact';
import Campaigns from './pages/Campaigns';
import Volunteer from './pages/Volunteer';
import HolisticCare from './pages/HolisticCare';
import HealthNutrition from './pages/HealthNutrition';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-pattern">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/public-associate" element={<PublicAssociate />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about/our-team" element={<OurTeam />} />
            <Route path="/about/our-history" element={<OurHistory />} />
            <Route path="/about/sponsor-partner" element={<OurSponsor />} />
            <Route path="/wings/cohen-school" element={<CohenSchool />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/what-we-do/holistic-care" element={<HolisticCare />} />
            <Route path="/what-we-do/health-nutrition" element={<HealthNutrition />} />
            
            {/* Catch-all route for other navbar links to demonstrate working router */}
            <Route path="*" element={<PagePlaceholder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
