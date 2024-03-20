const mailBtn = document.getElementById("mailBtn");
const modalReg = document.getElementById("modalReg");
const modalMail = document.getElementById("modalMail");
const regModal = document.getElementsByClassName("modalReg");
const modalRegClose = document.getElementsByClassName("modalReg__close");
const regBtn = document.getElementById("regBtn");

mailBtn.addEventListener("click", ()=>{
    modalMail.classList.add("fade__in");
    document.body.style.overflowY = "hidden";
});

if(regBtn){
    regBtn.addEventListener("click", ()=>{
        modalReg.classList.add("fade__in");
        document.body.style.overflowY = "hidden";
    });
}

// modalRegClose.addEventListener("click", ()=>{
//     modalReg.classList.remove("fade__in");
//     document.body.style.overflowY = "auto";
// });

for (const el of modalRegClose) {
    el.addEventListener("click", ()=>{
        console.log("click");
        for (const modal of regModal) {
            if(modal.classList.contains("fade__in")){
                modal.classList.remove("fade__in");
                document.body.style.overflowY = "auto";
                
            }
        }
    })
}