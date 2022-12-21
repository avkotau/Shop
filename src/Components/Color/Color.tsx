import React, { Component } from 'react';
import './Color.scss';
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

class Color extends Component<AppProps, AppState> {
    // @ts-ignore
    state = {
        color: '',
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

        let color = this.props.product.items.map((item: { value: any; } ) => {
            return <li style={{background: item.value}}/>
        });

        return (
            <>
                <div className="color-product">
                    <span className="color-product-title">{this.props.product.name}:</span>
                    <ul className="color-product-collection">
                        {/*@ts-ignore*/}
                        {/*{color}*/}
                        {this.props.product.items.map((item: { value: any; id: string} ) => (
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
                            }}
                                // className={this.props.sizeProduct.id === }

                                style={{background: item.value}} id={item.id}/>
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
        product: data.reducer.product.attributes[0],
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
export default connect(mapStateToProps, mapDispatchToProps()) (Color);
