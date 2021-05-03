import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state= {
            price:69,
            title:'Aman',
            qty:1,
            img: ''
        }
    }
    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ { fontSize:25 } }>{title}</div>
                    <div style={ { color:'#777' } }>Price {price}/-</div>
                    <div style={ { color:'#777' } }>Qty: {qty}</div>
                </div>
                <div className="cart-item-actions">
                    {/* buttons */}
                    <img alt="" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1620035559~hmac=6622748c49cfcda2f77a009349101636"></img>
                    <img alt="" className="action-icons" src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740679.svg"></img>
                    <img alt="" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1620035697~hmac=ec352c6b531697264a71e9cef26f7e2e"></img>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 5,
        backgroundColor: '#cccc'
    }
}

export default CartItem;