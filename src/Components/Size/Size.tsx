import React, { Component } from 'react';
import './Size.scss';
import { chooseProductAttribute } from "../../redux/actions/actions";
import { connect } from "react-redux";
import store from "../../redux/store";



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

class Size extends Component<AppProps, AppState> {

        // @ts-ignore
    state = {
            value: '',
    toggleColor: false
    };

//     shouldComponentUpdate(nextProps: any, prevProps:any) {
// console.log(nextProps, prevProps)
//         debugger
//         if(nextProps.size !== prevProps.value) {
//             this.setState({
//                 value: nextProps.size,
//                 // toggleColor: true
//             });
//
//         }
//
//         return true
//     }

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
        // @ts-ignore
        // const unsubscribe = store.subscribe(this.chooseSize)
        // unsubscribe()

        // store.subscribe(() => {
        //
        //     // this.setState({
        //     //     value: e.target.textContent,
        //     //     // toggleColor: true
        //     // });
        //     console.log('Store change', store.getState())
        // })
        let size = this.props.product.items.map((item: { id: string; value: string }) => (
            // debugger
            // return <li onClick={this.chooseSize.bind(this)} key={item.id}
            <li onClick={(e) => {


                this.props.chooseProductAttribute(item)
                // e.preventDefault();
                debugger


                // @ts-ignore   (event.target).textContent
                this.chooseSize(e)
                debugger
            }} key={item.id}
                // className={this.props.sizeProduct.id === }
            >{item.value}</li>
        ));

        return (
            <>

                <div className="size-product">
                    <span className="size-product-title">{this.props.product.name}:</span>
                    <ul className="size-product-collection">
                        {/*{size}*/}
                        {this.props.product.items.map((item: { id: string; value: string }) => (
                            // debugger
                            // return <li onClick={this.chooseSize.bind(this)} key={item.id}
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
export default connect(mapStateToProps, mapDispatchToProps())(Size);
