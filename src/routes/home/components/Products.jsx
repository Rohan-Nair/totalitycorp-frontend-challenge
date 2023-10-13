import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../context/AppContextProvider";
import ProductCard from "./ProductCard";
import { Spinner } from "@geist-ui/core";

const Products = () => {
  const { allProds, getAllProds, loading, search } = useContext(AppContext);
  useEffect(() => {
    getAllProds("");
  }, []);
  return (
    <section className="text-black  ">
      <div className="container py-8 md:py-16 mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {loading ? (
            <div>
              <Spinner />
            </div>
          ) : allProds.length === 0 ? (
            <div>
              <p>No Items added yet</p>
            </div>
          ) : (
            <>
              {allProds
                .filter((aProd) => {
                  return search.toLowerCase() === ""
                    ? aProd
                    : aProd.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((eachprod) => (
                  <ProductCard
                    key={eachprod.id}
                    id={eachprod.id}
                    imgSrc={eachprod.imgSource}
                    pName={eachprod.name}
                    pDesc={eachprod.desc}
                    pPrice={eachprod.price}
                    pRating={eachprod.rating}
                    pSeller={eachprod.pSeller}
                  />
                ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
