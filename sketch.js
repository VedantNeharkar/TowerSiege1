const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 m    
var engine, world;
function setup(){
     createCanvas(800,400);

     engine = Engine.create();
     world = engine.world;

     box1 = new BlueBox(500,360,20,30);
     box2 = new YellowBox(520,360,20,30);
     box3 = new GreenBox(540,360,20,30);
     box4 = new RedBox(560,360,20,30);
     box5 = new GreenBox(580,360,20,30);
     box6 = new YellowBox(600,360,20,30);


     box7 = new RedBox(510,330,20,30);
     box8 = new YellowBox(530,330,20,30);
     box9 = new BlueBox(550,330,20,30);
     box10 = new GreenBox(570,330,20,30);
     box11 = new RedBox(590,330,20,30);

     box12 = new YellowBox(520,300,20,30);
     box13 = new RedBox(540,300,20,30);
     box14 = new GreenBox(560,300,20,30);
     box15 = new YellowBox(580,300,20,30);
   
     box16 = new GreenBox(530,270,20,30);
     box17 = new BlueBox(550,270,20,30);
     box18 = new YellowBox(570,270,20,30);

     box19 = new BlueBox(540,240,20,30);
     box20 = new GreenBox(560,240,20,30);

     box21 = new RedBox(550,210,20,30);

    box22 = new GreenBox(500,135,20,30);
    box23 = new RedBox(520,135,20,30);
    box24 = new YellowBox(540,135,20,30);
    box25 = new BlueBox(560,135,20,30);

   box26 = new RedBox(510,135,20,30);
   box27 = new YellowBox(530,135,20,30);
   box28 = new GreenBox(520,135,20,30);

   box29 = new YellowBox(520,135,20,30);
   box30 = new BlueBox(540,135,20,30);

   box31 = new BlueBox(530,135,20,30);

   Ground = new Platform(550,160,200,20);
   Spring = new Projectile(400,390,800,20);
   groundHovering = new Platform(550,160,200,20);
   ball = new Ball(0,0,50);

}
function draw(){

    background(247 , 223, 178);
    Engine.update(engine);

    debug:true;

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
   
   ball.display();
   spring.display();
   ground.display();
   groundHovering.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
spring.release(); 

}
