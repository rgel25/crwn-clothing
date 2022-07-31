import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";
import { ProductsContainer } from "./category.styles";

export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = React.useContext(CategoriesContext);
  const [products, setProducts] = React.useState(categoriesMap[category]);

  React.useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <React.Fragment>
      <h2>{products && category.toUpperCase()}</h2>
      <ProductsContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </React.Fragment>
  );
}
