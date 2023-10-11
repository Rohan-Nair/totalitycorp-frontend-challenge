import React from "react";
import Layout from "../../components/layout/Layout";
import HomeDisplay from "./components/HomeDisplay";
import ImageSlider from "./components/ImageSlider";
import Filter from "./components/FilterComponent";

const Home = () => {
  const slides = [
    {
      url: "../../../assets/images/banner1.jpg",
      title: "Sale1",
    },
    {
      url: "../../../assets/images/banner3.jpg",
      title: "Sale3",
    },
    {
      url: "../../../assets/images/banner4.jpg",
      title: "Sale4",
    },
    {
      url: "../../../assets/images/banner5.jpg",
      title: "Sale5",
    },
  ];
  return (
    <Layout>
      <div className="flex justify-center w-screen h-[200px] md:h-[300px] mt-2">
        <ImageSlider slides={slides} />
      </div>
      <HomeDisplay />
    </Layout>
  );
};

export default Home;
