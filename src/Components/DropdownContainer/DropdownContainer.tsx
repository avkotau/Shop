import React, { Component } from 'react';
// @ts-ignore
import DropDownList from './DropDownList';
// @ts-ignore
import basket from '../../img/Empty Cart.png';
// @ts-ignore
import vector from '../../img/vectorUp.png';
import './DropDownContainer.scss';

interface Props {
    products: object,

}

class DropdownComponent extends Component<Props> {
    state = {
        show: false
    }

    render() {
        const {show} = this.state;

        // @ts-ignore
        return (
            <div className="dropdown-container">
                <div className="basket-vector">
                    <div className="vector">
                        $
                        <img src={vector} alt="Vector"/>
                    </div>
                    <div className="basket" onClick={() => this.setState({show: !show})}>
                        <img src={basket} alt="Basket"/>
                    </div>
                </div>

                {/*<input type="text">input</input>*/}
                {
                    (show)
                        //@ts-ignore
                        ? <DropDownList products={this.props.products} />
                        : ''
                }
            </div>
        );
    }
}

export default DropdownComponent;
