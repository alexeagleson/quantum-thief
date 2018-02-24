var staticMap = function() {

    var thisMap = {};
  
    var tileSet = document.createElement("img");
    tileSet.src = "https://cdn.glitch.com/8d5360ec-82cb-4488-81d6-164fd5245bb1%2Fsssss.png?1519350658180";
  
    var tileLegend = {
        width: Game.display._options.width,
        height: Game.display._options.height,
        layout: "tile",
        bg: "transparent",
        tileWidth: 32,
        tileHeight: 32,
        tileSet: tileSet,
        tileMap: {
          "@": multiplyBy32([0, 0]),
          "#": multiplyBy32([0, 5]),
          "a": multiplyBy32([1, 0]),
          "!": multiplyBy32([2, 0])
        }
      };
  
    var totalMap = new CompleteMap(thisMap, tileSet, tileLegend);
  
    var digger = new ROT.Map.Arena(Game.display._options.width, Game.display._options.height);
    var freeCells = [];

    var digCallback = function(x, y, value) {
      var key = x + "," + y;  
      if (value) {
          totalMap.map[key] = new Tile(x, y, "#", true);
          return; 
        }
        totalMap.map[key] = new Tile(x, y, "a", false);
        freeCells.push(key);
    }
    digger.create(digCallback.bind(this));
    

  
  
  
  
  
  
  
  
  
  

    
    for (var i = 0; i < 5; i ++) {
      var anotherObject = Game.createObject(freeCells, totalMap.map);
      anotherObject.char = "!";
      Game.activeObjects.push(anotherObject);
    }

    return totalMap;
  
  
}