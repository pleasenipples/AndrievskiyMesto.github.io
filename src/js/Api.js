export default class Api {
    constructor (fetchArguments) {
        this.fetchArguments = fetchArguments;
    }

    /**
     * Можно лучше:
     * Создать метод query, который будет делать fetch и последующий then.
     * Это поможет избавиться от повторяющегося блока then в методах класса
     */
    /*query(url, path) {
      return fetch(`${url}${path}`, {
        headers: this.fetchArguments.headers
      })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
    }*/


    getUserInfo() {
     return fetch(`${this.fetchArguments.baseUrl}/users/me`, {
          method: 'GET',
          headers: this.fetchArguments.headers,
          })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
      }
  
    patchUserInfo(name, about) {
        return fetch(`${this.fetchArguments.baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this.fetchArguments.headers,
          body: JSON.stringify({
            name: name,
            about: about
        })})
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
      }
    
    getInitialCards() {
        return fetch(`${this.fetchArguments.baseUrl}/cards`, {
          headers: this.fetchArguments.headers
        })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
      }

      postNewCard(name, link) {
        return fetch(`${this.fetchArguments.baseUrl}/cards`, {
          method: 'POST',
          headers: this.fetchArguments.headers,
          body: JSON.stringify({
            name: name,
            link: link
        })})
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
      }
}