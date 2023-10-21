
var character =
document.getElementById("character");

var block1 =
document.getElementById("block1");



function jump()
 {
    if(character.classList.contains("animate")){return}

    character.classList.add("animate");setTimeout(() =>{

        character.classList.remove("animate");
    },500);

}

var checkDead = setInterval(function(){

var characterTop = 

parseInt(window.getComputedStyle(character).getPropertyValue("top"));

var block1Left = 

parseInt(window.getComputedStyle(block1).getPropertyValue("left"));


if(block1Left<110 && block1Left>100 && characterTop>=130){

block1.style.animation = "none";
block1.style.display = "none";
alert("You lose! Reload the page to play again");
}
},10);






var character =
document.getElementById("character");

var block2 =
document.getElementById("block2");



function jump()
 {
    if(character.classList.contains("animate")){return}

    character.classList.add("animate");setTimeout(() =>{

        character.classList.remove("animate");
    },500);

}

var checkDead = setInterval(function(){

var characterTop = 

parseInt(window.getComputedStyle(character).getPropertyValue("top"));

var block2Left = 

parseInt(window.getComputedStyle(block2).getPropertyValue("left"));


if(block2Left<110 && block2Left>100 && characterTop>=130){

block2.style.animation = "none";
block2.style.display = "none";
alert("You lose! Reload the page to play again");
}
},10);







var character =
document.getElementById("character");

var block3 =
document.getElementById("block3");



function jump()
 {
    if(character.classList.contains("animate")){return}

    character.classList.add("animate");setTimeout(() =>{

        character.classList.remove("animate");
    },500);

}

var checkDead = setInterval(function(){

var characterTop = 

parseInt(window.getComputedStyle(character).getPropertyValue("top"));

var block3Left = 

parseInt(window.getComputedStyle(block3).getPropertyValue("left"));


if(block3Left<110 && block3Left>100 && characterTop>=130){

block3.style.animation = "none";
block3.style.display = "none";
alert("You lose! Reload the page to play again");
}
},10);