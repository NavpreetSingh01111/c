  class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    
  
    car1 = createSprite(200,200)
    car2 = createSprite(400,200)
    car3 = createSprite(600,200)
    car4 = createSprite(800,200)
  cars = [car1,car2,car3,car4]
    }



    play(){
      form.hide()
      
Player.getPlayerInfo();
var  x = 0;
var y ;
var index = 0;
 for (var b in allplayers){
   background("red")
  index = index + 1;
  x = x+ 200
  y = displayHeight -allplayers[b].distance

  cars [index - 1].x = x
  cars[index-1].y = y
   if (index === player.index){
    cars [index - 1].shapeColor = "blue"
    camera.position.x = displayWidth/2
    camera.position.y =   cars[index-1].y 
     }
 }

      if (keyIsDown(UP_ARROW) && player.index !== null){
player.distance = player.distance + 50;
player.update();
      }
    }

    
  
  
  }
  