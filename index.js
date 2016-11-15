var app = new Vue({

  el: '#app',

  mounted: function() {
    setTimeout(() => {
      this.message = 'This string was updated on: '+ new Date();
    },3000)

  },

  data: {
    message: 'This string was updated on: ' + new Date()
  }
})
