import { lazy, Suspense } from 'react';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const HomePage = lazy(() => import('./HomePages.jsx')); 
const AboutUs = lazy(() => import('./AboutUs.jsx'));
const Header = lazy(() => import('./Header.jsx'));  
const Footer = lazy(() => import('./Footer.jsx'));
const ContactUs = lazy(() => import('./ContactUs.jsx'));
const Irrigation = lazy(() => import('./Irrigation.jsx'));
const Portfolio = lazy(() => import('./Portfolio.jsx'));
const Fencing = lazy(() => import('./Fencing.jsx'));
const Tools = lazy(() => import('./Tools.jsx'));
const WoodFences = lazy(() => import('./WoodFences.jsx'));
const ChainLinkFences = lazy(() => import('./ChainLinkFences.jsx'));
const WroughtIronFences = lazy(() => import('./WroughtIronFences.jsx'));
const CustomFences = lazy(() => import('./CustomFences.jsx'));
const Backflow = lazy(() => import('./BackFlow.jsx'));
const CommercialFencing = lazy(() => import('./CommercialFencing.jsx'));
const AdminUse = lazy(() => import('./AdminUse.js'));
 
function App() {

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
	            <Routes>
                  <Route path="/" exact element={<HomePage />} />
                  <Route path="/services" element={<HomePage />}/>
                  <Route path="/about-us" element={<AboutUs />}/>
                  <Route path="/fencing" element={<Fencing />} />
                  <Route path="/irrigation" element={<Irrigation />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/tools" element={<Tools />} />
                  <Route path="/wood-fences" element={<WoodFences />} />
                  <Route path="/chainlink-fences" element={<ChainLinkFences />} />
                  <Route path="/wrought-iron-fences" element={<WroughtIronFences />} />
                  <Route path="/custom-fences" element={<CustomFences />} />
                  <Route path="/commercial-fences" element={<CommercialFencing />} />
                  <Route path="/backflow" element={<Backflow />} />
                  <Route path="/adminuse" element={<AdminUse />} />                    
                  <Route path="*" element={<HomePage />} />
              </Routes> 
	          <Footer />
        </Suspense>
      </Router>
        
    </div>
  );
}

export default App;
