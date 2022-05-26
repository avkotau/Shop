import React, { Component } from 'react';
// @ts-ignore
import DropDownList from './DropDownList';
// @ts-ignore
import basket from '../../img/Empty Cart.svg';
// @ts-ignore
import vector from '../../img/vectorUp.png';
import './DropDownContainer.scss';
import DropdownCurrencyContainer from "../DropdownCurrency/DropdownCurrencyContainer";

interface Props {
    products: object,

}
interface HandleNameChangeInterface {
    currentTarget: any;
    target: HTMLInputElement;
}

class DropdownComponent extends Component<Props> {
    // @ts-ignore
    private wrapperRef: any;
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            modal: false,
            value: ''

        }
        // this.setWrapperRef = this.setWrapperRef.bind(this);
        // this.handleClickOutside = this.handleClickOutside.bind(this);


        this.output = this.output.bind(this)
    }
    // output(e: any) {
    //     console.log(e)
    // }


    showModal = () => {
        this.setState(() => ({ modal: true }));
    }

    output (e: any)  {
        console.log(e)
        this.setState({ modal: e });
    }


    // componentDidMount() {
    //     document.addEventListener("mousedown", this.handleClickOutside);
    // }
    //
    // componentWillUnmount() {
    //     document.removeEventListener("mousedown", this.handleClickOutside);
    // }

    /**
     * Set the wrapper ref
     */
    // setWrapperRef(node: any) {
    //     this.wrapperRef = node;
    // }

    /**
     * Alert if clicked on outside of element
     */
    // handleClickOutside(event: { target: any; }) {
    //     if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
    //         //alert("You clicked outside of me!");
    //         //this.setState({show: false})
    //
    //     }
    // }

    render() {
        // @ts-ignore
        const {modal} = this.state;
        // @ts-ignore
        const {value} = this.state

        console.log(modal)
        // @ts-ignore
        return (
            //onClick={this.hideModal}
            //@ts-ignore
            <div className="dropdown-container" value={this.state.value} >
                <div className="basket-vector">
                    <div>{"\uFF04"}</div>
                    <div className="vector">
                        <DropdownCurrencyContainer/>
                    </div>
                    {/*ref={this.setWrapperRef}*/}
                    {/*onClick={() => this.setState({show: !show})}*/}
                    <div className="basket" onClick={this.showModal} >
                        <img src={basket} alt="Basket"/>
                    </div>
                </div>

                {/*<input type="text">input</input>*/}
                {
                    (modal)
                        //@ts-ignore
                        ? <DropDownList products={this.props.products} func={this.output} />
                        : ''
                }
            </div>
        );
    }
}

export default DropdownComponent;
