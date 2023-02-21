// Check JS is Connected
console.log('JS Connected');



/*
gsap.fromTo(document.getElementsByTagName('.Tetris')[0],
{
    x: 50 
}, 
    {
        x:100, duration:2, 
        repeat:-1, 
        yoyo:true
    }
        
        
        );


gsap.fromTo('h1', 
        {  
  x:0, 
  y: 400, 
  scale:2
  
},
            {
  y:0,
  rotation:360,
  scale:1,
  duration:2,
  repeat:-1,
  yoyo:true,
  repeatDelay:1
}
            
       );
       
       const svg_data = document.querySelector('#svg_dat').contentDocument;
       const tetris = svg_data.getElementById('Tetris');
       
       gsap.to(tetris, {x: 100});
       gsap.to(tetris, {x:200, rotation:10, yoyo:true, repeat:-1, ease: 'power1', duration:1});


const svg_data = document.querySelector('#svg_dat').contentDocument;
const tetris = svg_data.getElementById('Purple S');


gsap.to(tetris, {x:200, rotation:10, yoyo:true, repeat:-1, ease: 'power1', duration:1});
*/


const svg_data = document.querySelector('#svg_dat').contentDocument;

const T1 = svg_data.getElementById('Red T');

const E = svg_data.getElementById('Orange E');

const T2 = svg_data.getElementById('Yellow T');

const R = svg_data.getElementById('Green R');

const I = svg_data.getElementById('Line Block');

const S = svg_data.getElementById('Purple S');

/*
const moving = () => { 
    let tl = gsap.timeline({
    defaults: {
        y: -50, 
        yoyo:true, 
        repeat:-1, 
        ease: 'bounce', 
        autoAlpha:1,
        duration:1
    }
})
    tl.from('E', {})
    return tl;
    }
*/ //couldnt make this work
gsap.from(T1, {
    y: -50, 
    yoyo:true, 
    repeat:-1, 
    ease: 'bounce', 
    duration:1
});
gsap.from(E, {
    y: -50, 
    yoyo:true, 
    delay:.5,
    repeat:-1, 
    ease: 'bounce', 
    duration:1
});
gsap.from(T2, {
    y: -50, 
    yoyo:true, 
    delay:1,
    repeat:-1, 
    ease: 'bounce', 
    duration:1
});
gsap.from(R, {
    y: -50, 
    yoyo:true, 
    delay:1.5,
    repeat:-1, 
    ease: 'bounce', 
    duration:1
});
gsap.from(I, {
    y: -50, 
    yoyo:true, 
    delay:2,
    repeat:-1, 
    ease: 'bounce', 
    duration:1
});
gsap.from(S, {
    y: -50, 
    yoyo:true, 
    delay:2.5,
    repeat:-1, 
    ease: 'bounce', 
    duration:1
});

//issues:
//viewbox is messed up, when i change it, it scales my image
//my script is inefficient and ugly
//lacks the the effect i want
//this is not a finished product


/*

*/