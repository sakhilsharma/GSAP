var initialPath = `M 10 100 Q 500 100 1500 100`;

var finalPath = `M 10 100 Q 500 100 1500 100`;
var string = document.querySelector("#string");

string.addEventListener("mousemove", function (event) {
    path = `M 10 100 Q ${event.x} ${event.y} 1500 100`, //in svg path value of y decides curve shape
        gsap.to("svg path", {
            attr: { d: path }, //changing attrinbute by attr property;
            duration:0.3,
            ease:"power3.out", //easing is the primary way to change the timing of your element
            //still does'nt return to div back next gsap
        })
        
    
})
string.addEventListener("mouseleave",(event)=>{
gsap.to("svg path",{
    attr:{d:finalPath},
    duration:1.5,
    ease:"elastic.out(1,0.2)",
})
})