class FirstPage{
    constructor(){
        this.button = createButton('Register');
        this.button2 = createButton('Check');
        //this.title = createElement('h2');
    }
    hide(){
        this.button.hide();
        this.button2.hide();
        //this.title.hide();
    }
    display(){
        //this.tiltle.html("Check It!");
        //this.title.position(displayWidth/2-30,300);

        this.button.position(50,285);
        this.button2.position(200,285);

        this.button.mousePressed(()=>{
            gamestate = "secondStage";
            this.button.hide();
            this.button2.hide();
        })
    }
}