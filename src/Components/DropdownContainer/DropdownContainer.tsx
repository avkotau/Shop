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
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
        this.output = this.output.bind(this)
    }

    output(e: any) {

        this.setState({modal: !e});
    }

    render() {
        // @ts-ignore
        const {modal} = this.state;

        return (
            //@ts-ignore
            <div className="dropdown-container" value={this.state.value}>
                <div className="basket-vector">
                    <div>{"\uFF04"}</div>
                    <div className="vector">
                        <DropdownCurrencyContainer/>
                    </div>
                    <div className="basket" onClick={() => this.setState({modal: !modal})}>
                        {/*<div onClick={this.showModal}>*/}
                        <img src={basket} alt="Basket"/>
                        {/*</div>*/}
                    </div>
                </div>

                {
                    (modal)
                        //@ts-ignore
                        ? <DropDownList products={this.props.products} func={this.output}/>
                        : ''
                }
            </div>
        );
    }
}

export default DropdownComponent;
