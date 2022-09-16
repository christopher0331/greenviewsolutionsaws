import { useEffect } from 'react';
import * as React from 'react';

const AboutUs = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
           <Overview />
           <OurProcess />
        </div>

    )
}

export default AboutUs;

