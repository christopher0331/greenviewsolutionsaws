import * as React from 'react';
import {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

class Feature5 extends Component {
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
            primaryImage: ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_1.webp", '6ft Cedar Privacy Fence'],
            allImages: [
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_2.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_3.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_4.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_5.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_6.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_7.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_8.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_9.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_10.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_11.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_12.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_13.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_14.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_15.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_16.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_17.webp", '6ft Cedar Privacy Fence'],
                ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/4.23.21-HOA6FtPicket-Folder/FullSize/4.23.21-HOA6FtPicket_18.webp", '6ft Cedar Privacy Fence'],
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
                            <h3 className="featuredTitle">6ft Cedar Privacy Fence</h3>
                        <div className="primaryImageBox">
                            <img className="primaryImage" src={this.state.primaryImage[0]} alt={this.state.primaryImage[1]}/>
                            <FontAwesomeIcon onClick={() => this.changeImagesLeftArrow()} id='projectLeftArrow' icon={faChevronCircleLeft} color='black'/>
                            <FontAwesomeIcon onClick={() => this.changeImagesRightArrow()} id='projectRightArrow' icon={faChevronCircleRight} color='black'/>
                        </div>
                        <div>
                            <div className="secondaryCarousel">
                                {this.state.allImages.map(image => (
                                    <img onClick={() => this.changePrimary(image)} className="secondaryImages" src={image[0]} alt={image[1]}/>
                                ))}
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Feature5;
