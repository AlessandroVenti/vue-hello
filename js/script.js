                      // GOAL: stampare a schermo il contenuto di una variabile dentro un h1
                      //BONUS: utilizzare un data come nome del file immagine in un tag img


function settingVue() {
  new Vue({
      el: '#app', 
      data: {
          content : `Hello V! Greetings from Punchin'Judy`,
          imgContent: "img/judy.jpg"
      },
  });
}


$(settingVue);                      

