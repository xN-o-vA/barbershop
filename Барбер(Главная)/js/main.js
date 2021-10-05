var main = new Vue({
  el: '#main',
  data: {
    show: {main: true},
    words: {
      title: 'master_entry',
      login_button: 'entry',
    },
    loginWindow: 'master',
    language: {name: 'ru', img: "img/ru.png"},
    inputs: {
      fullName: "",
      email: "",
      password: "",
      passwordRepeat: "",
      remember: false,
    }
  },
  methods: {
    setLanguage() {
      language = this.language.name;
      this.language.img = `img/${this.language.name}.png`;
    }, 
    setLoginWindow(type) {
      this.loginWindow = type;
      switch(type) {
        case 'client_registration':
          this.words.title = 'clients_office';
          this.words.login_button = 'registration';
        break
        case 'client_entry':
          this.words.title = 'clients_office';
          this.words.login_button = 'entry';
          break
        case 'master':
          this.words.title = 'master_entry';
          this.words.login_button = 'entry';
          break
        default: 
        console.log('[Error]: setLoginWindow');
      }
    },
    cabinetEntrance() {
      switch (this.loginWindow) {
        case 'master':
          console.log('master');
          break
        case 'client_entry':
          console.log('client_entry');
          break
        case 'client_registration':
          console.log('client_registration');
          break
        default:
        break
      }
    }
  }
})

function scaling() {
  let defaultHeight = 900;
  let currentHeight = window.innerHeight;
  let scaleCoefficient = currentHeight / defaultHeight;
  document.documentElement.style.setProperty('--scale-coefficient', scaleCoefficient);
}
window.onload = () => {
  scaling();
};
window.onresize = () => {
  scaling();
};