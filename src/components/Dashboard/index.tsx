"use client";

import { FloatButton } from "antd";
import { AiOutlineUp } from "react-icons/ai";
import Contact from "../Common/Contact/Contact";
import Banner from "./Banner";
import ShopCategory from "./ShopCategory";
import ProductFeatureCard from "./ProductFeatureCard";
import FeaturedProductBanner from "./FeaturedProductBanner";
import CategoryProduct from "./CategoryProduct";
import LatestNews from "./LatestNews";
import FeaturedProducts from "../Common/FeaturedProducts";

function Dashboard() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Banner />
        <ShopCategory />
        <FeaturedProducts />
        <ProductFeatureCard />
        <FeaturedProductBanner />
        <CategoryProduct />
        <LatestNews />
        <Contact />
        <FloatButton.BackTop icon={<AiOutlineUp />} />
      </div>
    </>
  );
}

export default Dashboard;
