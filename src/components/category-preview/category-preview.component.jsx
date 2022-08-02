import React from "react";

import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

export default function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title className="title" to={`/shop/${title}`}>
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}
