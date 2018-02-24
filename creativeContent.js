var creativeContent = {
  throneTile: "https://i.imgur.com/lSASTwO.png",
  
  throneLegend: {
    "#": multiplyBy32([1, 0]),
    ".": multiplyBy32([2, 0]),
    "@": multiplyBy32([0, 0]),
    "!": multiplyBy32([1, 2]),
    "<": multiplyBy32([3, 0]),
    ">": multiplyBy32([4, 0])
  },
  
  scottDracula: new Object(char = "@", name = "Scott Dracula", wall = false, alive = true),
  
  throneRoom: function() {
    var thisWorld = Game.createMap(creativeContent.throneTile, creativeContent.throneLegend);
    thisWorld.addObjectToMap(creativeContent.scottDracula, 10, 10);
    thisWorld.addObjectToMap(creativeContent.throne, 10, 5);
    return thisWorld;
  },
  
  iceUniverse: function() {
    var iceUniverse = [];
    
    for (var i = 0; i < 5; i++) {
      iceUniverse[i] = Game.createMap(creativeContent.throneTile, creativeContent.throneLegend);
      var emptyCell = iceUniverse[i].randomEmptyCellCoords();
      iceUniverse[i].addObjectToMap(new Object(char = "!", name = "Throne", wall = false, alive = false), emptyCell.x, emptyCell.y);
      
      var emptyCell = iceUniverse[i].randomEmptyCellCoords();
      iceUniverse[i].addObjectToMap(new Object(char = "<", name = "Upstairs", wall = false, alive = false), emptyCell.x, emptyCell.y);
      
      var emptyCell = iceUniverse[i].randomEmptyCellCoords();
      iceUniverse[i].addObjectToMap(new Object(char = ">", name = "Downstairs", wall = false, alive = false), emptyCell.x, emptyCell.y);
      
    }
    
    var emptyCell = iceUniverse[0].randomEmptyCellCoords();
    iceUniverse[0].addObjectToMap(creativeContent.scottDracula, emptyCell.x, emptyCell.y);
    
    return iceUniverse;
  
  }
  
}




