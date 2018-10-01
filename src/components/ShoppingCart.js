import React, { Component } from 'react'
import CartItem from './CartItem'

class ShoppingCart extends Component {

    render() {
        const cartListShow = this.props.cartList.map((item) => {
            return (
                <CartItem 
                    key={this}
                    index={this}
                    product={item} />
            )
        })
        return cartListShow
    }
}

export default ShoppingCart