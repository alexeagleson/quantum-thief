// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: touchEvent.touches[0].clientX - rect.left,
    y: touchEvent.touches[0].clientY - rect.top
  };
}

// Get the position of the mouse relative to the canvas
function getMousePos(canvasDom, mouseEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: mouseEvent.clientX - rect.left,
    y: mouseEvent.clientY - rect.top
  };
}

function convertMouseTouchToTile(mouseTouchCoords) {
  var tileX = Math.floor(mouseTouchCoords.x / 32);
  var tileY = Math.floor(mouseTouchCoords.y / 32);
  console.log(Game.CompleteMap.map[tileX + "," + tileY]);
  return ({x: tileX, y: tileY});
}



function objectAtTile(tileCoords) {
  if (Game.CompleteMap.map[tileCoords.x + "," + tileCoords.y].objectsOnThisTile) {
    return Game.CompleteMap.map[tileCoords.x + "," + tileCoords.y].objectsOnThisTile[0];
  } else {
    return null;
  }
}



function sanitizeNumber(value, minValue, maxValue) {
  
  if (isNaN(value)) {
    return false; 
  }
  
  if (minValue === undefined) {
    return value;
  } else {
    return normalizeToValue(value, minValue, maxValue);
  }
}

function multiplyBy32(valueArray) {
  

  valueArray[0] = valueArray[0] * 32;
  valueArray[1] = valueArray[1] * 32;
  
  return valueArray;
}

function multiplyBy12(valueArray) {
  

  valueArray[0] = valueArray[0] * 12;
  valueArray[1] = valueArray[1] * 12;
  
  return valueArray;
}


function playSound(filename) {
  var sound = document.getElementById(filename);
  //if (sound === undefined) {
  //  alert ("UNDEFINED SOUND!");
  //  return;
  //}
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}

function distanceTo(object1, object2) {
  var dx= Math.abs(object1.x - object2.x);
  var dy= Math.abs(object1.y - object2.y);
  // return dx;
  // return dy;
  return(Math.sqrt((dx * dx) + (dy * dy)));
}

function removeObjectFromTile(object) {
  var spliceLocation = null;

  for (var i = 0; i < Game.CompleteMap.map[object.x + "," + object.y].objectsOnThisTile.length; i++) {
    if (object === Game.CompleteMap.map[object.x + "," + object.y].objectsOnThisTile[i]) {
      spliceLocation = i;
    }
  }

  if (spliceLocation != null) {
    Game.CompleteMap.map[object.x + "," + object.y].objectsOnThisTile.splice(spliceLocation, 1);
    return true;
  }
  return false;
}

function removeObjectFromActive(object) {
  var spliceLocation = null;

  for (var i = 0; i < Game.CompleteMap.activeObjects.length; i++) {
    if (object === Game.CompleteMap.activeObjects[i]) {
      spliceLocation = i;
    }
  }

  if (spliceLocation != null) {
    Game.CompleteMap.activeObjects.splice(spliceLocation, 1);
    return true;
  }
  return false;
}


function show_image(src, width, height, alt) {
  var totalDOM = document.getElementsByClassName("totalDiv")[0];
  totalDOM.style.display = "none";
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  img.id = alt;

  // This next line will just add it to the <body> tag
  document.body.appendChild(img);
  
  return img;
}

function removeTitle() {
  playSound("click1");
  var totalDOM = document.getElementsByClassName("totalDiv")[0];
  totalDOM.style.display = "block";
  img = document.getElementById("Quantum Thief");
  img.parentNode.removeChild(img);
  Game.showControls();
}



function removeControls() {
  playSound("click1");
  var totalDOM = document.getElementsByClassName("totalDiv")[0];
  totalDOM.style.display = "block";
  img = document.getElementById("Controls");
  img.parentNode.removeChild(img);
  setTimeout(function() { 
    Game.startGame();
  }, 100);
}

function iceUniverseTransition() {
  var totalDOM = document.getElementsByClassName("totalDiv")[0];
  totalDOM.style.display = "block";
  img = document.getElementById("Ice Universe");
  img.parentNode.removeChild(img);
  Game.travelTo(creativeContent.iceUniverse);
}

function lavaUniverseTransition() {
  var totalDOM = document.getElementsByClassName("totalDiv")[0];
  totalDOM.style.display = "block";
  img = document.getElementById("Lava Universe");
  img.parentNode.removeChild(img);
  Game.travelTo(creativeContent.fireUniverse);
}

function detroitUniverseTransition() {
  var totalDOM = document.getElementsByClassName("totalDiv")[0];
  totalDOM.style.display = "block";
  img = document.getElementById("Detroit Universe");
  img.parentNode.removeChild(img);
  Game.travelTo(creativeContent.robocopUniverse);
}

function oldfolksUniverseTransition() {
  var totalDOM = document.getElementsByClassName("totalDiv")[0];
  totalDOM.style.display = "block";
  img = document.getElementById("Old Folks Universe");
  img.parentNode.removeChild(img);
  Game.travelTo(creativeContent.oldPersonUniverse);
}

function bakulaUniverseTransition() {
  var totalDOM = document.getElementsByClassName("totalDiv")[0];
  totalDOM.style.display = "block";
  img = document.getElementById("Bakula Universe");
  img.parentNode.removeChild(img);
  Game.travelTo(creativeContent.bakulaUniverse);
}

function hotdogUniverseTransition() {
  var totalDOM = document.getElementsByClassName("totalDiv")[0];
  totalDOM.style.display = "block";
  img = document.getElementById("Hot Dog Universe");
  img.parentNode.removeChild(img);
  Game.travelTo(creativeContent.hotdogUniverse);
}


function playSound(soundName) {
  if (!Game.audioOn) {
    return false;
  }
  sound = document.getElementById(soundName);
  sound.pause();
  sound.currentTime = 0.0;
  sound.play();
}

function stopSound(soundName) {
  if (!Game.audioOn) {
    return false;
  }
  sound = document.getElementById(soundName);
  sound.pause();
  sound.currentTime = 0.0;
}

function stopAllMusic() {
  stopSound("titleMusic");
  stopSound("throneMusic");
  stopSound("iceMusic");
  stopSound("lavaMusic");
  stopSound("robocopMusic");
  stopSound("oldfolksMusic");
  stopSound("quantumMusic");
  stopSound("endingMusic");
  stopSound("singHotdogMusic");
}

function showIntroInfo() {
  var p = document.createElement("p");
  p.id = "p";
  document.body.appendChild(p);
  
  var credits = document.createElement("h1");
  credits.id = "credits";
  credits.innerHTML = "Game Design By: Alex Eagleson, Jodie Eagleson & Aaron Dagenais."
  document.body.appendChild(credits);
  
  var credits3 = document.createElement("h1");
  credits3.id = "credits3";
  credits3.innerHTML = "https://www.facebook.com/wolfdogstudiosgames"
  document.body.appendChild(credits3);
  
  var credits2 = document.createElement("h1");
  credits2.id = "credits2";
  credits2.innerHTML = "Music By: Jay Man - OurMusicBox: http://www.youtube.com/c/ourmusicbox & Wolfdog Studios"
  document.body.appendChild(credits2);
}

function clearIntroInfo() {
  var p = document.getElementById("p");
  document.body.removeChild(p);
  var credits = document.getElementById("credits");
  document.body.removeChild(credits);
  var credits2 = document.getElementById("credits2");
  document.body.removeChild(credits2);
  var credits3 = document.getElementById("credits3");
  document.body.removeChild(credits3);
}