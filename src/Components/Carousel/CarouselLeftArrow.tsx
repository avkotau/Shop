import React, { Component } from 'react';
// @ts-ignore
import vectorLeft from "../../img/vector-left.svg";

interface Props {
    onClick: any,

}

class CarouselLeftArrow extends Component<Props> {
    render() {

        return (
            <a
                href="#"
                className="carousel__arrow carousel__arrow--left"
                onClick={this.props.onClick}
            >
                <img src={vectorLeft} alt=""/>
            </a>
        );
    }
}

export default CarouselLeftArrow;
