
/*---FETCH USA DATA-----------------------------------------------------------------*/
let requestURL = 'https://api.covidtracking.com/v1/us/current.json';
let request = new XMLHttpRequest(); 
request.open('GET', requestURL); 
request.responseType = 'json'; 
request.send(); 
request.onload = function() { // Occurs after send function above
  var result = request.response;
  console.log(result);


  // DESKTOP
  usaNewPos = document.getElementById("usaNewPos");
  usaNewPos.innerHTML = result[0]['positiveIncrease'];
  usaPos = document.getElementById("usaPos");
  usaPos.innerHTML = result[0]['positive'];
  usaRec = document.getElementById("usaRec");
  usaRec.innerHTML = result[0]['recovered'];
  usaNewDeath = document.getElementById("usaNewDeath");
  usaNewDeath.innerHTML = result[0]['deathIncrease'];
  usaDeath = document.getElementById("usaDeath");
  usaDeath.innerHTML = result[0]['death'];



  //MOBILE
  usaNewPosM = document.getElementById("usaNewPosM");
  usaNewPosM.innerHTML = result[0]['positiveIncrease'];
  usaPosM = document.getElementById("usaPosM");
  usaPosM.innerHTML = result[0]['positive'];
  usaRecM = document.getElementById("usaRecM");
  usaRecM.innerHTML = result[0]['recovered'];
  usaNewDeathM = document.getElementById("usaNewDeathM");
  usaNewDeathM.innerHTML = result[0]['deathIncrease'];
  usaDeathM = document.getElementById("usaDeathM");
  usaDeathM.innerHTML = result[0]['death'];


  console.log(usaNewPos);

}