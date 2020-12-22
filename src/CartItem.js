import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'phone',
            qty : 1,
            img: ''
        }
        this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity =() =>{
        console.log('this.state', this.state);
    }
    render () {
        const { price,title,qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>

                <div className="right-block">
                    <div style={{ fontSize: 25}}>{title}</div>
                    <div style={{ color: '#777'}}>{price}</div>
                    <div style={{ color: '#777'}}>{qty}</div>
                    <div className="cart-item-actions">
                        {/* Button */}
                        <img 
                        alt="increase"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/static/icons/svg/148/148764.svg"
                        onClick={this.increaseQuantity.bind(this)}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons"
                         src="https://www.flaticon.com/svg/static/icons/svg/992/992514.svg" 
                         />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/1828/1828843.svg" 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;