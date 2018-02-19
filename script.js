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
    
    var options = {
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
    }
    
    this.display = new ROT.Display(options);
    var gameCanvas = this.display.getContainer();
    gameCanvas.className = "gameDisplay";
    document.body.appendChild(gameCanvas);

    this.createMenu();
    view.createMenuButton();
    
    this.generateMap();

    var scheduler = new ROT.Scheduler.Simple();
    
    this.activeObjects.forEach(function(object) {
      scheduler.add(object, true);
    })
    

    this.engine = new ROT.Engine(scheduler);
    this.engine.start();
  },
  
  createMenu: function () {
    this.menu = new ROT.Display();
    
    this.menu.setOptions({
      width: 40,
      height: 50,
      fontSize: 16,
      forceSquareRatio:true
    });
    
    this.menu.getContainer().className = "menuDisplay";
    this.menu.getContainer().style.display = "none";
    document.body.appendChild(this.menu.getContainer());

    this.menu.drawText(1, 10, "You coud use this menu to support something like character dialogue.  Maybe show a character %c{blue}portrait%c{} somewhere?  I dunno.  Either way it's prety %c{red}easy%c{} to use.", 38);
  },

  generateMap: function() {
    var digger = new ROT.Map.Rogue(20, 25);
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
    alert("Hello!" + x + y);
    // Tells whether a tile can be passed through
    console.log(this.map);
    if (typeof(this.map[x + "," + y]) != "undefined") {
      return (!Game.map[x + "," + y].wall);
    } else {
      return false;
    }
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
    var gameDisplayDOM = document.getElementsByClassName("gameDisplay")[0];
    var menuDisplayDOM = document.getElementsByClassName("menuDisplay")[0];
    
    if (view.menuOpen === false) {
      view.menuOpen = true;
      gameDisplayDOM.style.display = "none";
      menuDisplayDOM.style.display = "block";
    } else {
      view.menuOpen = false;
      gameDisplayDOM.style.display = "block";
      menuDisplayDOM.style.display = "none";
    }
  },
}


