import { object, string } from "yup";

export const orderSchema = object().shape({
  name: string().trim().required("Name is required"),
  address: string().trim().required("Address is required"),
  phone: string().trim().matches(/^[0-9]{10,11}$/, "Phone must be 10-11 digits").required("Phone is required"),
  country: string().trim().required("Country is required"),
  city: string().trim().required("City is required"),
  status: string().trim().required("Status is required"),
  note: string().trim(),
  // order_date: string().trim().required("Order date is required"),
})

export const cardSchema = object().shape({
  name: string().trim().required("Name is required"),
  email: string().trim().email("Invalid email").required("Email is required"),
})