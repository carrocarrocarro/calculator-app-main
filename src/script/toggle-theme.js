console.log("working")

const toggleBtns = document.querySelectorAll(".theme-toggle-btn")
const toggleBtnsArr = [...toggleBtns];
const body = document.body

toggleBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
        button.style.opactiy = "1";
        
        if(index===0 && body.classList.contains("theme1")) {
            console.log('clicked')
            return
        }else if(index===0 && body.classList.contains("theme2")) {
            body.classList.remove("theme2")
            body.classList.add("theme1")
        }else if(index===0 && body.classList.contains("theme3")) {
            body.classList.remove("theme3")
            body.classList.add("theme1")
        }else if(index===1 && body.classList.contains("theme2")) {
            return
        }else if(index===1 && body.classList.contains("theme1")) {
            body.classList.remove("theme1")
            body.classList.add("theme2")
        }else if(index===1 && body.classList.contains("theme3")) {
            body.classList.remove("theme3")
            body.classList.add("theme2")
        }else if(index===2 && body.classList.contains("theme3")) {
            return
        }else if(index===2 && body.classList.contains("theme1")) {
            body.classList.remove("theme1")
            body.classList.add("theme3")
        }else {
            body.classList.remove("theme2")
            body.classList.add("theme3")
        }
        

       /*  toggleBtns
        .filter (function(item) {
            return item != button
        })
        .forEach((item) => {
            item.style.opactiy = "0"
        }) */
    })
})