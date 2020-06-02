import Popup from './Popup';

export default class PopupUserInfo extends Popup {
    constructor(container, openButton, form, validationField, api, userName, userJob, userInfo) {
      super(container)
      this.openButton = openButton;
      this.api = api;
      this.userInfo = userInfo;
      this.userInfo.userName = userName;
      this.userInfo.userJob = userJob;
      this.submit = form.querySelector('.popup__button');
      this.validationField = validationField;
      this.form = form;
      this.addListenerChangeProfile();
      this.addListenerFormAction();
    }
  
    popupFormReset() {
      this.form.elements.name.value = this.userInfo.userName.textContent;
      this.form.elements.job.value = this.userInfo.userJob.textContent;;
      const allError = this.form.querySelectorAll('.error-message');
      allError.forEach(function (elem) { this.validationField.resetError(elem)}, this);
    }
  
    changeProfile(event) {
      event.preventDefault();
      const { name, job } = this.form.elements;
      this.api.patchUserInfo(name.value, job.value).then((data) => {
        this.userInfo.updateUserInfo(data.name, data.about, data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
      this.close();
      this.form.reset();
      this.submit.setAttribute('disabled', true);
      this.submit.classList.remove('popup__button_active');
    }
  
    addListenerChangeProfile() {
      this.form.addEventListener('submit', (event) => {this.changeProfile(event);});
      /**
       * Можно лучше:
       * Чтобы избавиться от дублирования этих двух строк, можно вынести их в метод класса Popup,
       * но вызывать в конструкторе дочерних классов, чтобы избавиться от проблемы попытки назначения
       * обработчика undefined'у.
       */
      //this.openButton.addEventListener('click', (event) => {this.popupFormReset(event); this.open();});
      //this.form.addEventListener('input', () => {this.validationField.fieldValidity();});
    }
  }