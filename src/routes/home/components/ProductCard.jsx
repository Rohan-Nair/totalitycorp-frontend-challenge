import React, { useContext } from "react";
import { Card } from "@geist-ui/core";
import { Star } from "@geist-ui/icons";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  imgSrc,
  pName,
  pRating,
  pDesc,
  pSeller,
  pPrice,
}) => {
  const navigate = useNavigate();
  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <Card
      onClick={() => viewProduct(id)}
      className="font-mont cursor-pointer"
      width="340px"
    >
      <img
        className="rounded-t-md w-full h-72 object-scale-down object-center border-b border-b-black pb-1"
        src={imgSrc}
        draggable={false}
      />
      <div className="mt-4 flex justify-between">
        <h4>{pName}</h4>
        <h5 className="flex gap-1 items-center text-white">
          <Star size={16} />
          {pRating}
        </h5>
      </div>
      <small className="text-black font-bold font-mont">{pDesc}</small>
      <p className="mt-1">{pSeller}</p>
      <Card.Footer className="flex justify-between">
        <p className="text-2xl font-mont text-accent font-extrabold">
          ₹{pPrice}
        </p>
        <button
          onClick={() => viewProduct(id)}
          className="font-mont border-black border rounded-md px-3 py-1 text-xl"
        >
          View product
        </button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
