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
  console.log(Game.map[tileX + "," + tileY]);
  return ({x: tileX, y: tileY});
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

function multiplyBy32(x, y) {
  x = X * 32;
  y = y * 32;
  return [x, y];
}