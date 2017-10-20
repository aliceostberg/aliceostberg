var interestsArray = [ // My interests in an array
["1", "Digitalisation"],
["2", "Transformation"],
["3", "Travelling and Nature"],
["4", "Diving"],
["5", "Food & Drinks"]
]


var container = document.getElementById('interests');

//Loop all interest and put them in HTML where y div 'interest' is 
for (var i = 0; i <= interestsArray.length; i++){
  container.innerHTML += "<div class ='interests'>" +interestsArray[i][1]+"</div>";
}