import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContainer } from "./category.styles";
import Spinner from "../../components/spinner/spinner.component";

export default function Category() {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = React.useState(categoriesMap[category]);

  React.useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <React.Fragment>
      <h2>{products && category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductsContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductsContainer>
      )}
    </React.Fragment>
  );
}
