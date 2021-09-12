function myFunction(){
var r1= Math.random();
r1=r1*6;
r1= Math.floor(r1)+1;
var img1="images/dice"+r1+".png";
document.querySelectorAll("img")[0].setAttribute("src",img1);
var r2= Math.random();
r2=r2*6;
r2= Math.floor(r2)+1;
var img2="images/dice"+r2+".png";
document.querySelectorAll("img")[1].setAttribute("src",img2);
if(r1>r2){
    document.querySelector("h1").innerHTML="Player 1 Wins..";
}
else if(r2>r1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins..";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
}
function reload() {
    reload = location.reload();
}
