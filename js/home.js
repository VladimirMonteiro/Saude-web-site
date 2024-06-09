
document.addEventListener("DOMContentLoaded", ()=> {


    let scrollButton1 = document.getElementById("scroll-button1")
    let secitonTarget1 = document.getElementById("service1")

    let scrollButton2 = document.getElementById("scroll-button2")
    let sectionTarget2 = document.getElementById("service2")



scrollButton1.addEventListener("click", ()=> {
    
    let targetDivPosition = secitonTarget1.offsetTop
    
    window.scrollTo({
        top: targetDivPosition,
        behavior: "smooth"
    })
})

scrollButton2.addEventListener("click", () => {

    let targetDivPosition = sectionTarget2.offsetTop
    
    window.scrollTo({
        top: targetDivPosition,
        behavior: "smooth"
    })

})

})

