import { products } from "./data.js";
import { renderProducts } from "./render.js";

export const filterProducts = () => {
  const searchButton = document.querySelector("#search__button");
  const searchInput = document.querySelector("#search__input");

  searchButton.addEventListener("click", event => {
    event.preventDefault();

    const value = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(item => {
      return item.title.toLowerCase().includes(value);
    });

    if (filteredProducts.length < 1) {
      const vitrineContainer = document.querySelector("#vitrine__container");
      vitrineContainer.innerHTML = "";

      const messageElement = document.createElement("p");
      messageElement.innerText = "Produto não encontrado!";
      vitrineContainer.appendChild(messageElement);
    }

    renderProducts(filteredProducts);
  });
}

export const filterCategory = () => {
  const all = document.querySelector("#filter__all");
  const accessory = document.querySelector("#filter__acessory");
  const shoes = document.querySelector("#filter__shoes");
  const shirt = document.querySelector("#filter__shirt");

  all.addEventListener("click", event => {
    event.preventDefault();
    renderProducts(products);
  });

  accessory.addEventListener("click", event => {
    event.preventDefault();
    const filteredProducts = products.filter(item => item.category === "Acessorios");
    renderProducts(filteredProducts);
  });

  shoes.addEventListener("click", event => {
    event.preventDefault();
    const filteredProducts = products.filter(item => item.category === "Calcados");
    renderProducts(filteredProducts);
  });

  shirt.addEventListener("click", event => {
    event.preventDefault();
    const filteredProducts = products.filter(item => item.category === "Camisetas");
    renderProducts(filteredProducts);
  });
};
