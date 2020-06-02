export default class UserInfo {
    constructor(name, job, avatar, userName, userJob) {
      this.name = name;
      this.job = job;
      this.avatar = avatar;
      this.userName = userName;
      this.userJob = userJob;
      this.userAvatar = document.querySelector('.user-info__photo');
    }
  
    updateUserInfo(name, job, avatar) {
      this.name = name;
      this.job = job;
      this.avatar = avatar;
      this.userName.textContent = this.name;
      this.userJob.textContent = this.job;
      this.userAvatar.style.backgroundImage = `url(${this.avatar})`;
    }
  }