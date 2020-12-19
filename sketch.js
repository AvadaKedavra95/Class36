var database;
var gameState = 0;
var playerCount;
var game, player, form;

function setup(){
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){

}


