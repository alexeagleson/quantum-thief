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

function rollDie(dieSize) {
  var value = Math.floor(ROT.RNG.getUniform() * (dieSize)) + 1;
  return value;
}

function normalizeToValue(number, minValue, maxValue) {
  
  if (number < minValue) {
    number = minValue;
  } else if (number > maxValue) {
    number = maxValue;
  }
  return number;
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