import React from "react";
import CategoryItem from "../category-item/category-item.component";
import { DirectoryContainer } from "./directory.styles";

export default function Directory({ categories }) {
  return (
    <DirectoryContainer className="directory-container">
      {categories.map((cat) => (
        <CategoryItem key={cat.id} category={cat} />
      ))}
    </DirectoryContainer>
  );
}
