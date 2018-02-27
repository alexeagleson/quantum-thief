var Menu = function(textStrings, responseFunction, object) {
  
  this.textStrings = textStrings;
  this.spaces = [];
  this.fgColours = [];
  this.responseFunction = responseFunction;  
  this.textAtLines = {};
  this.object = object;
  
  this.display = function() {  
    if (this.textStrings[this.textStrings.length - 1][0] != "{") {
      this.textStrings.push("{Goodbye}");
      this.responseFunction["{Goodbye}"] = menuResponse.done;
    }
    
    if (this.object) {
      if (this.object.allowSteal) {
        if (this.textStrings[this.textStrings.length - 1] != "{Yoink!}") {
          Game.player.myCurrentChat = object;
          this.textStrings.push("{Yoink!}");
          this.responseFunction["{Yoink!}"] = menuResponse.steal;
        }
      }
    }
    
    
    for (var i = 0; i < this.textStrings.length; i++) {
      if (i === 0) {
        this.spaces.push(0);
        this.fgColours.push("red");
      } else if (i === 1) {
        this.spaces.push(1);
        this.fgColours.push("lightyellow");
      } else {
        this.spaces.push(1);
        this.fgColours.push("green");
      }
    }
    
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
      }
      setTimeout(function() { 
        Game.engine.unlock(); 
      }, Game.gameSpeed);
    }
  }
}

var view = {
  defineView: function() {
    var metaTag = document.getElementById("metaTag");
    //metaTag.content = "user-scalable=no";
    //metaTag.content = "initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=yes";
    
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    if (w > h) {
      Game.hudWidth = Game.gameWidth / 2;
      Game.hudHeight = Game.gameHeight;
    } else {
      Game.hudWidth = Game.gameWidth;
      Game.hudHeight = Game.gameHeight / 2;
    }
    
    var windowScaler = Math.min(w, h);
    var gameScaler = Game.gameWidth * 32;
    
    var finalScaler = (gameScaler / windowScaler) * 0.6;
    var finalScaler = 1;
    
    //metaTag.content = "initial-scale=" + finalScaler + ", maximum-scale=" + finalScaler + ", minimum-scale=" + finalScaler + ", user-scalable=yes";
    
    Game.totalDiv = document.createElement("div");
    Game.mainDisplayDiv = document.createElement("div");
    Game.hudDiv = document.createElement("div");
    
    Game.totalDiv.className = "totalDiv";
    Game.mainDisplayDiv.className = "mainDisplayDiv";
    Game.hudDiv.className = "hudDiv";
    
    Game.display = Game.createCanvas("gameDisplay", Game.gameWidth, Game.gameHeight);
    Game.display.getContainer().style.display = "block";
    
    Game.menu = Game.createCanvas("menuDisplay", Game.gameWidth, Game.gameHeight);
    Game.menu.getContainer().style.display = "none";
    
    Game.gameHUD = Game.createCanvas("gameHUD", Game.hudWidth, Game.hudHeight);
    Game.gameHUD.getContainer().style.display = "block";
    
    Game.mainDisplayDiv.appendChild(Game.display.getContainer());
    Game.mainDisplayDiv.appendChild(Game.menu.getContainer());
    Game.hudDiv.appendChild(Game.gameHUD.getContainer());
  
    Game.totalDiv.appendChild(Game.hudDiv);
    Game.totalDiv.appendChild(Game.mainDisplayDiv);    

    document.body.appendChild(Game.totalDiv);
  },
  
  showGame: function() {
    var gameDisplayDOM = document.getElementsByClassName("gameDisplay")[0];
    var menuDisplayDOM = document.getElementsByClassName("menuDisplay")[0];
    gameDisplayDOM.style.display = "block";
    menuDisplayDOM.style.display = "none";
    setTimeout(function() { Game.faceHUD(null, null); }, 10);
  },
  
  showMenu: function() {
    var gameDisplayDOM = document.getElementsByClassName("gameDisplay")[0];
    var menuDisplayDOM = document.getElementsByClassName("menuDisplay")[0];
    gameDisplayDOM.style.display = "none";
    menuDisplayDOM.style.display = "block";
  },
}






var showMenu = function(dialogue, object) {
  var thisMenu = new Menu(dialogue.textStrings, dialogue.responseFunction, object);
  thisMenu.display();
}