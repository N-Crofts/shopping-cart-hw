import React, { Component } from 'react'


class Product extends Component {
    deleteProduct = (event) => {
        this.props.deleteProduct(this.props.index)
    }
    render() {
        const { productName, description, price } = this.props.product
            return (
            <div>
                <h3>{productName}</h3>
                <div>{description}</div>
                <div>{price}</div>
                <input type="submit" value={`Delete ${productName}`} onClick={this.deleteProduct} />
            </div>
            
        )
    }
}

export default Product