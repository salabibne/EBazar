import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for your context's value
interface CategoryContextType {
  category: string;
  setCategory: (value: string) => void;
  categories: string[];
  setCategories: (categories: string[]) => void;
}


// Create the context with a default value
const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

// Custom hook to use the context
export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategoryContext must be used within a CategoryProvider');
  }
  return context;
};

// Provider component
interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
   const [category, setCategory] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);


  return (
    <CategoryContext.Provider value={{ category, setCategory, categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
 