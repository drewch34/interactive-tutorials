//***WEATHER CONDITIONS OPTIONS 1***

//outifts1 = sunglasses, jacket, umbrella

//if rainy and no umbrella = wet and sad
//if sunny and no sunglasses = hands trying to block sun and sad
//if snowy and no jacket = shivering


var conditionsObject = {
  "Sunny": {
    "Sunglasses": ["Jacket", "Umbrella"],
    "Jacket": ["Sunglasses", "Umbrella"],
    "Umbrella": ["Sunglasses", "Jacket"]
  },
  "Rainy": {
    "Sunglasses": ["Jacket", "Umbrella"],
    "Jacket": ["Sunglasses", "Umbrella"],
    "Umbrella": ["Sunglasses", "Jacket"]
  },
  "Snowy": {
    "Sunglasses": ["Jacket", "Umbrella"],
    "Jacket": ["Sunglasses", "Umbrella"],
    "Umbrella": ["Sunglasses", "Jacket"]
  }
};


var weatherConditions1 = ["sunny", "rainy", "snowy"];

window.onload = function() {
  var weatherSel = document.getElementById("weather1");
  var outfitSel = document.getElementById("outfit1");
  var elseOutfitSel = document.getElementById("else1");
  var submitBtn = document.getElementById("submit");

  for (var x in conditionsObject) {
    weatherSel.options[weatherSel.options.length] = new Option(x, x);
  }
  weatherSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    outfitSel.length = 1;
    elseOutfitSel.length = 1;
    //display correct values
    for (var y in conditionsObject[this.value]) {
      outfitSel.options[outfitSel.options.length] = new Option(y, y);
    }
  }
  outfitSel.onchange = function() {
    //empty Chapters dropdown
    elseOutfitSel.length = 1;
    //display correct values
    var z = conditionsObject[weatherSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      elseOutfitSel.options[elseOutfitSel.options.length] = new Option(z[i], z[i]);
    }
  }

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var randomWeatherSelect = weatherConditions1[Math.floor(Math.random() * weatherConditions1.length)];
    document.getElementById("randomWeather").innerHTML = randomWeatherSelect;
  });

};







// let weatherConditions2a = [sunny, rainy, snowy];

// let weatherConditions2b = [foggy, cold, hot, smoggy, windy];

//sunny = [1, 2, 3, 4, 5], rainy = [0,1,2,3,4,5], snowy = [0,1,4,5]

//outfits2 = sunglasses, jacket, umbrella, mask, flashlight, fan, hat, boots

//only hold two things (umbrella, flashlight, fan)

//if smoggy and no mask = coughing
//if foggy and no flashlight = hand up to head, searching
//if humid and no fan = tongue out, panting
//if cold and no jacket = shivering
//if hot and no fan = tongue out, panting
//if windy and not jacket = shivering

//if windy and hat/fan/mask = goodbye item
//if snowy and cold and no jacket + hat = blue area
//if foggy and sunglasses = bump into screen, hands in front, blind


//easter egg = sunny/hot = beach day