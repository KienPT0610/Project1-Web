'use client';

import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { orderSchema } from "@/utils/validators";
import { yupResolver } from "@hookform/resolvers/yup";
import TextArea from "antd/es/input/TextArea";
import { getDate } from "@/utils/getDate";
import { OrderStatus } from "@/types/enum.types";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Image from "next/image";
import laptop from '@/assets/images/laptop.png';
import { Omit } from "lodash";
import { Dispatch, SetStateAction, useEffect } from "react";
import { TOrderProduct } from "@/types/product.types";

interface IForm {
  name: string;
  address: string;
  phone: string;
  country: string;
  city: string;
  status: string;
  note?: string;
  order_date: string;
}

type FormSubmit = Omit<IForm, 'order_date'>;

const optionsCountry = [
  {
    value: "Việt Nam",
    label: "Việt Nam"
  },
];

const optionsCity = [
  {
    value: "Hà Nội",
    label: "Hà Nội"
  },
  {
    value: "Hồ Chí Minh",
    label: "Hồ Chí Minh"
  },
  {
    value: "Đà Nẵng",
    label: "Đà Nẵng"
  },
  {
    value: "Hải Phòng",
    label: "Hải Phòng"
  },
  {
    value: "Cần Thơ",
    label: "Cần Thơ"
  },
]

interface IProps {
  next: () => void;
  setForm: Dispatch<SetStateAction<TOrderProduct | undefined>>
  form: TOrderProduct | undefined,
  setTotal: Dispatch<SetStateAction<number>>
}

function CheckOutForm(props: IProps) {
  const { next, setForm, form, setTotal } = props;
  const cart = useSelector((state: RootState) => state.cart.cart);
  const disabled = cart.length == 0;
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormSubmit>({
    resolver: yupResolver(orderSchema),
    defaultValues: {
      name: form?.name || "",
      address: form?.address || "",
      phone: form?.phone || "",
      country: form?.country || "",
      city: form?.city || "",
      status: OrderStatus.Pending,
      note: form?.note || "",
    },
  });
  const OrderSubmit: SubmitHandler<FormSubmit> = (formData: FormSubmit) => {
    const order = {
      ...formData,
      order_date: getDate(),
      order: cart,
    }
    setForm(order);
    next();
  };

  const total = cart.reduce((acc, item) => acc + item.total, 0)

  useEffect(() => {
    setTotal(total);
  }, [total, setTotal]);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="my-8 rounded-md">
        <Form onFinish={handleSubmit(OrderSubmit)} layout="vertical">
          <Row gutter={16}>
            <Col xl={16}>
              <div className="border-2 border-gray-300 rounded-md p-4">
                <Form.Item
                  label="Name"
                  required
                  validateStatus={errors.name ? "error" : ""}
                  help={errors.name?.message}
                >
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input {...field} defaultValue={form?.name} disabled={disabled} />}
                  />
                </Form.Item>
                <Form.Item
                  label="Address"
                  required
                  validateStatus={errors.address ? "error" : ""}
                  help={errors.address?.message}
                >
                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => <Input {...field} defaultValue={form?.address} disabled={disabled} />}
                  />
                </Form.Item>
                <Form.Item
                  label="Phone"
                  required
                  validateStatus={errors.phone ? "error" : ""}
                  help={errors.phone?.message}
                >
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => <Input {...field} defaultValue={form?.phone} disabled={disabled} />}
                  />
                </Form.Item>
                <Row gutter={16}>
                  <Col xl={12}>
                    <Form.Item
                      label="Country"
                      required
                      validateStatus={errors.country ? "error" : ""}
                      help={errors.country?.message}
                    >
                      <Controller
                        name="country"
                        control={control}
                        render={({ field }) => (
                          <Select
                            {...field}
                            onChange={(value) => setValue("country", value)}
                            options={optionsCountry}
                            placeholder="Select..."
                            defaultValue={form?.country}
                            disabled={disabled}
                          />
                        )}
                      />
                    </Form.Item>
                  </Col>
                  <Col xl={12}>
                    <Form.Item
                      label="City"
                      required
                      validateStatus={errors.city ? "error" : ""}
                      help={errors.city?.message}
                    >
                      <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                          <Select
                            {...field}
                            onChange={(value) => setValue("city", value)}
                            options={optionsCity}
                            placeholder="Select..."
                            defaultValue={form?.city}
                            disabled={disabled}
                          />
                        )}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Additional Information">
                  <Controller
                    name="note"
                    control={control}
                    render={({ field }) => (
                      <TextArea
                        {...field}
                        rows={5}
                        placeholder="Notes about your order, e.g. special notes for delivery"
                        defaultValue={form?.note}
                        disabled={disabled}
                      />
                    )}
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
                        <span className="text-blue-500 font-[600]">${total.toLocaleString('en-US')}</span>
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
                    <span className="text-blue-500 font-[600]">${total.toLocaleString('en-US')}</span>
                  </div>
                  <Button
                    htmlType="submit"
                    className="w-full bg-orange-500 text-white font-[600] text-md uppercase rounded-none"
                    icon={<FaArrowRight />}
                    iconPosition="end"
                    size="large"
                    disabled={cart.length == 0}
                  >
                    Next
                  </Button>
                </Card>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default CheckOutForm;
