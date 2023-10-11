import React from "react";
import { Card } from "@geist-ui/core";
import { Star } from "@geist-ui/icons";

const ProductCard = ({ imgSrc, pName, pRating, pDesc, pSeller, pPrice }) => {
  return (
    <Card className="font-mont" type="dark" width="340px">
      <img className="rounded-md" src={imgSrc} draggable={false} />
      <div className="mt-4 flex justify-between">
        <h4>{pName}</h4>
        <h5 className="flex gap-1 items-center text-white">
          <Star size={16} />
          {pRating}
        </h5>
      </div>
      <small className="text-secondary">{pDesc}</small>
      <p className="mt-1">{pSeller}</p>
      <Card.Footer className="flex justify-between">
        <p className="text-2xl font-sans">{pPrice}</p>
        <button className="font-sans border-white border rounded-md px-3 py-1 text-xl">
          Add to Cart
        </button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
