var tileSet = document.createElement("img");
tileSet.src = "http://ondras.github.io/rot.js/manual/tiles.png";

var Game = {
  display: null,

  init: function() {
    
    var options = {
        layout: "tile",
        bg: "transparent",
        tileWidth: 64,
        tileHeight: 64,
        tileSet: tileSet,
        tileMap: {
            "@": [0, 0],
            "#": [0, 64],
            "a": [64, 0],
            "!": [64, 64]
        }
    }
    
    this.display = new ROT.Display(options);
    document.body.appendChild(this.display.getContainer());

    this.generateMap()
  },
  
  generateMap: function() {
    var digger = new ROT.Map.Rogue();

    var digCallback = function(x, y, value) {
        
      // Calls this callback function when the map generator flags a wall (as 1)
      
      var key = x + "," + y;
      
      if (value) {
        this.map[key] = "#";
        return;
      }

      this.map[key] = "a";
    }
    
    digger.create(digCallback.bind(this));
    
    this.generateBoxes();

    this.drawWholeMap();
  },
  
  generateBoxes: function(freeCells) {
    for (var i = 0;i < 10; i++) {
      var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
      var key = freeCells.splice(index, 1)[0];
      this.map[key] = "!";
    }
  },
  
  drawWholeMap: function() {
    for (var key in this.map) {
      var parts = key.split(",");
      var x = parseInt(parts[0]);
      var y = parseInt(parts[1]);
      //this.display.draw(x, y, this.map[key]);
      
      this.display.draw(x, y, this.map[key])
    }
  }
}

Game.map = {};


