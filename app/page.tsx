import Header from "@/components/Headers";
import Hero from "@/components/Hero";
import Lab1 from "@/components/Lab1";
import { ProductData } from "@/typings";
import React from "react";
import { fetchProduct } from "@/utils/fetchProduct";

const Home = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20">
      <Header/>
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="lab1" className="snap-center">
        <Lab1 />
      </section>
    </div>
  );
};
export default Home;


const getProduct = async () => {
  const productData: ProductData[] = await fetchProduct();
  if (!productData) {
    throw new Error("Failed to fetch data");
  }
  return productData;
}
