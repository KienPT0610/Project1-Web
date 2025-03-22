"use client";

import { Button, Drawer, Image, message } from "antd";
import { useState } from "react";
import { TProductData } from "@/types/product.types";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { add } from "@/store/slices/cartSlice";

interface IProps {
  open: boolean;
  onClose: () => void;
  product: TProductData | undefined;
}

function DrawerPopup(props: IProps) {
  const { open, onClose, product } = props;
  const dispatch = useAppDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const [count, setCount] = useState<number>(1);
  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Add to cart successfully",
      style: {
        marginTop: "30px",
      },
    });
  };
  const onAddToCart = () => {
    if (product) {
      let total = product.price;
      if (product.off) {
        total = total - (total * product.off) / 100;
      }
      const payload = {
        ...product,
        quantity: count,
        total: total * count,
      };
      dispatch(add(payload));
    }
    success();
    onClose();
    setCount(1);
  };
  return (
    <>
      {contextHolder}
      {product && (
        <>
          <Drawer
            title="Add to Cart"
            placement={'right'}
            onClose={() => {
              onClose();
              setCount(1);
            }}
            open={open}
          >
            <div className="flex flex-col justify-between h-full gap-3">
              <div>
                <div>
                  <div className="flex justify-center">
                    <Image
                      src={product.image}
                      alt="img"
                      className="w-3/4 h-auto object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-2 mt-8">
                    <span className="font-bold text-xl">{product?.name}</span>
                    {!product?.off && (
                      <span className="font-bold text-lg text-blue-500">
                        ${product.price.toLocaleString("en-US")}
                      </span>
                    )}
                    {product?.off && (
                      <div className="flex gap-2">
                        <span className="font-bold text-blue-500">
                          $
                          {(
                            product.price -
                            (product.off * product.price) / 100
                          ).toLocaleString("en-US")}
                        </span>
                        <span className="font-bold text-gray-500 line-through">
                          ${product.price.toLocaleString("en-US")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 mt-2 alignItems-center">
                    <span className="font-bold text-lg mr-2">Quantity</span>
                    <div className="flex items-center border border-gray-300 rounded-md w-28 justify-between px-2 py-1">
                      <button
                        className="text-lg font-bold text-gray-600 hover:text-gray-800"
                        onClick={handleDecrement}
                      >
                        −
                      </button>
                      <input
                        className="text-center w-10 bg-transparent outline-none font-medium"
                        type="text"
                        value={count.toString().padStart(2, "0")}
                        readOnly
                      />
                      <button
                        className="text-lg font-bold text-gray-600 hover:text-gray-800"
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div>
                  <Button
                    className="w-full bg-orange-500 text-white font-[600] text-md"
                    size="large"
                    onClick={onAddToCart}
                    style={{
                      width: "95%",
                      padding: "24px",
                      display: "flex",
                      justifyContent: "space-between",
                      backgroundColor: "rgb(178 34 38)",
                    }}
                  >
                    <span>ADD TO CART</span>
                    <div className="flex flex-col">
                  {!product.off && (
                    <span className="font-bold text-xl text-white-500">
                      ${(product.price * count).toLocaleString("en-US")}
                    </span>
                  )}
                  {product.off && (
                    <span className="font-bold text-xl text-blue-500">
                      $
                      {(
                        (product.price - (product.off * product.price) / 100) *
                        count
                      ).toLocaleString("en-US")}
                    </span>
                  )}
                </div>
                  </Button>
                </div>
              </div>  
            </div>
          </Drawer>
        </>
      )}
    </>
  );
}

export default DrawerPopup;
