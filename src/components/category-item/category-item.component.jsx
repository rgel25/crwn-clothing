import React from "react";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./category-item.styles";

import { useNavigate } from "react-router-dom";

export default function CategoryItem({ category }) {
  const { title, imageUrl, route } = category;
  const redirect = useNavigate();

  const handleRedirect = () => redirect(route);
  return (
    <DirectoryItemContainer onClick={handleRedirect}>
      <BackgroundImage
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}
