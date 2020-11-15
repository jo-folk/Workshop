
/*---FETCH STATE DATA AND DISPLAY MAP-----------------------------------------------------------------*/
var stateNewPos = new Array();  
var statePos = new Array();
var stateNewDeath = new Array();
var stateDeath = new Array();

var statesArray = [
    'al',
    'ak',
    'az',
    'ar',
    'ca',
    'co',
    'ct',
    'de',
    'dc',
    'fl',
    'ga',
    'hi',
    'id',
    'il',
    'in',
    'ia',
    'ks',
    'ky',
    'la',
    'me',
    'md',
    'ma',
    'mi',
    'mn',
    'ms',
    'mo',
    'mt',
    'ne',
    'nv',
    'nh',
    'nj',
    'nm',
    'ny',
    'nc',
    'nd',
    'oh',
    'ok',
    'or',
    'pa',
    'ri',
    'sc',
    'sd',
    'tn',
    'tx',
    'ut',
    'vt',
    'va',
    'wa',
    'wv',
    'wi',
    'wy'
];

  var x = 0;
  
  while (x <= 51) {
    let requestURL = 'https://api.covidtracking.com/v1/states/' + statesArray[x] + '/current.json';
          // API URL
    let request = new XMLHttpRequest(); 
          // XMLHttpRequest (XHR) object assigned to variable
    request.open('GET', requestURL); 
          // XMLHttpRequest.open() function, first argument is a method and second is a URL (string variable here)
    request.responseType = 'json'; 
          // "The response is a JavaScript object created by parsing the contents of received data as JSON."
    request.send(); 
          // Sends request to server     
    request.onload = function() { // Occurs after send function above
        var result = request.response;
        //console.log(result);
        var posInc = result['positiveIncrease'];
        var pos = result['positive'];
        var deathInc = result['deathIncrease'];
        var death = result['death'];

        stateNewPos.push(Number(posInc));
        statePos.push(Number(pos));
        stateNewDeath.push(Number(deathInc));
        stateDeath.push(Number(death));

        // Load Map
        google.charts.load('current', {
          'packages':['geochart'],
          'mapsApiKey': 'AIzaSyD9coJ6yyDYIlJ1wq4RI62qBbd4zNNhing'
        });
        google.charts.setOnLoadCallback(drawVisualization);  

    }  
    x++;    
  }

  //console.log(stateNewPos);
  //console.log(statePos);
  //console.log(stateNewDeath);
  //console.log(stateDeath);


  function drawVisualization() {
  	var data = google.visualization.arrayToDataTable([
    	['State', 'New Positive Cases', 'Total Positive Cases'],
        ['US-AL', stateNewPos[0], statePos[0]],
        ['US-AK', stateNewPos[1], statePos[1]],
        ['US-AZ', stateNewPos[2], statePos[2]],
        ['US-AR', stateNewPos[3], statePos[3]],
        ['US-CA', stateNewPos[4], statePos[4]],
        ['US-CO', stateNewPos[5], statePos[5]],
        ['US-CT', stateNewPos[6], statePos[6]],
        ['US-DE', stateNewPos[7], statePos[7]],
        ['US-DC', stateNewPos[8], statePos[8]],
        ['US-FL', stateNewPos[9], statePos[9]],
        ['US-GA', stateNewPos[10], statePos[10]],
        ['US-HI', stateNewPos[11], statePos[11]],
        ['US-ID', stateNewPos[12], statePos[12]],
        ['US-IL', stateNewPos[13], statePos[13]],
        ['US-IN', stateNewPos[14], statePos[14]],
        ['US-IA', stateNewPos[15], statePos[15]],
        ['US-KS', stateNewPos[16], statePos[16]],
        ['US-KY', stateNewPos[17], statePos[17]],
        ['US-LA', stateNewPos[18], statePos[18]],
        ['US-ME', stateNewPos[19], statePos[19]],
        ['US-MD', stateNewPos[20], statePos[20]],
        ['US-MA', stateNewPos[21], statePos[21]],
        ['US-MI', stateNewPos[22], statePos[22]],
        ['US-MN', stateNewPos[23], statePos[23]],
        ['US-MS', stateNewPos[24], statePos[24]],
        ['US-MO', stateNewPos[25], statePos[25]],
        ['US-MT', stateNewPos[26], statePos[26]],
        ['US-NE', stateNewPos[27], statePos[27]],
        ['US-NV', stateNewPos[28], statePos[28]],
        ['US-NH', stateNewPos[29], statePos[29]],
        ['US-NJ', stateNewPos[30], statePos[30]],
        ['US-NM', stateNewPos[31], statePos[31]],
        ['US-NY', stateNewPos[32], statePos[32]],
        ['US-NC', stateNewPos[33], statePos[33]],
        ['US-ND', stateNewPos[34], statePos[34]],
        ['US-OH', stateNewPos[35], statePos[35]],
        ['US-OK', stateNewPos[36], statePos[36]],
        ['US-OR', stateNewPos[37], statePos[37]],
        ['US-PA', stateNewPos[38], statePos[38]],
        ['US-RI', stateNewPos[39], statePos[39]],
        ['US-SC', stateNewPos[40], statePos[40]],
        ['US-SD', stateNewPos[41], statePos[41]],
        ['US-TN', stateNewPos[42], statePos[42]],
        ['US-TX', stateNewPos[43], statePos[43]],
        ['US-UT', stateNewPos[44], statePos[44]],
        ['US-VT', stateNewPos[45], statePos[45]],
        ['US-VA', stateNewPos[46], statePos[46]],
        ['US-WA', stateNewPos[47], statePos[47]],
        ['US-WV', stateNewPos[48], statePos[48]],
        ['US-WI', stateNewPos[49], statePos[49]],
        ['US-WY', stateNewPos[50], statePos[50]]
      ]);

  		var geochart = new google.visualization.GeoChart(
       document.getElementById('map'));
      var options = {
        width: 950, 
        region: "US", 
        resolution: "provinces",
        backgroundColor: '#284D6D',
        colorAxis: {minValue : 0, maxValue : 13000, colors: ['#F9BC1F', '#C42924']},
        
      };
  		geochart.draw(data, options);
  }
  
