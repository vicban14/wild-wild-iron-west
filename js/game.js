var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  scoreBoard: undefined,
  
   
  start: function (canvadId) {
    this.canvas = document.getElementById(canvadId);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    
    this.drawAll(this.ctx)

    
  },

  drawBackground: function(newCtx){
    var backgroundImg = new Image();
    backgroundImg.src = ("img/89b2c2ec21596b3.png")
    newCtx.drawImage(backgroundImg, background.posX, background.posY, background.width, background.height)
  },
  
  
  drawPlayer: function(newCtx){
    var cowboy = new Image();
    cowboy.src = ("img/gorro.png")
    newCtx.drawImage(cowboy, player1.posX, player1.posY, player1.width, player1.height)
    console.log(player1.posY)
  },

  drawAll: function (newCtx) {
    var IntervalID = setInterval(function(){
    newCtx.clearRect(0,0,1000,600);
    Game.drawBackground(newCtx);
    Game.drawPlayer(newCtx);
    },1000/60)
  }   
};

