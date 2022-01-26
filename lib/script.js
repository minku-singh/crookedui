let btnToggle = document.querySelector(".btn-toggle");
let badgePillBtnToggle = document.querySelector(".badge__pill__btn__toggle");


btnToggle.addEventListener("click", handleBtnToggle);


function handleBtnToggle(){
    if(badgePillBtnToggle.style.display === "block"){
        badgePillBtnToggle.style.display = "none";
    } else {
        badgePillBtnToggle.style.display = "block";
    }
}