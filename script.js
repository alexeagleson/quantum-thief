var Game = {
  display: null,

  init: function() {
    this.display = new ROT.Display();
    document.body.appendChild(this.display.getContainer());

    this.generateMap()
  },
  
  generateMap: function() {
    var digger = new ROT.Map.Digger();

    var digCallback = function(x, y, value) {
        if (value) { return; } /* do not store walls */

        var key = x + "," + y;
        this.map[key] = ".";
    }
    digger.create(digCallback.bind(this));

    this.drawWholeMap();
  },
  
  drawWholeMap: function() {
    for (var key in this.map) {
        var parts = key.split(",");
        var x = parseInt(parts[0]);
        var y = parseInt(parts[1]);
        this.display.draw(x, y, this.map[key]);
    }
  }
}

Game.map = {};


