import React from 'react';
import "./Product.scss"

const Product = ({state,VProduct}) => {
    return (
        <div ref={VProduct} className={`product ${state===6?"open" : "close"}`}>
            <h1>product page</h1>
        </div>
    );
}

export default Product;
