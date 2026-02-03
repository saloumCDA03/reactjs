import React from "react";

function ProductList({ products }) {
    return (
        <div>
            <h1>Liste de produits</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id} >
                        <h2>{product.name} </h2>
                        <img src={product.image} alt={product.name} />
                        <p>Prix : {product.price} €</p>

                    </li>
                ))}
            </ul>
        </div>);
}

export default ProductList;
