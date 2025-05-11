const mybox=document.getElementById("mybox");
const mybutton=document.getElementById("mybutton");

function changeColor(event){

    event.target.style.backgroundColor="YELLOW";
    event.target.textContent="HAPPY MOTHER'S DAY💕 !";}
mybox.addEventListener("click",changeColor);

mybutton.addEventListener("click",event => {
    mybox.style.backgroundColor="blue";
    mybox.textContent="NOOOO MOMMY, CLICK INSIDE THE BOX!😎";});

    mybox.addEventListener("mouseover",event => {
    event.target.style.backgroundColor="blue";
    event.target.textContent="Almost there!😎";});


mybutton.addEventListener("mouseover",event => {
    mybox.style.backgroundColor="blue";
    mybox.textContent="Almost there!😎";});

mybox.addEventListener("mouseout",event => {
    event.target.style.backgroundColor="green";
    event.target.textContent="Wait, comeback!😢😢😢";});

