import { useEffect, lazy } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ImagesMapped from './ImagesMapped.jsx';
import ImagesMappedSmall from './ImagesMappedSmall.jsx';

const Irrigation = lazy(() => import('./IrrigationProject.jsx'));
const CommercialFences = lazy(() => import('./CommercialFences.jsx'));
const BackflowTests = lazy(() => import('./BackflowTests.jsx'));
const ResidentialFences = lazy(() => import('./ResidentialFences.jsx'));
const Information = lazy(() => import('./Information.jsx'));
const Project = lazy(() => import('./Projects.jsx'));

const HomePage = (props) => {
   
    const innerWidth = window.innerWidth;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      if(innerWidth < 684){
        return  (
            <div>
                <div className="ImagesMappesBox">
                   <ImagesMappedSmall />
                </div>
                <div className="FirstHomepageBox">
                    <h5 id="BoxText">Quality, Communication and Commitment Every Fence</h5>
                    <Link to="contact-us">
                        <button className="buttonDivSmall">Contact Us</button>
                    </Link>
                </div>
                <div className="outter">What We Do</div>
                <div className="inner">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                        <BackflowTests changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                </div> 
                <div className="mediaBreak900">
                    <div>
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                    </div>
                    <div>
                        <BackflowTests changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                    </div>
                </div>
                <div className="mediaBreak500">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                        <BackflowTests changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                </div>       
                <div>
                    <Information />
                </div>
                <div>
                    <Project changePage={props.changePage}/>
                </div>
            </div>
        
            )       
      } else {
        return(
            <div>
                <div className="ImagesMappesBox">
                   <ImagesMapped />
                </div>
                <div className="FirstHomepageBox">
                    <h5 id="BoxText">Quality, Communication and Commitment Every Fence</h5>
                    <Link to="contact-us">
                        <button className="buttonDivLarge">Contact Us</button>
                    </Link>
                </div>
                <div className="outter">What We Do</div>
                <div className="inner">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                        <BackflowTests changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                </div> 
                <div className="mediaBreak900">
                    <div>
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                    </div>
                    <div>
                        <BackflowTests changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                    </div>
                </div>
                <div className="mediaBreak500">
                        <ResidentialFences changePage={props.changePage}/>
                        <CommercialFences changePage={props.changePage}/>
                        <BackflowTests changePage={props.changePage}/>
                        <Irrigation changePage={props.changePage}/>
                </div>       
                <div>
                    <Information />
                </div>
                <div>
                    <Project changePage={props.changePage}/>
                </div>
                {/* <div>
                    We Serve the Following Areas: 

                </div> */}
            </div>
        
        )
    } 
        
}

export default HomePage;
