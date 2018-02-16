var tileSet = document.createElement("img");
tileSet.src = "http://ondras.github.io/rot.js/manual/tiles.png";

var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.draw();
}

Player.prototype.draw = function() {
    Game.display.draw(this.x, this.y, "@");
}

Player.prototype.act = function() {
  Game.engine.lock();
  /* wait for user input; do stuff when user hits a key */
  window.addEventListener("keydown", this);
}
 
Player.prototype.handleEvent = function(e) {
  var keyMap = {};
  keyMap[38] = 0;
  keyMap[33] = 1;
  keyMap[39] = 2;
  keyMap[34] = 3;
  keyMap[40] = 4;
  keyMap[35] = 5;
  keyMap[37] = 6;
  keyMap[36] = 7;

  var code = e.keyCode;

  if (!(code in keyMap)) {
    return;
  }

  var diff = ROT.DIRS[8][keyMap[code]];
  var newX = this.x + diff[0];
  var newY = this.y + diff[1];

  var newKey = newX + "," + newY;
  if (!(newKey in Game.map)) {
    return;
  } /* cannot move in this direction */
  
  Game.display.draw(this.x, this.y, Game.map[this.x + "," + this.y]);
  this.x = newX;
  this.y = newY;
  this.draw();

  window.removeEventListener("keydown", this);
  Game.engine.unlock();
  
}

var Game = {
  map: {},
  
  display: null,
  
  player: null,
  
  engine: null,

  init: function() {
    
    debugger;
    
    var scheduler = new ROT.Scheduler.Simple();
    scheduler.add(this.player, true);
    this.engine = new ROT.Engine(scheduler);
    this.engine.start();
    
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
    var freeCells = [];

    var digCallback = function(x, y, value) {
        
      // Calls this callback function when the map generator flags a wall (as 1)
      
      var key = x + "," + y;
      
      if (value) {
        this.map[key] = "#";
        return;
      }

      this.map[key] = "a";
      freeCells.push(key);
    }
    
    digger.create(digCallback.bind(this));
    
    this.generateBoxes(freeCells);

    this.drawWholeMap();
    
    this.createPlayer(freeCells);
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
      
      this.display.draw(x, y, this.map[key])
    }
  },
  
  createPlayer: function(freeCells) {
      var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
      var key = freeCells.splice(index, 1)[0];
      var parts = key.split(",");
      var x = parseInt(parts[0]);
      var y = parseInt(parts[1]);
      this.player = new Player(x, y);
  },
  
}

