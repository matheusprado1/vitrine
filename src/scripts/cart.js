import { products } from "./data.js";
import { createElementWithClass } from "./products.js";

const cartContent = document.querySelector(".cart__content");
const emptyCartContainer = document.createElement("div");
const emptyCartMessage = document.createElement("p");

const cartFinal = document.querySelector(".cart__final")
const cartTotal = document.querySelector(".cart__total");
const cartQuantity = document.querySelector(".cart__quantity");

const cartItems = [];

const updateCart = () => {
  if (cartItems.length == 0) {
    emptyCartMessage.textContent = "Carrinho vazio";
    emptyCartContainer.classList.add("cart__empty__container");
    emptyCartMessage.classList.add("cart__empty");
    cartContent.appendChild(emptyCartContainer);
    emptyCartContainer.appendChild(emptyCartMessage);
    cartFinal.classList.add("hidden");
  } else {
    if (emptyCartContainer.parentNode === cartContent) {
      cartContent.removeChild(emptyCartContainer);
      cartFinal.classList.remove("hidden");
    }
  }
}

updateCart();

export const attachAddToCartEvent = () => {
  const addToCartButtons = document.querySelectorAll(".add-cart");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      const productId = button.getAttribute("data-product-id");

      const productToAdd = products.find(product => product.id === parseInt(productId));
      if (productToAdd) {
        addItemToCart(productToAdd);
      }
    });
  });
};

export const addItemToCart = product => {

  const productCart = createElementWithClass("div", "product-cart");
  const productCartContainerImage = createElementWithClass("div", "product-cart__container__image");
  const productCartImage = createElementWithClass("img", "product-cart__image");
  const productCartContainerContent = createElementWithClass("div", "product-cart__container__content");
  const productCartTitle = createElementWithClass("h3", "product-cart__title");
  const productCartPrice = createElementWithClass("p", "product-cart__price");
  const productCartRemoveButton = createElementWithClass("p", "product-cart__remove");

  productCartImage.setAttribute("src", product.image);
  productCartTitle.innerText = product.title;
  productCartPrice.innerText = `R$ ${product.price.toFixed(2)}`;
  productCartRemoveButton.innerText = "Remover produto";

  cartContent.appendChild(productCart);
  productCart.appendChild(productCartContainerImage);
  productCartContainerImage.appendChild(productCartImage);
  productCart.appendChild(productCartContainerContent);
  productCartContainerContent.appendChild(productCartTitle);
  productCartContainerContent.appendChild(productCartPrice);
  productCartContainerContent.appendChild(productCartRemoveButton);

  productCartRemoveButton.addEventListener("click", event => {
    event.preventDefault();
    removeProductFromCart({ product, element: productCart });
  });

  cartItems.push({ product, element: productCart });

  updateCart();
  calculateTotalAndQuantity();
  return productCart;
}

const removeProductFromCart = item => {
  const index = cartItems.findIndex(cartItem => cartItem.product === item.product);

  if (index !== -1) {
    cartItems.splice(index, 1);
    item.element.remove();
  }
  calculateTotalAndQuantity();
  updateCart();
}

const calculateTotalAndQuantity = () => {
  let total = 0;
  let quantity = 0;

  for (let i = 0; i < cartItems.length; i++) {
    total += ((cartItems[i].product.price * 100) / 100);
    quantity++;
  }

  cartTotal.innerHTML = `Total: <span>R$ ${total.toFixed(2)}</span>`;
  cartQuantity.innerHTML = `Quantidade: <span>${quantity}</span>`;

  return total;
}

