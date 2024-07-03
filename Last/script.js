gsap.from(".cat",{

    opacity:0,
    y:100,
    stagger:.4,
    duration:1,
    delay:2,
   scrollTrigger:{
    trigger:".Category",
    start:"top 50%",
    scrub:2,
    end:"top 0%"

   }

})
gsap.from(".choice",{

    opacity:0,
    y:100,
    stagger:.4,
    duration:1,
    delay:2,
   scrollTrigger:{
    trigger:".Category",
    start:"top 50%",
    scrub:2,
    end:"top 0%"

   }

})
