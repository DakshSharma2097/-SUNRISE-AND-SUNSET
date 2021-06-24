const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImage;

var bg="sunrise1.png" ;
var Hour;

var sunrise1,sunrise2,sunrise3,sunrise4,sunrise5,sunrise6;
var sunset7,sunset8,sunset9,sunset10,sunset11,sunset12;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

   if(bgImage){
    background(bgImage)
   }
   console.log(Hour)

    Engine.update(engine);

   fill ("black")
   textSize(25)
   if(Hour>=12){ 
       text("Time : "+ Hour + " PM", 50,100); }
   else if(Hour==0)
   { text("Time : 12 AM",100,100); }
   else{ text("Time : "+ Hour + " AM", 50,100); }
}

async function getBackgroundImg(){

   var response= await fetch ("http://worldtimeapi.org/api/timezone/Pacific/Auckland");

   var JSON= await response.json();
   var dateTime= JSON.datetime;

   var Hour= dateTime.slice(11,13) 

    if(Hour>=06&&Hour<=09){
        bg="sunrise1.png"
    }
    else if(Hour>09&&Hour<=12){
        bg="sunrise3.png"
    }
    else if(Hour>12&&Hour<=15){
        bg="sunrise5.png"
    }
    else if(Hour>15&&Hour<=19){
        bg="sunrise6.png"
    }
    else if(Hour>19&&Hour<=22){
        bg="sunset7.png"
    }
    else if(Hour>22&&Hour==01){
        bg="sunset9.png"
    }
    else if(Hour>01&&Hour<=03){
        bg="sunset11.png"
    }
    else if(Hour>03&&Hour<6){
        bg="sunset12.png"
    }
    bgImage= loadImage(bg)
    console.log(Hour)
}
