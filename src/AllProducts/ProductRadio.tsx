import React, { useEffect, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { useCategoryContext } from '../Context/CategoryContext';
import ProductCategoryState from '../StateManagement/ProductCategoryState';

const ProductRadio: React.FC = () => {
  const { category, setCategory, categories } = useCategoryContext();
  const [value, setValue] = useState(category);

  useEffect(() => {
    setValue(category);
  }, [category]);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
   
     ProductCategoryState.getState().clickAfterCategory(e.target.value);
    setValue(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value="default">Default</Radio>
      {categories.map((cat) => (
        <Radio key={cat} value={cat}>{cat}</Radio>
      ))}
    </Radio.Group>
  );
};

export default ProductRadio;

