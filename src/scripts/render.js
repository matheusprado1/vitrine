import { products } from "./data.js";
import { attachAddToCartEvent } from "./cart.js";
import { filterProducts, filterCategory } from "./filter.js";
import { createProductCard } from "./products.js";


export const renderProducts = products => {
  const vitrineContainer = document.querySelector("#vitrine__container")

  if (products.length > 0) {
    vitrineContainer.innerHTML = "";

    products.forEach(product => {
      const productCard = createProductCard(product);
      vitrineContainer.appendChild(productCard);
    });
    attachAddToCartEvent();
  }
}


renderProducts(products);
filterProducts();
filterCategory();
