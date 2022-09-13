import React from "react";

const Product = ({ product }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={product.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>$ {product.price}</p>
        <div className="card-actions justify-end">
          <button className="">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
