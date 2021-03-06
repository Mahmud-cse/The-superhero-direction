import React from 'react';

const Cart = (props) => {
    // destructuring 
    const {cart}=props;
    let totalQuantity=0;
    let totalPrice=0;
    let addedCat='';

    // data calculation
    for(const product of cart){
        if(!product.quantity){
            product.quantity=1;
        }
        totalQuantity+=product.quantity;
        totalPrice+=product.quantity*product.price;
        addedCat+=product.name+",\n";
    }

    return (
        // cart value set
        <div>
            <h3>Total Items: {totalQuantity}</h3>
            <h3>Total Price: {totalPrice}</h3>
            <h6>Names:</h6>
            <p>{addedCat}</p>
        </div>
    );
};

export default Cart;