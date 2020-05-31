class PopupZoom extends Popup {

    addImageSrc(link) {
      const srcPhoto = this.container.querySelector('.popup__photo');
      if (srcPhoto.getAttribute('src') !== link) {
        srcPhoto.setAttribute('src', link);
        this.open();
      } else {
        this.open();
      }
    }
    
    popupImage(event) {
        if (event.target.classList.contains('place-card__image')) {
          const url = event.target.style.backgroundImage.slice(5, -2);
          this.addImageSrc(url);
    }
  }
  
    addListener(element) {
      element.addEventListener('click', (event) => {this.popupImage(event);}); // Используется глобальный event. Следует добавить его в параметр
    }
  }