import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PublicAssociate from './pages/PublicAssociate';
import OurTeam from './pages/OurTeam';
import AboutUs from './pages/AboutUs';
import OurHistory from './pages/OurHistory';
import OurSponsor from './pages/OurSponsor';
import AnnualReports from './pages/AnnualReports';
import Career from './pages/Career';
import CohenSchool from './pages/CohenSchool';
import ScienceMovement from './pages/ScienceMovement';
import VidwanClasses from './pages/VidwanClasses';
import Opttri from './pages/Opttri';
import Nimer from './pages/Nimer';
import KnowledgeAssociate from './pages/KnowledgeAssociate';
import TrainingAssociate from './pages/TrainingAssociate';
import Donate from './pages/Donate';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import PagePlaceholder from './pages/PagePlaceholder';
import Impact from './pages/Impact';
import Campaigns from './pages/Campaigns';
import Volunteer from './pages/Volunteer';
import HolisticCare from './pages/HolisticCare';
import HealthNutrition from './pages/HealthNutrition';
import LivelihoodCapacity from './pages/LivelihoodCapacity';
import SkillDevelopment from './pages/SkillDevelopment';
import OurMegaSuccesses from './pages/OurMegaSuccesses';
import StudentAwareness from './pages/StudentAwareness';
import EmergencyRelief from './pages/EmergencyRelief';
import EnvironmentSustainability from './pages/EnvironmentSustainability';
import WaterSanitation from './pages/WaterSanitation';
import CsrPartnership from './pages/CsrPartnership';

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
            <Route path="/annual-reports" element={<AnnualReports />} />
            <Route path="/career" element={<Career />} />
            <Route path="/wings/cohen-school" element={<CohenSchool />} />
            <Route path="/wings/vidwan-classes" element={<VidwanClasses />} />
            <Route path="/wings/science-movement" element={<ScienceMovement />} />
            <Route path="/opttri" element={<Opttri />} />
            <Route path="/nimer" element={<Nimer />} />
            <Route path="/knowledge" element={<KnowledgeAssociate />} />
            <Route path="/training" element={<TrainingAssociate />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/what-we-do/holistic-care" element={<HolisticCare />} />
            <Route path="/what-we-do/health-nutrition" element={<HealthNutrition />} />
            <Route path="/what-we-do/livelihood" element={<LivelihoodCapacity />} />
            <Route path="/what-we-do/skill" element={<SkillDevelopment />} />
            <Route path="/mega" element={<OurMegaSuccesses />} />
            <Route path="/student" element={<StudentAwareness />} />
            <Route path="/emergency" element={<EmergencyRelief />} />
            <Route path="/ets" element={<EnvironmentSustainability />} />
            <Route path="/wash" element={<WaterSanitation />} />
            <Route path="/csr-or-program" element={<CsrPartnership />} />
            
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
