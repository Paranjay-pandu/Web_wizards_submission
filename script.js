
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.addEventListener("mousemove", (dets)=>{
    gsap.to("#cursor", {
        x:dets.x-10,
        y:dets.y-10,
        ease: "power4.inout"
})

})

document.addEventListener("DOMContentLoaded", function(){
    const gs = gsap.timeline()
    gs.to("#loader video", {
        delay: 1,
        y: "-100%",
        display: "none",
        opacity: 0,
    })
    gs.to("#loader", {
        display: "none"
    })
})