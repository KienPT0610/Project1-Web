'use client';

import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Image from "next/image";
import laptop from '@/assets/images/laptop.png';
import { TOrderProduct } from "@/types/product.types";

interface IProps {
  next: () => void;
  prev: () => void;
  form: TOrderProduct | undefined
}

function PreviewFormOrder(props: IProps) {
  const { next, form, prev } = props;
  const cart = useSelector((state: RootState) => state.cart.cart);

  const handleOrder = () => {
    if (form) {
      next();
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="my-8 rounded-md">
        <Form onFinish={handleOrder} layout="vertical">
          <Row gutter={16}>
            <Col xl={16}>
              <div className="border-2 border-gray-300 rounded-md p-4">
                <Form.Item
                  label="Name"
                  required
                >
                  <Input value={form?.name} disabled />
                </Form.Item>
                <Form.Item
                  label="Address"
                  required
                >
                  <Input disabled value={form?.address} />
                </Form.Item>
                <Form.Item
                  label="Phone"
                  required
                >
                  <Input disabled value={form?.phone} />
                </Form.Item>
                <Row gutter={16}>
                  <Col xl={12}>
                    <Form.Item
                      label="Country"
                      required
                    >
                      <Select
                        disabled
                        value={form?.country}
                      />
                    </Form.Item>
                  </Col>
                  <Col xl={12}>
                    <Form.Item
                      label="City"
                      required
                    >
                      <Select
                        disabled
                        value={form?.city}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Additional Information">
                  <TextArea
                    rows={5}
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    disabled
                    value={form?.note}
                  />
                </Form.Item>
              </div>
            </Col>
            <Col xl={8}>
              <div className="border-2 border-gray-300 rounded-md p-4">
                <Card title="Order Summary">
                  <div className="flex flex-col gap-4">
                    {cart.map((product) => {
                      return (
                        <div key={product.id} className="flex gap-4 flex-col">
                          <div className="flex items-center gap-4">
                            <Image
                              src={laptop}
                              alt={product.name}
                              width={64}
                              height={64}
                              className="object-contain"
                            />
                            <div>
                              <span className="line-clamp-2">{product.name}</span>
                              <div>
                                <span className="text-gray-400">{product.quantity} x </span>
                                {!product.off && <span className="font-bold text-blue-500">${product.price.toLocaleString('en-US')}</span>}
                                {product.off && <>
                                  <span className="font-bold text-blue-500">${(product.price - product.off * product.price / 100).toLocaleString('en-US')}</span>
                                  <span className="font-bold text-gray-500 line-through ml-2">${product.price.toLocaleString('en-US')}</span>
                                </>}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                    <div className="border-b border-gray-300 py-2 flex flex-col gap-2">
                      <div className="flex justify-between">
                        <span className="font-[600] text-md">Sub-total</span>
                        <span className="text-blue-500 font-[600]">${cart.reduce((acc, item) => acc + item.total, 0).toLocaleString('en-US')}</span>
                      </div>
                      <div className="flex justify-between ">
                        <span className="font-[600] text-md">Shipping</span>
                        <span className="text-blue-500 font-[600]">Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-[600] text-md">Discount</span>
                        <span className="text-blue-500 font-[600]">$0</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-bold text-md">Total</span>
                    <span className="text-blue-500 font-[600]">${cart.reduce((acc, item) => acc + item.total, 0).toLocaleString('en-US')}</span>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <Button
                      htmlType="button"
                      className="w-full bg-gray-300 text-white font-[600] text-md uppercase rounded-none"
                      onClick={prev}
                      size="large"
                    >
                      Back
                    </Button>
                    <Button
                      htmlType="submit"
                      className="w-full bg-orange-500 text-white font-[600] text-md uppercase rounded-none"
                      icon={<FaArrowRight />}
                      iconPosition="end"
                      size="large"
                    >
                      Next
                    </Button>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default PreviewFormOrder;
