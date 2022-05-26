import React, { Component } from 'react';
import CarouselLeftArrow from './CarouselLeftArrow';
import CarouselRightArrow from './CarouselRightArrow';
import CarouselSlide from './CarouselSlide';
import "./Carousel.scss";


// const { render } = ReactDOM;


interface Props {
    slides: object[],

}

interface State {
    activeIndex: number,

}


class Carousel extends Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.goToSlide = this.goToSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

        this.state = {
            activeIndex: 0
        };
    }

    goToSlide(index: any) {
        this.setState({
            activeIndex: index
        });
    }

    goToPrevSlide(e: { preventDefault: () => void; }) {
        e.preventDefault();
// @ts-ignore
        let index = this.state.activeIndex;
        let {slides} = this.props;
        // @ts-ignore
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        this.setState({
            activeIndex: index
        });
    }

    goToNextSlide(e: { preventDefault: () => void; }) {
        e.preventDefault();
// @ts-ignore
        let index = this.state.activeIndex;
        let {slides} = this.props;
        // @ts-ignore
        let slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        this.setState({
            activeIndex: index
        });
    }

    render() {
        // @ts-ignore
        return (
            <>
                {this.props.slides && <div className="carousel">
                    {/*@ts-ignore*/}
                    <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)}/>

                    <ul className="carousel__slides">
                        {this.props.slides.map((slide, index) =>
                            <CarouselSlide
                                key={index}

                                index={index}

                                activeIndex={this.state.activeIndex}
                                slide={slide}
                            />
                        )}
                    </ul>
                    {/*@ts-ignore*/}
                    <CarouselRightArrow onClick={e => this.goToNextSlide(e)}/>

                </div>}
            </>
        );
    }
}


export default Carousel;
