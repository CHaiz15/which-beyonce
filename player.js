class Player {
  constructor(player) {
    this.name = player.name;
    this.time = player.time;
  }
  saveToStorage(Player) {
    var stringifiedObj = JSON.stringify(Player);
    localStorage.setItem("playerArray", stringifiedObj);
  }
}
