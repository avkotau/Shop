import React, { Component } from 'react';
// @ts-ignore
import vectorRight from '../../img/vector-right.svg';

interface Props {
    onClick: any,

}

class CarouselRightArrow extends Component<Props> {
    render() {
        return (
            <a
                href="#"
                className="carousel__arrow carousel__arrow--right"
                onClick={this.props.onClick}
            >
                <img src={vectorRight} alt=""/>
            </a>
        );
    }
}

export default CarouselRightArrow;
