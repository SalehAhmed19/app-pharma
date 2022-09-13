import React from "react";
import Product from "./Product";

const FeaturedProduct = () => {
  const product = [
    {
      id: 1,
      img: "https://i.ibb.co/TvTq9HY/dropper-42.jpg",
      name: "Cefotil 250mg",
      price: 10,
    },
    {
      id: 2,
      img: "https://i.ibb.co/TvTq9HY/dropper-42.jpg",
      name: "Cefotil 250mg",
      price: 10,
    },
    {
      id: 3,
      img: "https://i.ibb.co/TvTq9HY/dropper-42.jpg",
      name: "Cefotil 250mg",
      price: 10,
    },
    {
      id: 4,
      img: "https://i.ibb.co/TvTq9HY/dropper-42.jpg",
      name: "Cefotil 250mg",
      price: 10,
    },
  ];
  return (
    <div>
      <h2 className="pt-10 pb-5 text-center text-3xl font-bold text-blue-900">
        Featured Products
      </h2>
      <div className="w-32 bg-red-500 h-2 mx-auto mb-10 rounded-xl"></div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-5 lg:mx-20">
        {product.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
