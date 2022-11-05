import React, { Component } from 'react';
import AllProductsItem from "./AllProductsItem";
import { productCard } from "../../redux/actions/actions";
//import data from "../../jsonpictures/data.json";
import { connect } from "react-redux";


interface Props {
    // products: object

}

class AllProductsList extends Component<Props> {
    render() {

        return (
            <>
                {/*@ts-ignore*/}

                <AllProductsItem />

            {/* products={this.props.products}   */}
            </>
        );
    }
}
const mapStateToProps = () => {
    return {
        // products: data.category.products
    }
}
// const mapDispatchToProps = () => {
//     return {
//         showProduct
//     }
// }

export default connect(mapStateToProps)(AllProductsList);
