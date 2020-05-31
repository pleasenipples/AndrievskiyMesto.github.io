class CardList {
    constructor(container, card, popupZoom) {
      this.container = container;
      this.card = card;
      this.popupZoom = popupZoom;
    }

    renderInitialCard(elem) {
      this.card.name = elem.name;
      this.card.link = elem.link;
      this.addCard(this.card.createCard());
      this.card.likeCount.textContent = elem.likes.length;
      console.log(this.card.likeCount);
      this.popupZoom.addListener(this.card.cardImage);
      this.card.setListener();
    }
  
    addCard(cardElement) {
      this.container.appendChild(cardElement);
    }
  }