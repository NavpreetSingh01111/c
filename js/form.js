  class Form {
    constructor() {
       this.input = createInput("Name:");
      this.button = createButton("Play");
       this.title = createElement('h2')
       this.greeting = createElement('h3');
    }
  
  
    display(){

      this.title.html("Multipalyer Car Racing Game");
      this.title.position(displayWidth/2-200,displayHeight/2-350);

      
      this.input.position(displayWidth/2-200, displayHeight/2-150);
      this.button.position(displayWidth/2, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide()
       this.button.hide()
  
      player.name = this.input.value();
        
        playerCount =playerCount +1 ;
        player.index = playerCount
        player.update(player.name)
        player.updateCount(playerCount);

        this.greeting.html("Hello " + player.name )
        this.greeting.position(450, 160)
      });
  
    }

    hide(){
      this.input.hide()
      this.button.hide()
      this.greeting.hide()
      this.title.hide()
    }
  }
  
  