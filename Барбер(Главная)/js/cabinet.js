var main = new Vue({
  el: '#cabinet',
  data: {
    show: {cabinet: false},
    menu: [
      {name: "Моя страница на сайте", img: "img/user.svg", type: "user"},
      {name: "Моя страница на сайте", img: "img/user.svg", type: "services"}
    ],
    current_type: "user",
  },
  methods: {
    sectionOpen(type) {
      this.current_type = type;
    }
  }
})
