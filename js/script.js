                      // Modificare il codice appena condiviso per stampare all'interno dell'h1 il contatore di click fatti dall'utente sul bottone

                      

function initVue() {
  new Vue({
      el: '#app', 
      data: {
          'bgClass': 'bg-red',
          'count' : 0
      },
      methods: {
          increase: function() {
              this.count++;
          },

          decrease: function() {
            this.count--;
          }
      }
  });
}
// function initJQuery() {
//   const initText = 'Hello World!!';
//   $('#input-msg').val(initText);
//   $('#text-msg').text(initText);
//   $('#input-msg').keyup(function() {
//       const input = $(this);
//       const text = input.val();
//       $('#input-msg').text(text);
//   });
// }
function init() {
  initVue();
  // initJQuery();
}
$(init);