import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../context/AppContextProvider";
import ProductCard from "./ProductCard";

const Products = () => {
  const { allProds, getAllProds } = useContext(AppContext);
  useEffect(() => {
    getAllProds();
  }, []);
  return (
    <section className="text-black  ">
      <div className="container py-8 md:py-16 mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {allProds.map((eachprod) => (
            <ProductCard
              imgSrc={eachprod.imgSource}
              pName={eachprod.name}
              pDesc={eachprod.desc}
              pPrice={eachprod.price}
              pRating={eachprod.rating}
              pSeller={eachprod.pSeller}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
