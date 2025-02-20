const lamp = document .getElementById("lamp");
const turnOn = document .getElementById("turnOn");
const turnOff = document .getElementById("turnOff");

function islamobroken(){
    return lamp.scroll.indexOff('quebrada')> -1
}
function lampOn(){
    if(islamobroken()){
        lamp.src='./img/ligada.jpg';
    }
}
function lampOff(){
      if(!islamobroken)
    lamp.src=
}