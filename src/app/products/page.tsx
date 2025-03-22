"use client";

import Products from "@/components/Products";
import FilterProduct from "@/components/Products/Filter/FilterProduct";
import { Col} from "antd";

const PageProducts = () => {
  return (
    <Col className="flex p-4">
      <FilterProduct />
      <Products />
    </Col>
  );
};

export default PageProducts;
