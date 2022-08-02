import React from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import { fetchCategoriesStart } from "../../store/categories/categories.action";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

export default function Shop() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
