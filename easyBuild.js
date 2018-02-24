var staticMap = function() {

    var thisMap = {};
  
    //tileSet = document.createElement("img");
    //thisMap.tileSet.src = "https://cdn.glitch.com/8d5360ec-82cb-4488-81d6-164fd5245bb1%2Fsssss.png?1519350658180";
  
  
    var digger = new ROT.Map.Arena(Game.display._options.width, Game.display._options.height);
    var freeCells = [];

    var digCallback = function(x, y, value) {
      var key = x + "," + y;  
      if (value) {
          thisMap[key] = new Tile(x, y, "#", true);
          return; 
        }
        thisMap[key] = new Tile(x, y, "a", false);
        freeCells.push(key);
    }
    digger.create(digCallback.bind(this));
    
    
  
  
  
  
  
  
  
  
  
  
  
    Game.player = Game.createObject(freeCells, thisMap);
    Game.activeObjects.push(Game.player);
    Game.player.name = "bob";
    
    for (var i = 0; i < 5; i ++) {
      var anotherObject = Game.createObject(freeCells, thisMap);
      anotherObject.char = "!";
      Game.activeObjects.push(anotherObject);
    }

    return thisMap;
  
  
}