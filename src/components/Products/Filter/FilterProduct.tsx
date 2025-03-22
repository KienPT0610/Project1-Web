import { useAppDispatch } from "@/hooks/reduxHooks";
import { findByFilters } from "@/store/slices/productsSlice";
import { Checkbox } from "antd";
import { useState, useEffect } from "react";

const colorOptions = [
  { label: "Blue", value: "Blue" },
  { label: "Green", value: "green" },
  { label: "Black", value: "Black" },
  { label: "White", value: "White" },
];

const brandOptions = [
  { label: "Sony", value: "sony" },
  { label: "Samsung", value: "samsung" },
  { label: "Apple", value: "apple" },
  { label: "Xiaomi", value: "xiaomi" },
];

const categoryOptions = [
  { label: "Headphones", value: "audio" },
  { label: "Smartphones", value: "mobile" },
];

export default function FilterProduct() {
  const dispatch = useAppDispatch();

  const [selectedFilters, setSelectedFilters] = useState<any>({
    colors: [],
    brands: [],
    categories: [],
  });

  const handleChange = (type: string, selectedValues: string[]) => {
    setSelectedFilters((prevState: any) => ({
      ...prevState,
      [type]: selectedValues,
    }));
  };

  useEffect(() => {
    dispatch(findByFilters(selectedFilters));
  }, [selectedFilters, dispatch]);

  return (
    <div className="border w-1/4 p-2">
      <h1>Filter Products</h1>

      <div>
        <h3>Colors</h3>
        <Checkbox.Group
          options={colorOptions}
          value={selectedFilters.colors}
          onChange={(values) => handleChange("colors", values)}
        />
      </div>

      <div>
        <h3>Brands</h3>
        <Checkbox.Group
          options={brandOptions}
          value={selectedFilters.brands}
          onChange={(values) => handleChange("brands", values)}
        />
      </div>

      <div>
        <h3>Categories</h3>
        <Checkbox.Group
          options={categoryOptions}
          value={selectedFilters.categories}
          onChange={(values) => handleChange("categories", values)}
        />
      </div>
    </div>
  );
}
