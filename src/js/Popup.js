export default class Popup {
    constructor(container) {
      this.container = container;
      this.addListenerClose()
    }
  
    open() {
      this.container.classList.add('popup_is-opened');
    }
  
    close() {
      this.container.classList.remove('popup_is-opened');
    }

    addListenerClose() {
      this.container.querySelector('.popup__close').addEventListener('click', () => {this.close();});
    }

    addListenerFormAction() {
      this.openButton.addEventListener('click', (event) => {this.popupFormReset(event); this.open();});
      this.form.addEventListener('input', () => {this.validationField.fieldValidity();});
    }
  }
  