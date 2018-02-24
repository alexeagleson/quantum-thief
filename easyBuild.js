var staticMap = function() {

    thisMap = {};
  
    var digger = new ROT.Map.Arena(Game.display._options.width, Game.display._options.height);
    var freeCells = [];

    var digCallback = function(x, y, value) {
      var key = x + "," + y;  
      if (value) {
          Game.map[key] = new Tile(x, y, "#", true);
          return; 
        }

        Game.map[key] = new Tile(x, y, "a", false);
        freeCells.push(key);
    }
    digger.create(digCallback.bind(this));
    
    Game.player = Game.createObject(freeCells);
    Game.activeObjects.push(Game.player);
    Game.player.name = "bob";
    
    for (var i = 0; i < 5; i ++) {
      var anotherObject = Game.createObject(freeCells);
      anotherObject.char = "!";
      Game.activeObjects.push(anotherObject);
    }
    

  
  
}