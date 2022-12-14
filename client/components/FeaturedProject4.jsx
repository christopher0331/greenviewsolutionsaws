import * as React from 'react';
import {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

class Feature4 extends Component {
    constructor(props){
        super(props)

        this.state = {
            primaryImage: "",
            allImages: [],
            imageIndex: 0
        }
        this.changePrimary = this.changePrimary.bind(this);
        this.changeImagesRightArrow = this.changeImagesRightArrow.bind(this);
        this.changeImagesLeftArrow = this.changeImagesLeftArrow.bind(this);

    }

    componentDidMount(){
        this.setState({
            primaryImage: ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_18.webp",'Commercial Fencing, Chainlink Fencing'],
            allImages: [
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_2.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_3.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_4.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_5.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_6.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_8.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_9.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_10.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_11.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_12.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_13.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_14.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_15.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_16.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_17.webp",'Chainlink Fencing'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/CommercialFencing/Mobile/CommercialFence_18.webp",'Chainlink Fencing']
            ]
        })
    }

    changePrimary(target){
        this.setState({
            primaryImage: target
        })
    }

    changeImagesRightArrow(){
        if(this.state.imageIndex === this.state.allImages.length - 1){
            this.setState({
                imageIndex: 0,
                primaryImage: this.state.allImages[this.state.imageIndex]
            })
        } else {
            this.setState({
                imageIndex: this.state.imageIndex + 1,
                primaryImage: this.state.allImages[this.state.imageIndex]
            })
        }
    }

    changeImagesLeftArrow(){
        if(this.state.imageIndex === 0){
            this.setState({
                imageIndex: 1,
                primaryImage: this.state.allImages[this.state.imageIndex]
            })
        } else {
            this.setState({
                imageIndex: this.state.imageIndex - 1,
                primaryImage: this.state.allImages[this.state.imageIndex]
            })
        }
    }

    render(){
        return(
            <div>
                    <div className="imageSection">
                            <h3 className="featuredTitle">Commercial Chainlink Fence</h3>
                        <div className="primaryImageBox">
                            <img className="primaryImage" src={this.state.primaryImage[0]} alt={this.state.primaryImage[1]}/>
                            <FontAwesomeIcon onClick={() => this.changeImagesLeftArrow()} id='projectLeftArrow' icon={faChevronCircleLeft} color='black'/>
                            <FontAwesomeIcon onClick={() => this.changeImagesRightArrow()} id='projectRightArrow' icon={faChevronCircleRight} color='black'/>
                        </div>
                        <div>
                            <div className="secondaryCarousel">
                                {this.state.allImages.map(image => (
                                    <img onClick={() => this.changePrimary(image)} className="secondaryImages" src={image[0]} alt={image[1]} />
                                ))}
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Feature4;
