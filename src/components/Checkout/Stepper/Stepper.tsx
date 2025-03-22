'use client'

import React, { ReactNode, useState } from "react";
import { StepProps, Steps, } from "antd";
import CheckOut from "@/components/Checkout";
import { TOrderProduct } from "@/types/product.types";
import PreviewFormOrder from "@/components/Checkout/PreviewFormOrder";
import Success from "@/components/Checkout/Success";
import StripeCheckOut from "@/components/Checkout/Stripe";

type TSteps = StepProps & {
  content?: ReactNode;
};

const Stepper = () => {
  const [current, setCurrent] = useState<number>(0);
  const [form, setForm] = useState<TOrderProduct | undefined>(undefined);
  const [total, setTotal] = useState<number>(0);

  const next = () => {
    setCurrent((prev) => prev + 1);
  };

  const prev = () => {
    setCurrent((prev) => prev - 1);
  };

  const steps: TSteps[] = [
    {
      title: "Check Out",
      content: <CheckOut next={next} setForm={setForm} form={form} setTotal={setTotal} />,
    },
    {
      title: "Preview",
      content: <PreviewFormOrder form={form} next={next} prev={prev} />,
    },
    {
      title: "Payment",
      content: <StripeCheckOut next={next} prev={prev} total={total} form={form} />,
    },
    {
      title: "Success",
      status: current === 3 ? "finish" : "wait",
      content: <Success />,
    },
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Steps current={current} items={steps} style={{ marginBottom: "20px" }} />
      <div style={{ margin: "20px 0", padding: "10px", background: "#f9f9f9" }}>
        {steps[current].content}
      </div>
    </div>
  );
};

export default Stepper;
