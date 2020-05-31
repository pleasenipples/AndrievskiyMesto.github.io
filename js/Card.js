class Card {
    constructor(name, link) {
      this.name = name;
      this.link = link; 
    }
  
    createCard() {
      const placeCard = document.createElement('div');
          placeCard.classList.add('place-card');
  
          const placeImage = document.createElement('div');
          placeImage.classList.add('place-card__image');
          placeImage.style.backgroundImage = `url(${this.link})`;
  
          const placeDelete = document.createElement('button');
          placeDelete.classList.add('place-card__delete-icon');
  
          const placeDescription = document.createElement('div');
          placeDescription.classList.add('place-card__description');
  
          const placeName = document.createElement('h3');
          placeName.classList.add('place-card__name');
          placeName.textContent = this.name;

          const likeContainer = document.createElement('div');
          likeContainer.classList.add('place-card__like-container');
  
          const placeLike = document.createElement('button');
          placeLike.classList.add('place-card__like-icon');

          const likeCount = document.createElement('p');
          likeCount.classList.add('place-card__like-count');
          //likeCount.textContent = '0';
  
          placeCard.appendChild(placeImage);
          placeImage.appendChild(placeDelete);
          placeCard.appendChild(placeDescription);
          placeDescription.appendChild(placeName);
          placeDescription.appendChild(likeContainer);
          likeContainer.appendChild(placeLike);
          likeContainer.appendChild(likeCount);

      this.cardElement = placeCard;
      this.cardImage = placeImage;
      this.likeCount = likeCount;
      return placeCard;
    }

    setCardImage() {
      this.cardImage = this.cardElement.querySelector('.place-card__image');
      return this.cardImage;
    }
  
    like(event) {
      event.target.classList.toggle('place-card__like-icon_liked');
    }
  
    remove() {
      const child = event.target.closest(".place-card");
      child.parentNode.removeChild(child);
    }

    setListener() {
      this
        .cardElement
        .querySelector('.place-card__like-icon')
        .addEventListener('click', this.like);

      this
      .cardElement
      .querySelector('.place-card__delete-icon')
      .addEventListener('click', this.remove);
    }
  }