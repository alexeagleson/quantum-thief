var creativeContent = {
  throneTile: "https://i.imgur.com/nmvLMPB.png",
  
  throneLegend: {
    "#": multiplyBy32([1, 1]),
    ".": multiplyBy32([0, 1]),
    "@": multiplyBy32([0, 0]),
    "!": multiplyBy32([1, 0])
  },
  
  scottDracula: new Object(char = "@", name = "Scott Dracula", wall = false, alive = true),
  
  throne: new Object(char = "!", name = "Throne", wall = true, alive = false),
  
  throneRoom: function() {
    var thisWorld = Game.createMap(creativeContent.throneTile, creativeContent.throneLegend);
    thisWorld.addObjectToMap(creativeContent.scottDracula, 10, 10);
    thisWorld.addObjectToMap(creativeContent.throne, 10, 5);
    return thisWorld;
  },
  
  
  iceWorld: function() {
  
  
  }
  
  
  
  
  
  
  
}




