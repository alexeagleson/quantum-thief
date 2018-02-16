var tileSet = document.createElement("img");
tileSet.src = "http://ondras.github.io/rot.js/manual/tiles.png";

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

var display = new ROT.Display(options);
document.body.appendChild(display.getContainer());

var generate = function() {
    var map = new ROT.Map.Digger();
    map.create(function(x, y, value) {
        display.draw(x, y, value ? "#" : "a")
    });
}


tileSet.onload = generate;