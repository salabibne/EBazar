// ProductCategoryState.tsx
import create from 'zustand';

type CategoryState = {
  category: string;
  clickAfterCategory: (value: string) => void;
};

const ProductCategoryState = create<CategoryState>((set) => ({
  category: "default",
  clickAfterCategory: (value) => set({ category: value }),
}));

export default ProductCategoryState;
