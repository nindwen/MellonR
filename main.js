var words;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
            words = JSON.parse(xhttp.responseText).words;
      }
};
xhttp.open("GET", "words.json", true);
xhttp.send();


function generate() {
      var seed = document.getElementById('seed').value;

      Math.seedrandom(seed);
      var secret="";
      for(i=0;i<5;i++) {
            secret += words[Math.floor(Math.random()*words.length)]+" ";
      }
      secret += "(" + secret.length +")";
      document.getElementById('secret').innerHTML = secret;
      hex = Math.round(255-Math.random()*100).toString(16);
      console.log(hex);
      document.getElementsByTagName('body')[0].style.background="#"+hex+hex+hex;



}
