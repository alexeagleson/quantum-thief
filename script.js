var tileSet = document.createElement("img");
tileSet.src = "https://cdn.glitch.com/65d1c64a-f6b1-4419-b107-12f1a855a66a%2FPeopleSpriteSheet3.png?1518898106569";

var Game = {
  display: null,
  menu: null,
  
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
        width: 20,
        height: 25,
        layout: "tile",
        bg: "transparent",
        tileWidth: 32,
        tileHeight: 32,
        tileSet: tileSet,
        tileMap: {
          "@": [0, 0],
          "#": [0, 32],
          "a": [32, 0],
          "!": [256, 96]
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
      width: 20,
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
    buttonMenu.addEventListener("click", view.toggleMenu);

    menuButtonsDiv.appendChild(buttonMenu);

    document.body.appendChild(menuButtonsDiv);
  },
  
  toggleMenu: function() {
    if (view.menuOpen === false) {
      view.menuOpen = true;
      view.showMenu("This is the standard game menu.");
    } else {
      view.menuOpen = false;
      view.showGame();
    }
  },
  
  showGame: function() {
    var gameDisplayDOM = document.getElementsByClassName("gameDisplay")[0];
    var menuDisplayDOM = document.getElementsByClassName("menuDisplay")[0];
    
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


function showDialogue(name, dialogue) {
  Game.menu.clear();
  Game.menu.drawText(2, 2, "%c{red}" + name, (Game.display._options.width - 4));
  Game.menu.drawText(2, 3, dialogue, (Game.display._options.width - 4));
  
  for (var i = 0; i < Game.display._options.width; i++) {
    for (var j = 0; j < Game.display._options.height; j++) {
      if (i === 0 || j === 0 || i === (Game.display._options.width - 1) || j === (Game.display._options.height - 1)) {
        Game.menu.drawText(i, j, "#", (Game.display._options.width - 2));
      }
    }
  }
  view.showMenu();
}