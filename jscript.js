var menuButton=document.getElementById("button");
var sideNav=document.getElementById("container");
var menu=document.getElementById("menu");
sideNav.style.left="-250px";
menuButton.onclick= function (){
    if(sideNav.style.left=="-250px"){
        sideNav.style.left="0";
        menu.src="images/close.png";
    }
    else{
        sideNav.style.left="-250px";
        menu.src="images/menu.png";
    }
}
// adding the onclick feature in button 
var button=document.getElementById("btn");
button.onclick=()=>{
    button.style.background="white";
    button.style.color="black";
}