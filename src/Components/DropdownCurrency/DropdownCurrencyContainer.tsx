import React, { Component } from 'react';
// @ts-ignore
import vectorUp from "../../img/vectorUp.svg";
// @ts-ignore
import vectorDown from "../../img/vectorDown.svg";
import DropdownCurrencyList from "./DropdownCurrencyList";
import './DropdownCurrencyContainer.scss';


class DropdownCurrencyContainer extends Component {
    // @ts-ignore
    private wrapperRef: any;
    // @ts-ignore
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    state = {
        show: false,
        //????????????????/
        setOpen: false
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node: any) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event: { target: any; }) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            //alert("You clicked outside of me!");
            //this.setState({show: false})

        }
    }

    render() {
        const {show} = this.state;

        return (
            <>
                {/*@ts-ignore*/}
                <div onClick={() => this.setState({show: !show})} className="vectors-currency" ref={this.setWrapperRef} >
                    {
                        (show)
                            //@ts-ignore
                            ? <div>
                                {/*@ts-ignore*/}
                                <DropdownCurrencyList/>
                                <img src={vectorDown} alt='Vector down'/>
                            </div>
                            : <div>
                                <img src={vectorUp} alt="Vector"/>
                            </div>
                    }
                </div>
            </>
        );
    }
}

export default DropdownCurrencyContainer;

