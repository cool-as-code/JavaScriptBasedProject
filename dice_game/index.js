var randomNUmber1= Math.floor(Math.random()*6)+1;

var randomNUmber2= Math.floor(Math.random()*6)+1;
console.log(randomNUmber1);

if(randomNUmber1==1){
    document.querySelector("img.img1").setAttribute("src","images/dice1.png");
}
if(randomNUmber1==2){
    document.querySelector("img.img1").setAttribute("src","images/dice2.png");
}
if(randomNUmber1==3){
    document.querySelector("img.img1").setAttribute("src","images/dice3.png");
}
if(randomNUmber1==4){
    document.querySelector("img.img1").setAttribute("src","images/dice4.png");
}
if(randomNUmber1==5){
    document.querySelector("img.img1").setAttribute("src","images/dice5.png");
}
if(randomNUmber1==6){
    document.querySelector("img.img1").setAttribute("src","images/dice6.png");
}


//for seconde dice hui hui hui

if(randomNUmber2==1){
    document.querySelector("img.img2").setAttribute("src","images/dice1.png");
}
if(randomNUmber2==2){
    document.querySelector("img.img2").setAttribute("src","images/dice2.png");
}
if(randomNUmber2==3){
    document.querySelector("img.img2").setAttribute("src","images/dice3.png");
}
if(randomNUmber2==4){
    document.querySelector("img.img2").setAttribute("src","images/dice4.png");
}
if(randomNUmber2==5){
    document.querySelector("img.img2").setAttribute("src","images/dice5.png");
}
if(randomNUmber2==6){
    document.querySelector("img.img2").setAttribute("src","images/dice6.png");
}

//finding the winner;

if(randomNUmber1>randomNUmber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(randomNUmber1<randomNUmber2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}

else{
    document.querySelector("h1").innerHTML="Draw";
}