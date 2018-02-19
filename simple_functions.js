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

function convertMouseTouchToMovement(mouseTouchCoords) {
  var playerPixelX = (Game.player.x * 32);
  var playerPixelY = (Game.player.y * 32);

  var dx = mouseTouchCoords.x - playerPixelX;
  var dy = mouseTouchCoords.y - playerPixelY;

  if (dx > 0 && (Math.abs(dx) > Math.abs(dy))) {
    return [1, 0];
  } else if (dx < 0 && (Math.abs(dx) > Math.abs(dy))) {
    return [-1, 0];
  } else if (dy < 0 && (Math.abs(dy) > Math.abs(dx))) {
    return [0, -1];
  } else if (dy > 0 && (Math.abs(dy) > Math.abs(dx))) {
    return [0, 1];
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