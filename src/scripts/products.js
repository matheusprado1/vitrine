export const createElementWithClass = (type, className) => {
  const element = document.createElement(type);
  element.classList.add(className);
  return element;
}

export const createProductCard = product => {
  const vitrineCard = createElementWithClass("div", "vitrine__card");
  const vitrineContainerImage = createElementWithClass("div", "vitrine__card__image-container");
  const vitrineCardImage = createElementWithClass("img", "vitrine__card__image");
  const vitrineCardContent = createElementWithClass("div", "vitrine__card__content");
  const vitrineCardCategory = createElementWithClass("span", "vitrine__card__category");
  const vitrineCardTitle = createElementWithClass("h3", "vitrine__card__title");
  const vitrineCardDescription = createElementWithClass("p", "vitrine__card__description");
  const vitrineCardPrice = createElementWithClass("p", "vitrine__card__price");
  const vitrineCardAddToCart = createElementWithClass("p", "vitrine__card__add-cart");

  vitrineCardImage.setAttribute("src", product.image);
  vitrineCardCategory.innerText = product.category;
  vitrineCardTitle.innerText = product.title;
  vitrineCardDescription.innerText = product.description;
  vitrineCardPrice.innerText = `R$ ${product.price.toFixed(2)}`;
  vitrineCardAddToCart.innerText = "Adicionar ao carrinho";
  vitrineCardAddToCart.setAttribute("data-product-id", product.id);

  vitrineCard.appendChild(vitrineContainerImage);
  vitrineContainerImage.appendChild(vitrineCardImage);
  vitrineCard.appendChild(vitrineCardContent);
  vitrineCardContent.appendChild(vitrineCardCategory);
  vitrineCardContent.appendChild(vitrineCardTitle);
  vitrineCardContent.appendChild(vitrineCardDescription);
  vitrineCardContent.appendChild(vitrineCardPrice);
  vitrineCardContent.appendChild(vitrineCardAddToCart);
  vitrineCardAddToCart.classList.add("add-cart");

  return vitrineCard;
}