"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { fetchProductsById } from "@/services/product.service";
import { add } from "@/store/slices/cartSlice";
import { FAILED } from "@/types/status.enum";
import { UNIT } from "@/types/unit";
import { CircularProgress } from "@nextui-org/progress";
import { Button, Image, InputNumber, Space } from "antd";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

const ProductId = () => {
  const { productId } = useParams();

  const { selectProduct, status } = useAppSelector((state) => state.products);
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductsById(Number(productId)));
    }
  }, [dispatch, productId]);
  console.log(selectProduct);
  if (selectProduct === null || selectProduct.image === undefined) {
    return (
      <div className="flex items-center justify-center w-full h-[400px] bg-white">
        <CircularProgress color="primary" label="Loading..." />
      </div>
    );
  }

  if (status === FAILED) {
    return (
      <div className="flex items-center justify-center w-full h-[400px] bg-white">
        Product not found
      </div>
    );
  }

  return (
    <div className="flex p-10 gap-4">
      <div className="relative">
        {selectProduct.image ? (
          <Image
            src={selectProduct.image}
            alt={String(selectProduct.id)}
            width={500}
            height={400}
          />
        ) : (
          <h2>No main image available</h2>
        )}
        {/* <div className='flex flex-col gap-4 ml-4'>
                    {selectProduct.images?.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`${selectProduct.id}-${index}`}
                            width={100}
                            height={100}
                            // preview={false} 
                        />
                    )) || <p>No additional images available</p>}
                </div> */}
        {selectProduct.sale && (
          <div className="absolute top-3 left-4 bg-green-500 text-white px-2 py-1 rounded-[3px]">
            SALE
          </div>
        )}
        {selectProduct.hot && (
          <div className="absolute top-3 left-4 bg-red-500 text-white px-2 py-1 rounded-[3px]">
            HOT
          </div>
        )}
        {selectProduct.best_seller && (
          <div className="absolute top-3 left-4 bg-blue-500 text-white px-2 py-1 rounded-[3px]">
            BEST SELLER
          </div>
        )}
        {selectProduct.off !== 0 && (
          <div className="absolute top-3 left-4 bg-yellow-400 text-black px-2 py-1 rounded-[3px]">
            {selectProduct.off}% OFF
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl">{selectProduct.name}</h1>
        <p className='text-gray-500' >{selectProduct.description}</p>
        {/* <h2 className='font-semibold text-sm'>- Category: {selectProduct.category?.name}</h2> */}
        {/* <h2 className='font-semibold text-sm'>- Creation at: {selectProduct.creationAt}</h2> */}
        {/* <h2 className='font-semibold text-sm'>- Update at: {selectProduct.updatedAt}</h2> */}
        <Space size="middle">
          {selectProduct.off === 0 && (
            <div>
              <span className="font-bold text-2xl text-red-500">
                {UNIT}
                {selectProduct.price.toLocaleString("en-US")}
              </span>
            </div>
          )}
          {selectProduct.off !== 0 && (
            <div>
              <span className="font-bold text-gray-500 line-through mr-2">
                {UNIT}
                {selectProduct.price.toLocaleString("en-US")}
              </span>
              <span className="font-bold text-2xl text-red-500">
                {UNIT}
                {(
                  selectProduct.price -
                  ((selectProduct.off ?? 0) * selectProduct.price) / 100
                ).toLocaleString("en-US")}
              </span>
            </div>
          )}
        </Space>
        <InputNumber
          min={1}
          max={10}
          value={quantity}
          onChange={(value) => setQuantity(value ?? 1)}
        />
        <Button
          type="primary"
          onClick={() =>
            dispatch(
              add({
                ...selectProduct,
                quantity,
                total:
                  selectProduct.price * quantity -
                  (((selectProduct.off ?? 0) * selectProduct.price) / 100) *
                    quantity,
              })
            )
          }
        >
          Add to cart <CiShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ProductId;
