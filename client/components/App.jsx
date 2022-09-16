import css from '../../public/styles.css';
import * as React from 'react';
import { lazy, Suspense } from 'react';
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
                    <Route path="/" exact component={HomePage} />
                    <Route path="/services" component={HomePage}/>
                    <Route path="/about-us" component={AboutUs}/>
                    <Route path="/fencing" component={Fencing} />
                    <Route path="/irrigation" component={Irrigation} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/tools" component={Tools} />
                    <Route path="/wood-fences" component={WoodFences} />
                    <Route path="/chainlink-fences" component={ChainLinkFences} />
                    <Route path="/wrought-iron-fences" component={WroughtIronFences} />
                    <Route path="/custom-fences" component={CustomFences} />
                    <Route path="/commercial-fences" component={CommercialFencing} />
                    <Route path="/backflow" component={Backflow} />
                    <Route path="/adminuse" component={AdminUse} />                    
                    <Route path="*" component={HomePage} />
            </Routes> 
	  <Footer />
        </Suspense>
      </Router>
        
    </div>
  );
}

export default App;
