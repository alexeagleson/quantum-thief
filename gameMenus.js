var Menu = function(textStrings, spaces, fgColours, responseFunction) {
  
  this.textStrings = textStrings;
  this.spaces = spaces;
  this.fgColours = fgColours;
  this.responseFunction = responseFunction;
  
  this.textStrings.push("{Continue}");
  this.spaces.push(2);
  this.fgColours.push("white");
  this.responseFunction["{Continue}"] = menuResponse.done;
    
  this.textAtLines = {};
  
  this.display = function() {
    Game.menu.clear();
    Game.currentMenuDisplay = this;
    var menuCanvas = Game.menu.getContainer();
    var currentLine = 2;
    var numLines = 0;
    
    for (var i = 0; i < this.textStrings.length; i++) {
      Game.menu.drawText(2, currentLine, "%c{" + this.fgColours[i] + "}" + this.textStrings[i], (Game.display._options.width - 4));
      numLines = Math.floor(this.textStrings[i].length / (Game.display._options.width - 4)) + 1;
      for (var j = 0; j < numLines; j++) {
        this.textAtLines[currentLine + j] = this.textStrings[i];
      }
      currentLine += (numLines + this.spaces[i]);
    }
    
    for (var i = 0; i < Game.display._options.width; i++) {
      for (var j = 0; j < Game.display._options.height; j++) {
        if (i === 0 || j === 0 || i === (Game.display._options.width - 1) || j === (Game.display._options.height - 1)) {
          Game.menu.drawText(i, j, "#", (Game.display._options.width - 2));
        }
      }
    }
    
    view.showMenu();
    this.handleMenuInput();
  };
  
  this.handleMenuInput = function() {
    Game.engine.lock();
    var menuCanvas = Game.menu.getContainer();
    menuCanvas.addEventListener("mousedown", this);
    menuCanvas.addEventListener("touchstart", this);
  },
    
  this.handleEvent = function(e) {
    var menuCanvas = Game.menu.getContainer();
    
    if (menuCanvas.style.display === "block") {
      if (e.type === "mousedown") {
        var mousePos = getMousePos(menuCanvas, e);
      } else if (e.type === "touchstart") {
        var mousePos = getTouchPos(menuCanvas, e);
      }

      var check = Game.currentMenuDisplay.responseFunction[Game.currentMenuDisplay.textAtLines[convertMouseTouchToTile(mousePos).y]]();
      
      if (check) {
        view.showGame();
        menuCanvas.removeEventListener("mousedown", this);
        menuCanvas.removeEventListener("touchstart", this);
        setTimeout(function() { 
          Game.engine.unlock(); 
        }, Game.gameSpeed);
      }
    }
  }
}

var view = {
  defineView: function() {
    var metaTag = document.getElementById("metaTag");
    metaTag.content = "user-scalable=no";
    metaTag.content = "initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=yes";
    
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    
    if (w > h) {
      Game.hudWidth = 10;
      Game.hudHeight = 20;
    } else {
      Game.hudWidth = 20;
      Game.hudHeight = 10;
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
    gameDisplayDOM.style.display = "none";
    menuDisplayDOM.style.display = "block";
  },
}


var menuResponse = {
  done: function() {
    return true;
  }
}