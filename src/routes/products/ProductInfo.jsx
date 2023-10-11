import React from "react";
import Layout from "../../components/layout/Layout";
import { Star } from "@geist-ui/icons";

function ProductInfo() {
  return (
    <Layout>
      <div className="flex justify-center">
        <section className="text-white bg-black font-mont overflow-hidden border border-black rounded-md mt-5 mx-4 max-w-7xl">
          <div className="px-5 py-10 mx-auto">
            <div className="mx-auto flex items-center">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full h-96 object-cover object-center rounded"
                src="https://dummyimage.com/400x700"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-2 lg:mt-0">
                <div className="flex items-center justify-between border-b">
                  <h1 className="text-white text-3xl font-bold mb-0">Name</h1>
                  <p className="flex text-3xl font-bold items-center">
                    <Star />
                    4.4
                  </p>
                </div>
                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric. Gastropub blue bottle austin
                  listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>

                <div className="flex">
                  <span className="title-font font-bold text-2xl text-accent">
                    $58.00
                  </span>
                  <button className="ml-auto font-sans border-white border rounded-md px-3 py-1 text-xl">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ProductInfo;
