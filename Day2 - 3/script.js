var crsr = document.getElementById("cursor");
var crsrbg = document.getElementById("cursorbg");
document.addEventListener("mousemove", (dets)=>{
   crsr.style.left = dets.x +5+"px";
   crsr.style.top = dets.y+"px";
   crsrbg.style.left = dets.x - 250 +"px";
   crsrbg.style.top = dets.y -250+"px";
})

var crsrRToBeScaledFor = document.querySelectorAll(".crsrRToBeScaledFor");
crsrRToBeScaledFor.forEach(element => {
    element.addEventListener("mouseenter",()=>{
        crsr.style.scale = 3;
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "1px solid #fff";
    })  
    element.addEventListener("mouseleave",()=>{
        crsr.style.scale = 1;
        crsr.style.backgroundColor = "#ace022";
        crsr.style.border = "1px solid #ace022";
    })  
});
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
gsap.from("#about-us img, #about-us-in", {
    y:60,
    opacity:0,  
    duration : "1",
    scrollTrigger : {
        trigger : "#about-us",
        scroller : "body",   
        start : "top 60%",
        end : "top 58%",
        scrub : 2
    }
})
gsap.from(".card", {
    scale:0.8,
    opacity:0,  
    duration : "1",
    stagger : 0.1,
    scrollTrigger : {
        trigger : "#about-us",
        scroller : "body",   
        start : "top 70%",
        end : "top 55%",
        scrub : 2
    }
})
gsap.from("#colon1",{
    y: -90,
    x : -90,
    scrollTrigger : {
        trigger : "#colon1",
        scroller : "body",
        start : "top 50%",
        end :"top 47%",
        scrub : 4
    }
})
gsap.from("#colon2",{
    y: 90,
    x : 90,
    scrollTrigger : {
        trigger : "#colon1",
        scroller : "body",
        start : "top 50%",
        end :"top 47%",
        scrub : 4
    }
})
gsap.to("#page4Ext p",{
    y : 60,
    scrollTrigger : {
        trigger : "#page4Ext p",
        scroller : "body",
        scrub : 1

    }
})