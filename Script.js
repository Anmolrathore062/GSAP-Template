var tl = gsap.timeline()
tl.from("#nav h3",{
    y: -50,
    delay: 0.4,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
})

tl.from("#main h1",{
    x:-500,
    duration: 0.8,
    stagger:0.3,
    opacity:0,
    delay: 0.3,
})

tl.from("img",{
    x:100,
    rotation:45,
    opacity:0,
    duration:0.5,
    stagger:0.6,
})

tl.from("#footer h3", {
    y: -50,
    delay: 0.4,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
})