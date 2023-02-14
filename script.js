// Check JS is Connected
console.log('JS Connected');
import gsap from "gsap";


// Get a reference to the <g> element
var myGroup = document.getElementById("Purple S");
  
// Get all child elements of the <g> element
var groupChildren = myGroup.querySelectorAll("*");

gsap.from('#Tetris',
{
    x: -500,
    ease: "bounce",
});
