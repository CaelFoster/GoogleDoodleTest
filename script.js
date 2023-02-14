// Check JS is Connected
console.log('JS Connected');
import gsap from "gsap";



gsap.fromTo(document.getElementsByTagName('Tetris')[0],
{
    x: 50 
}, 
    {
        x:100, duration:2, 
        repeat:-1, 
        yoyo:true
    }
        
        
        );
