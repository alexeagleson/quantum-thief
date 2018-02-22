var tileSet = document.createElement("img");
tileSet.src = "https://cdn.glitch.com/65d1c64a-f6b1-4419-b107-12f1a855a66a%2FPeopleSpriteSheet3.png?1518898106569";

var Game = {
  display: null,
  menu: null,
  currentMenuDisplay: null,
  
  map: {},
  engine: null,
  player: null,
  
  allObjects: [],
  inactiveObjects: [],
  activeObjects: [],

  init: function() {
    
    this.display = this.createCanvas("gameDisplay");
    this.display.getContainer().style.display = "block";

    if (true) {
      this.display.setOptions({
        width: Game.display._options.width,
        height: Game.display._options.height,
        layout: "tile",
        bg: "transparent",
        tileWidth: 32,
        tileHeight: 32,
        tileSet: tileSet,
        tileMap: {
          "@": multiplyBy32([0, 0]),
          "#": multiplyBy32([0, 1]),
          "a": multiplyBy32([1, 0]),
          "!": multiplyBy32([2, 7])
        }
      });
    }

    this.menu = this.createCanvas("menuDisplay");

    view.createMenuButton();
    
    this.generateMap();

    var scheduler = new ROT.Scheduler.Simple();
    
    this.activeObjects.forEach(function(object) {
      scheduler.add(object, true);
    })
    
    this.engine = new ROT.Engine(scheduler);
    this.engine.start();
  },
  
  createCanvas: function(className) {
    var options = {
      width: 25,
      height: 25,
      fontSize: 32,
      forceSquareRatio:true
    }

    thisRotDisplay = new ROT.Display(options);
    var thisCanvas = thisRotDisplay.getContainer();
    thisCanvas.className = className;
    document.body.appendChild(thisCanvas);
    thisCanvas.style.display = "none";
    return thisRotDisplay;
  },
  
  generateMap: function() {
    var digger = new ROT.Map.Rogue(Game.display._options.width, Game.display._options.height);
    var freeCells = [];

    var digCallback = function(x, y, value) {
      var key = x + "," + y;  
      if (value) {
          this.map[key] = new Tile(x, y, "#", true);
          return; 
        }

        this.map[key] = new Tile(x, y, "a", false);
        freeCells.push(key);
    }
    digger.create(digCallback.bind(this));

    this.generateBoxes(freeCells);
    
    this.player = this.createObject(freeCells);
    this.activeObjects.push(this.player);
    
    var secondObject = this.createObject(freeCells);
    this.activeObjects.push(secondObject);
    
    this.drawWholeMap();
    
  },

  createObject: function(freeCells) {
    var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
    var key = freeCells.splice(index, 1)[0];
    var parts = key.split(",");
    var x = parseInt(parts[0]);
    var y = parseInt(parts[1]);
    var newObject = new Object(x, y);
    this.map[key].objectsOnThisTile.push(newObject);
    return newObject;
  },

  generateBoxes: function(freeCells) {
    for (var i = 0; i < 10; i++) {
      var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
      var key = freeCells.splice(index, 1)[0];
      var parts = key.split(",");
      var x = parseInt(parts[0]);
      var y = parseInt(parts[1]);
      this.map[key] = new Tile(x, y, "!", false);
    }
  },

  drawWholeMap: function() {
    for (var key in this.map) {
      var parts = key.split(",");
      var x = parseInt(parts[0]);
      var y = parseInt(parts[1]);
      this.map[key].draw();
    }
  },
  
  /* input callback informs about map structure */
  checkIfWall: function(x, y) {
    if (x < 0 || x > Game.display._options.width - 1) {
      return false;
    } else if (y < 0 || y > Game.display._options.height - 1) {
      return false;
    }
    
    if (Game.map[x + "," + y].wall) { 
      return false; 
    }
    
    Game.map[x + "," + y].objectsOnThisTile.forEach(function(object) {
      if (object.wall) {
        return false;
      }
    });
    
    return true;
  }
  
};

var view = {
  
  menuOpen: false,
  
  createMenuButton: function() {
    var menuButtonsDiv = document.createElement("div");
    menuButtonsDiv.className = "menuButtons";

    var buttonMenu = document.createElement("button");
    buttonMenu.className = "menuButton";
    buttonMenu.innerText = "Menu";
    buttonMenu.addEventListener("click", view.showMenu);

    menuButtonsDiv.appendChild(buttonMenu);

    document.body.appendChild(menuButtonsDiv);
  },
  
  showGame: function() {
    var gameDisplayDOM = document.getElementsByClassName("gameDisplay")[0];
    var menuDisplayDOM = document.getElementsByClassName("menuDisplay")[0];
    
    view.menuOpen = false;
    
    gameDisplayDOM.style.display = "block";
    menuDisplayDOM.style.display = "none";
  },
  
  showMenu: function() {
    var gameDisplayDOM = document.getElementsByClassName("gameDisplay")[0];
    var menuDisplayDOM = document.getElementsByClassName("menuDisplay")[0];
    
    view.menuOpen = true;

    gameDisplayDOM.style.display = "none";
    menuDisplayDOM.style.display = "block";
  },
}


