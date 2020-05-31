export default class FormValidator {
    constructor(form, errorMessages) {
      this.form = form; 
      this.errorMessages = errorMessages;
    }
  
    activateError(element) {
      element.classList.add('error-message__visible');
      element.previousElementSibling.classList.add('popup__input_invalid');
    }
  
    resetError(element) {
      element.classList.remove('error-message__visible');
      element.previousElementSibling.classList.remove('popup__input_invalid');
      element.textContent = '';
    }
  
    checkInputValidity(input, error) {
      if (input.validity.valueMissing) {
        error.textContent = this.errorMessages.valueMissing;
        this.activateError(error);
    
        return false;
      }
      if (input.validity.tooLong || input.validity.tooShort) {
        error.textContent = this.errorMessages.tooShort;
        this.activateError(error);
    
        return false;
      }
      if (input.validity.typeMismatch) {
        error.textContent = this.errorMessages.typeMismatch;
        this.activateError(error);
    
        return false;
      }
      this.resetError(error);
      return true;
    }
  
    setSubmitButtonState(element, validResult) {
      if (validResult) {
        element.classList.add('popup__button_active');
        element.disabled = false;
      } else {
        element.classList.remove('popup__button_active');
        element.disabled = true;
      }
    }
  
    fieldValidity() {
      let isFormValid = true;
      const elements = this.form.querySelectorAll('.popup__input');
      elements.forEach(elem => {
        const error = elem.nextElementSibling;
        if (!this.checkInputValidity(elem, error)) isFormValid = false;
    
        const button = this.form.querySelector('.popup__button');
        this.setSubmitButtonState(button, isFormValid);
      }, this);
    }
  }

