import React, { Component } from 'react';

interface Props {
    slide: any,
    index: number,
    activeIndex: number,
}

class CarouselSlide extends Component<Props> {
    render() {

        return (
            <img
                className={
                    this.props.index == this.props.activeIndex
                        ? "carousel__slide carousel__slide--active"
                        : "carousel__slide"
                }
                src={this.props.slide}
                alt="">
            </img>
        );
    }
}

export default CarouselSlide;
