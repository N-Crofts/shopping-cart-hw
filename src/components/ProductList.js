import React, { Component } from 'react'
import Product from './Product'

class ProductList extends Component {


    render() {
        const productList = this.props.productList.map((product, i) => {
            return (
                <Product
                    key={i}
                    indexFromPriductList={i}
                    product={product}
                    deleteProduct={this.props.deleteProduct} />
        )
    })
            return (
                <div>
                    {productList}
                </div>
            )
    }
}

export default ProductList
