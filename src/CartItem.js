import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 69,
      title: "Aman",
      qty: 1,
      img: "",
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // = () => is the arrow function that is the alternative to using bind everytime to bind a function
  }

  decreaseQuantity = () => {
    this.setState({
      qty: this.state.qty - 1
    })
    
    // OR
    // this.setState((prevState) => {
    //     return{
    //       qty: prevState.qty-1
    //     }
    //   })
  }

  increaseQuantity = () => {
    // this.state.qty+=1;
    //setState form 1 - by giving it an object
    
    //form 1
    
    this.setState({
    qty: this.state.qty + 1
    }) 

    // form 2 - by passing an object in the setState function
    // This should be used when the previous state of the function in required
    // this.setState((prevState) => {
    //   return{
    //     qty: prevState.qty+1
    //   }
    // })
    console.log('this.state', this.state);
  }

  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Price {price}/-</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
        </div>
        <div className="cart-item-actions">
          {/* buttons */}
          <img
            alt=""
            className="action-icons"
            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1620035559~hmac=6622748c49cfcda2f77a009349101636"
            onClick={this.increaseQuantity}
          ></img>
          <img
            alt=""
            className="action-icons"
            src="https://www.flaticon.com/svg/vstatic/svg/1665/1665612.svg?token=exp=1620038587~hmac=b91fdd597ddd07efdb53da4c25c57d9b"
            onClick={this.decreaseQuantity}          
          ></img>
          <img
            alt=""
            className="action-icons"
            src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1620035697~hmac=ec352c6b531697264a71e9cef26f7e2e"
          ></img>
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
    backgroundColor: "#cccc",
  },
};

export default CartItem;