import React, { Component } from 'react';
import Carousel from "./Carousel";

interface Props {
    slides: object[],

}

class CarouselContainer extends Component<Props> {
    render() {

        return (
            <div className="carousel-container">
                <Carousel slides={this.props.slides}/>
            </div>
        );
    }
}

export default CarouselContainer;
