import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ResidnetialFence_300 = "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/ResidentialHP.webp"

const ResidentialFences = (props) => {

    return(
        <div className="divBox">  
            <Card.Img variant="custom" src={ResidnetialFence_300} className='cardImage' alt='' />
            <Card.Body className='cardBody'>
                <Card.Title className="cardTitle"><h1 id="CardTitles">Residential Fences</h1></Card.Title>
                <Card.Text className="cardText">
                    Privacy, decorative, and security fences to meet any of your residential fencing needs.
                </Card.Text>
                <Link to="/wood-fences" >
                    <button className='cardButton'>Residential Fences</button>{' '}
                </Link>
                
            </Card.Body>
        </div>
    )
}

export default ResidentialFences;
