var response = {
  done: function() {
    alert("done!");
    Game.engine.unlock();
    return true;
  },
  answer1: function() {
    alert("yes it is!");
    Game.engine.unlock();
    return true;
  }
}