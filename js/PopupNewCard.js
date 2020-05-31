class PopupNewCard extends Popup {
    constructor(container, openButton, form, cardList, validationField, api) {
      super(container)
      this.openButton = openButton;
      this.api = api;
      this.submit = form.querySelector('.popup__button');
      this.form = form;
      this.validationField = validationField;
      this.cardList = cardList;
      this.addListenerAddUserCard();
      this.addListenerFormAction();
    }
  
    popupFormReset() {
      this.form.elements.name.value = '';
      this.form.elements.link.value = '';
      const allError = this.form.querySelectorAll('.error-message');
      allError.forEach(function (elem) { this.validationField.resetError(elem)}, this);
    }
  
    addUserCard(event) {
      event.preventDefault();
      const { name, link } = this.form.elements;

      this.api.postNewCard(name.value, link.value).then((data) => {
        this.cardList.renderInitialCard(data);
      })
      .catch((err) => {
        console.log(err);
      });
      
      this.close();
      this.form.reset();
      this.submit.setAttribute('disabled', true);
      this.submit.classList.remove('popup__button_active');
    };
  
    addListenerAddUserCard() {
      this.form.addEventListener('submit', (event) => {this.addUserCard(event);});

    }
  }