import React, { Component } from 'react';
import { chooseProductAttribute } from "../../redux/actions/actions";
import { connect } from "react-redux";

// interface Props {
//     product: { name: string, id: string, items: any, type: string, value: string }
// }

interface AppProps {
    product: { name: string, id: string, items: any, type: string, value: string, chooseProductAttribute: any },
    chooseProductAttribute: any,
    sizeProduct: any, selectSizeCallback: any, textContent: any,
    size: any
}

interface AppState {
    toggleColor: any,
    state: any,
    value: any,
    // id: string,
}

class Capacity extends Component<AppProps, AppState> {
    // @ts-ignore
    state = {
        value: '',
        toggleColor: false
    };
    chooseSize = (e: any) => {
        // let currentValue = store.getState()
        debugger
// size.map((item: any) => {
        // console.log(e.timeStamp.id)
        // console.log(e.currentTarget.value)
        // console.log(e.target.textContent)
        // let size = currentValue.chooseProductAttribute.sizeProduct

        // })


    };
    render() {
        let capacity = this.props.product.items.map((item: any) => {
            return <li>{item.value}</li>
        });

        return (
            <>
                <div className="capacity-product">
                    <span className="capacity-product-title">{this.props.product.name}:</span>
                    <ul className="capacity-product-collection">
                        {/*{capacity}*/}
                        {this.props.product.items.map((item: any) => (
                            <li onClick={(e) => {
                                // @ts-ignore

                                debugger
                                // this.props.chooseProductAttribute(item)
                                // e.preventDefault();

                                // this.chooseSize(e)

                                // @ts-ignore
                                //this.props.selectSizeCallback(e.target.textContent)
                                // console.log(this.props)
                                console.log(item.value)
                                // @ts-ignore
                                this.props.selectSizeCallback(e)//e.target.textContent

                                e.preventDefault();
                                this.chooseSize(e)

                                debugger
                            }} key={item.id}
                                // className={this.props.sizeProduct.id === }

                            >{item.value}</li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}

const mapStateToProps = (data: any) => {
    debugger
    return {

        product: data.reducer.product.attributes[1],
        sizeProduct: data.chooseProductAttribute.sizeProduct
    }
}


const mapDispatchToProps = () => {
    debugger
    return {
        // incrementCount,
        // decrementCount,
        chooseProductAttribute
    }

}

export default connect(mapStateToProps,mapDispatchToProps())(Capacity);
