import React, { Component } from 'react';
import { chooseProductAttribute } from "../../redux/actions/actions";
import { connect } from "react-redux";

// interface Props {
//     product: { name: string, id: string, items: any, type: string, value: string }
// }

interface AppProps {
    product: { name: string, id: string, items: any, type: string, value: string, chooseProductAttribute: any },
    chooseProductAttribute: any,
    sizeProduct: any,
    selectSizeCallback: any,
    textContent: any,
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
        // let capacity = this.props.product.items.map((item: any) => {
        //     return <li>{item.value}</li>
        // });
debugger
        return (
            <>
                <div className="capacity-product">
                    <span className="capacity-product-title">{this.props.product.name}:</span>
                    <ul className="capacity-product-collection">
                        {/*@ts-ignore*/}

                        {this.props.product.items.map((i: any) => (

                        <div>
                            <li  onClick={(e) => {
                                // @ts-ignore
                                this.props.selectSizeCallback(e)//e.target.textContent
                                e.preventDefault();
                                this.chooseSize(e)
                                debugger
                            }}>{i.value}</li>

                        {/*<div>*/}
                        {/*{i.items.map((item: any) => (*/}
                        {/*<div>*/}
                        {/*    <input name="milkman" type="checkbox" onClick={(e) => {*/}
                        {/*        // @ts-ignore*/}
                        {/*        this.props.selectSizeCallback(e)//e.target.textContent*/}
                        {/*        e.preventDefault();*/}
                        {/*        this.chooseSize(e)*/}
                        {/*        debugger*/}
                        {/*    }}/>{item.value}*/}
                        {/*</div>*/}
                        {/*)*/}
                        {/*)}*/}
                        {/*</div>*/}
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps())(Capacity);
