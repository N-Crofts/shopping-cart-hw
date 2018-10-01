import React, { Component } from 'react'
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart'

class ShopView extends Component {
    render() {
        return (
            <div>
                <h1>
                    Shop View
                </h1>
                <h2></h2>
                <ProductList 
                    adminView = {false}
                    productList = {this.props.productList}
                    addItemToCart = {this.props.addItemToCart}
                    cartList = {this.props.cartList}/>
                <ShoppingCart 
                    cartList = {this.props.cartList}/>
            </div>
        )   
    }
}

export default ShopView