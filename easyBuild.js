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

  var digCallback = function(x, y, value) {
    var key = x + "," + y;  
    if (value) {
        totalMap.map[key] = new Tile(x, y, "#", true);
        return; 
      }
      totalMap.map[key] = new Tile(x, y, "a", false);
      totalMap.freeCells.push(key);
  }
  digger.create(digCallback.bind(this));
  
  
  var exampleGuy = new Object(10, 10, "!", "Scott Dracula", false);
  totalMap.addObjectToMap(exampleGuy);
  
  var emptyCell = totalMap.randomEmptyCellCoords();
  var exampleGuy = new Object(x = emptyCell.x, y = emptyCell.y, char = "@", name = "default name", wall = false, alive = false);
  totalMap.addObjectToMap(exampleGuy);
  
  Game.player = exampleGuy;
  
  return totalMap;
}
