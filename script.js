var tileSet = document.createElement("img");
tileSet.src = "https://cdn.glitch.com/65d1c64a-f6b1-4419-b107-12f1a855a66a%2FPeopleSpriteSheet3.png?1518898106569";

var Game = {
  display: null,
  menu: null,
  map: {},
  engine: null,
  player: null,
  menuOpen: false,
  
  allObjects: [],
  nonAffixedObjects: [],

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
    handlers.addMouseAndTouchListener(gameCanvas);
    document.body.appendChild(gameCanvas);
    
    this._createMenu();
    this._generateMap();

    var scheduler = new ROT.Scheduler.Simple();
    scheduler.add(this.player, true);

    this.engine = new ROT.Engine(scheduler);
    this.engine.start();

    view.createMoveButtons();
  },
  
  _createMenu: function () {
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

  _generateMap: function() {
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

    this._generateBoxes(freeCells);
    this._createPlayer(freeCells);
    
    this._drawWholeMap();
    
  },

  _createPlayer: function(freeCells) {
    var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
    var key = freeCells.splice(index, 1)[0];
    var parts = key.split(",");
    var x = parseInt(parts[0]);
    var y = parseInt(parts[1]);
    this.player = new Object(x, y);
    this.map[key]._objectsOnThisTile.push(this.player);
  },

  _generateBoxes: function(freeCells) {
    for (var i = 0; i < 10; i++) {
      var index = Math.floor(ROT.RNG.getUniform() * freeCells.length);
      var key = freeCells.splice(index, 1)[0];
      var parts = key.split(",");
      var x = parseInt(parts[0]);
      var y = parseInt(parts[1]);
      this.map[key] = new Tile(x, y, "!", false);
    }
  },

  _drawWholeMap: function() {
    for (var key in this.map) {
      var parts = key.split(",");
      var x = parseInt(parts[0]);
      var y = parseInt(parts[1]);
      this.map[key]._draw();
    }
  }
};

var view = {
  createMoveButtons: function() {
    var moveButtonsDiv = document.createElement("div");
    moveButtonsDiv.className = "moveButtons";
    var menuButtonsDiv = document.createElement("div");
    menuButtonsDiv.className = "menuButtons";

    var buttonLeft = document.createElement("button");
    var buttonRight = document.createElement("button");
    var buttonUp = document.createElement("button");
    var buttonDown = document.createElement("button");
    var buttonMenu = document.createElement("button");

    buttonLeft.className = "moveButton";
    buttonRight.className = "moveButton";
    buttonUp.className = "moveButton";
    buttonDown.className = "moveButton";
    buttonMenu.className = "menuButton";

    buttonLeft.innerText = "Left";
    buttonRight.innerText = "Right";
    buttonUp.innerText = "Up";
    buttonDown.innerText = "Down";
    buttonMenu.innerText = "Menu";

    buttonLeft.addEventListener("click", handlers.moveLeft);
    buttonRight.addEventListener("click", handlers.moveRight);
    buttonUp.addEventListener("click", handlers.moveUp);
    buttonDown.addEventListener("click", handlers.moveDown);
    buttonMenu.addEventListener("click", Game.toggleMenu);

    moveButtonsDiv.appendChild(buttonLeft);
    moveButtonsDiv.appendChild(buttonRight);
    moveButtonsDiv.appendChild(buttonUp);
    moveButtonsDiv.appendChild(buttonDown);

    menuButtonsDiv.appendChild(buttonMenu);

    document.body.appendChild(moveButtonsDiv);
    document.body.appendChild(menuButtonsDiv);
  },
  toggleMenu: function() {
    var moveButtonsDOM = document.getElementsByClassName("moveButtons")[0];
    var gameDisplayDOM = document.getElementsByClassName("gameDisplay")[0];
    var menuDisplayDOM = document.getElementsByClassName("menuDisplay")[0];
    
    if (Game.menuOpen === false) {
      Game.menuOpen = true;
      moveButtonsDOM.style.display = "block";
      gameDisplayDOM.style.display = "block";
      menuDisplayDOM.style.display = "none";
    } else {
      Game.menuOpen = false;
      moveButtonsDOM.style.display = "none";
      gameDisplayDOM.style.display = "none";
      menuDisplayDOM.style.display = "block";
    }
  },
}

var handlers = {
  moveLeft: function() {
    Game.player.move([-1, 0]);
  },
  moveRight: function() {
    Game.player.move([1, 0]);
  },
  moveUp: function() {
    Game.player.move([0, -1]);
  },
  moveDown: function() {
    Game.player.move([0, 1]);
  },
  addMouseAndTouchListener: function(gameCanvas) {

    var mousePos = { x:0, y:0 };
    
    gameCanvas.addEventListener("mousedown", function (e) {
      mousePos = getMousePos(gameCanvas, e);
      handlers.processMouseAndTouchInput(mousePos);
    }, false);
    
    // Set up touch events for mobile, etc
    gameCanvas.addEventListener("touchstart", function (e) {
      mousePos = getTouchPos(gameCanvas, e);

      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      handlers.processMouseAndTouchInput(mousePos);
      gameCanvas.dispatchEvent(mouseEvent);
      gameCanvas.dispatchEvent(e);
    }, false);

    // Get the position of a touch relative to the canvas
    function getTouchPos(canvasDom, touchEvent) {
      var rect = canvasDom.getBoundingClientRect();
      return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
      };
    }
    
    // Get the position of the mouse relative to the canvas
    function getMousePos(canvasDom, mouseEvent) {
      var rect = canvasDom.getBoundingClientRect();
      return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top
      };
    }
  },
  processMouseAndTouchInput(coords) {
    if (!Game.player.turnReady) {
      return;
    }
    
    var playerPixelX = (Game.player._x * 32);
    var playerPixelY = (Game.player._y * 32);

    var dx = coords.x - playerPixelX;
    var dy = coords.y - playerPixelY;

    if (dx > 0 && (Math.abs(dx) > Math.abs(dy))) {
      handlers.moveRight();
    } else if (dx < 0 && (Math.abs(dx) > Math.abs(dy))) {
      handlers.moveLeft();
    } else if (dy < 0 && (Math.abs(dy) > Math.abs(dx))) {
      handlers.moveUp();
    } else if (dy > 0 && (Math.abs(dy) > Math.abs(dx))) {
      handlers.moveDown();
    }
    Game.player.turnReady = false;
    setTimeout(function() { Game.player.turnReady = true; }, 250); 
  }
}

