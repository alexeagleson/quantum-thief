var tileSet = document.createElement("img");
//tileSet.src = "http://ondras.github.io/rot.js/manual/tiles.png";
//tileSet.src = "http://2.bp.blogspot.com/_VSJ0_iRR18s/SMaRLuujkvI/AAAAAAAAAPA/XJZS30OkEpI/s400/nethack.gif";
//tileSet.src = "http://2.bp.blogspot.com/-apOgGCUa2tY/UkrrvGC0lXI/AAAAAAAAABQ/INvtj-x66wM/s1600/PeopleSpriteSheet3.png";
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
    
    
    
    //<canvas name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
    
    this.display.getContainer().className = "gameDisplay";
    
    var gameCanvas = this.display.getContainer();
    

    handlers.addMouseAndTouchListener(gameCanvas);
    
    document.body.appendChild(this.display.getContainer());
    
    this._createMenu();

    this._generateMap();

    var scheduler = new ROT.Scheduler.Simple();
    scheduler.add(this.player, true);

    this.engine = new ROT.Engine(scheduler);
    this.engine.start();

    view.createMoveButtons();
    
    this.menu = new ROT.Display();
    
  },
  
  _createMenu: function () {
    this.menu = new ROT.Display();
    
    this.menu.setOptions({
        width: 20,
        height: 25,
        fontSize: 32,
      forceSquareRatio:true
    });
    this.menu.getContainer().className = "menuDisplay";
    this.menu.getContainer().style.display = "none";
    document.body.appendChild(this.menu.getContainer());

    this.menu.drawText(5,  2, "Hello world");

    /* last argument specifies maximum length */
    this.menu.drawText(1, 5, "This line of text is very long.", 18);

    this.menu.drawText(1, 10, "You coud use this menu to support something like character dialogue.  Maybe show a character %c{blue}portrait%c{} somewhere?  I dunno.  Either way it's prety %c{red}easy%c{} to use.", 18);
  },
  
  _showMenu: function() {
    debugger;
    
    var moveButtonsDOM = document.getElementsByClassName("moveButtons")[0];
    var gameDisplayDOM = document.getElementsByClassName("gameDisplay")[0];
    var menuDisplayDOM = document.getElementsByClassName("menuDisplay")[0];
    
    if (this.menuOpen === false) {
      this.menuOpen = true;
      moveButtonsDOM.style.display = "block";
      gameDisplayDOM.style.display = "block";
      menuDisplayDOM.style.display = "none";
    } else {
      this.menuOpen = false;
      moveButtonsDOM.style.display = "none";
      gameDisplayDOM.style.display = "none";
      menuDisplayDOM.style.display = "block";
    }
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

var Tile = function(x, y, char, wall) {
  this._x = x;
  this._y = y;
  this._wall = wall;
  this._char = char;

  this._objectsOnThisTile = [];

  this._draw = function() {
    Game.display.draw(this._x, this._y, Game.map[this._x + "," + this._y]._char);
    
    this._objectsOnThisTile.forEach(function(object) {
      Game.display.draw(object._x, object._y, object._char);
    });
  };
}

var Object = function(x, y) {
  this._x = x;
  this._y = y;
  this._char = "@";

  this.move = function(directionArray) {
    var newX = this._x + directionArray[0];
    var newY = this._y + directionArray[1];
    var newKey = newX + "," + newY;
    
    if (!(newKey in Game.map)) {
      return; 
    }
    
    if (Game.map[newX + "," + newY]._wall) {
      return;
    }

    Game.map[this._x + "," + this._y]._objectsOnThisTile = [];
    Game.map[this._x + "," + this._y]._draw();
    this._x = newX;
    this._y = newY;
    Game.map[this._x + "," + this._y]._objectsOnThisTile.push(this);
    Game.map[this._x + "," + this._y]._draw();
  };  
}


    
Object.prototype.act = function() {
    Game.engine.lock();
    window.addEventListener("keydown", this);
}
    
Object.prototype.handleEvent = function(e) {
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
    /* one of numpad directions? */
    if (!(code in keyMap)) { return; }

    /* is there a free space? */
    var dir = ROT.DIRS[8][keyMap[code]];

    this.move(dir);
  
    window.removeEventListener("keydown", this);
    Game.engine.unlock();
}


var view = {
  createMoveButtons: function() {
    /*
    var thisOne = document.getElementById("thisONe");

    var gameDisplayDOM = document.getElementsByClassName("gameDisplay")[0];
    var mc = new Hammer(gameDisplayDOM);



    // listen to events...
    mc.on("panleft panright tap press", function(ev) {



    if (ev.type === "tap") {
      var gameDisplayDOM = document.getElementsByClassName("gameDisplay")[0];
      var gameDisplayRect = gameDisplayDOM.getBoundingClientRect();
      

      var tapPixelX = ev.center.x - gameDisplayRect.x;
      var tapPixelY = ev.center.y - gameDisplayRect.top;
      
      var playerPixelX = (Game.player._x * 32);
      var playerPixelY = (Game.player._y * 32);
      
      var dx = tapPixelX - playerPixelX;
      var dy = tapPixelY - playerPixelY;
      
      thisOne.innerHTML = ev.type + " gesture detected " + tapPixelX + " , " + tapPixelY + "window " + window.devicePixelRatio;
      
      if (dx > 0 && (Math.abs(dx) > Math.abs(dy))) {
        handlers.moveRight();
      } else if (dx < 0 && (Math.abs(dx) > Math.abs(dy))) {
        handlers.moveLeft();
      } else if (dy < 0 && (Math.abs(dy) > Math.abs(dx))) {
        handlers.moveUp();
      } else if (dy > 0 && (Math.abs(dy) > Math.abs(dx))) {
        handlers.moveDown();
      }
      
      console.log(dx, dy);
      //console.log(tapPixelX, tapPixelY);
    }
    console.log(ev);
    console.log(window);
  });
  */
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
  buttonMenu.addEventListener("click", Game._showMenu);

  moveButtonsDiv.appendChild(buttonLeft);
  moveButtonsDiv.appendChild(buttonRight);
  moveButtonsDiv.appendChild(buttonUp);
  moveButtonsDiv.appendChild(buttonDown);

  menuButtonsDiv.appendChild(buttonMenu);

  document.body.appendChild(moveButtonsDiv);
  document.body.appendChild(menuButtonsDiv);
    
  }
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
    var thisOne = document.getElementById("thisOne");
    
    gameCanvas.addEventListener("mousedown", function (e) {
      mousePos = getMousePos(gameCanvas, e);
      thisOne.innerHTML = mousePos.x + "," + mousePos.y;
    }, false);
    
    // Set up touch events for mobile, etc
    gameCanvas.addEventListener("touchstart", function (e) {
      mousePos = getTouchPos(gameCanvas, e);
      
      
      //console.log(mousePos);
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      thisOne.innerHTML = mousePos.x + "," + mousePos.y;
      //processMouseAndTouchInput
      gameCanvas.dispatchEvent(mouseEvent);
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
  }
}

