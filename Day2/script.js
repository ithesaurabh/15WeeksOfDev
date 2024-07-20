var crsr = document.getElementById("cursor");
var crsrbg = document.getElementById("cursorbg");
document.addEventListener("mousemove", (dets)=>{
   crsr.style.left = dets.x +"px";
   crsr.style.top = dets.y+"px";
   crsrbg.style.left = dets.x - 250 +"px";
   crsrbg.style.top = dets.y -250+"px";
})


gsap.to("#nav", {
   backgroundColor :"#000",
   delay:0.5,
   height : 110,
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }
})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        start : "top -25%",
        end : "top -70%",
        scrub : 2
    }
})