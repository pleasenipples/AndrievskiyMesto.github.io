import "../pages/index.css";
import Api from './Api';
import Card from './Card';
import CardList from './CardList';
import FormValidator from './FormValidator';
//import Popup from './Popup';
import PopupNewCard from './PopupNewCard';
import PopupUserInfo from './PopupUserInfo';
import PopupZoom from './PopupZoom';
import UserInfo from './UserInfo';


const root = document.querySelector('.root');
const placeList = root.querySelector('.places-list');
const userInfoButton = root.querySelector('.user-info__button');
const userEditButton = root.querySelector('.user-info__edit-button');
const popupProfile = root.querySelector('.popup__profile');
const userName = root.querySelector('.user-info__name');
const userJob = root.querySelector('.user-info__job');
const popupNew = root.querySelector('.popup__new');
const popupImage = root.querySelector('.popup__image');
const formNew = document.forms.new;
const formProfile = document.forms.profile;
const errorMessages = {
   valueMissing: 'Это обязательное поле',
   tooShort: 'Должно быть от 2 до 30 символов',
   typeMismatch: 'Здесь должна быть ссылка'
 };
const fetchArguments = {
  baseUrl: 'https://praktikum.tk/cohort10',
  headers: {
  authorization: 'd49b1202-45cc-4b8f-9106-b1e4c5de7d40',
  'Content-Type': 'application/json'
  }
}

const api = new Api(fetchArguments);
const card = new Card();
const userInfo = new UserInfo();
const popupZoom = new PopupZoom(popupImage);
const cardList = new CardList(placeList, card, popupZoom);

const formProfileValidation = new FormValidator(formProfile, errorMessages);
const formNewValidation = new FormValidator(formNew, errorMessages);
const profilePopup = new PopupUserInfo(popupProfile, userEditButton, formProfile, formProfileValidation, api, userName, userJob, userInfo);
const cardPopup = new PopupNewCard(popupNew, userInfoButton, formNew, cardList, formNewValidation, api);


api.getInitialCards().then((data) => {
  data.forEach(function (i) {
    cardList.renderInitialCard(i)
  }, this);
})
.catch((err) => {
  console.log(err);
});;

api.getUserInfo().then((data) => {
  userInfo.updateUserInfo(data.name, data.about, data.avatar);
})
.catch((err) => {
  console.log(err);
});
