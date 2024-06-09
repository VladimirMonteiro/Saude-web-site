
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


let buttonRegister = document.getElementById("buttonLogin")

buttonRegister.addEventListener("click", ()=> {

    const auth = localStorage.getItem("users")
    console.log(auth)

    if (!auth) {
        buttonRegister.setAttribute("href", "./pages/login.html");
    } else {
        buttonRegister.setAttribute("href", "./pages/user.html");
    }
})

})

